"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// Sections where images can be updated
const SECTIONS = [
  { id: 'home_banner', label: 'Home Page Main Banner' },
  { id: 'principal_photo', label: 'Principal Photo' },
  { id: 'about_school', label: 'About Us Image' },
  { id: 'school_logo', label: 'School Logo' }
];

export default function ManageSiteImages() {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0].id);
  const [currentImage, setCurrentImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch the current image when a section is selected
  useEffect(() => {
    const fetchImage = async () => {
      setCurrentImage("");
      const { data } = await supabase
        .from('site_images')
        .select('image_url')
        .eq('section_name', selectedSection)
        .single();
      
      if (data) setCurrentImage(data.image_url);
    };
    fetchImage();
  }, [selectedSection]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      setMessage("Uploading... ⏳");
      
      const file = e.target.files?.[0];
      if (!file) return;

      // 1. Upload to Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${selectedSection}_${Math.random()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('school-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: publicUrlData } = supabase.storage
        .from('school-images')
        .getPublicUrl(fileName);
      
      const imageUrl = publicUrlData.publicUrl;

      // 3. Update or Insert into Database
      const { data: existingRecord } = await supabase
        .from('site_images')
        .select('*')
        .eq('section_name', selectedSection)
        .single();

      if (existingRecord) {
        await supabase.from('site_images').update({ image_url: imageUrl }).eq('section_name', selectedSection);
      } else {
        await supabase.from('site_images').insert([{ section_name: selectedSection, image_url: imageUrl }]);
      }

      setCurrentImage(imageUrl);
      setMessage("✅ Image updated successfully!");
    } catch (error: any) {
      console.error(error);
      setMessage("❌ Upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
        Manage Website Images 🖼️
      </h2>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2 text-lg">
          Select Section to Update
        </label>
        <select 
          className="w-full border-2 border-gray-300 p-3 rounded-lg text-lg focus:outline-none focus:border-blue-500"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          {SECTIONS.map((sec) => (
            <option key={sec.id} value={sec.id}>{sec.label}</option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 font-bold mb-2">Upload New Image</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {message && <p className="mt-4 text-lg font-medium text-green-600">{message}</p>}
      </div>

      {currentImage ? (
        <div className="mt-6 border p-4 rounded-lg bg-gray-50">
          <p className="text-sm text-gray-500 mb-2">Current Image on Website:</p>
          <img src={currentImage} alt="Current" className="w-full h-auto max-h-80 object-contain rounded-md shadow-sm" />
        </div>
      ) : (
        <div className="mt-6 border p-8 rounded-lg bg-gray-50 text-center">
          <p className="text-gray-500">No image is currently set for this section. Please upload one above.</p>
        </div>
      )}
    </div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// वेबसाइट के अलग-अलग हिस्से जहाँ फोटो बदलनी पड़ सकती है
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

  // जब भी Dropdown से नया ऑप्शन चुनें, तो उसकी पुरानी फोटो दिखाएं
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
      setMessage("अपलोड हो रही है... ⏳");
      
      const file = e.target.files?.[0];
      if (!file) return;

      // 1. फोटो को Storage में डालना
      const fileExt = file.name.split('.').pop();
      const fileName = `${selectedSection}_${Math.random()}.${fileExt}`; // फोटो का नाम सेक्शन के नाम पर
      
      const { error: uploadError } = await supabase.storage
        .from('school-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2. फोटो का लिंक निकालना
      const { data: publicUrlData } = supabase.storage
        .from('school-images')
        .getPublicUrl(fileName);
      
      const imageUrl = publicUrlData.publicUrl;

      // 3. Database में चेक करना कि इस सेक्शन की फोटो पहले से है या नहीं
      const { data: existingRecord } = await supabase
        .from('site_images')
        .select('*')
        .eq('section_name', selectedSection)
        .single();

      if (existingRecord) {
        // अगर पहले से है, तो उसे Update कर दो
        await supabase.from('site_images').update({ image_url: imageUrl }).eq('section_name', selectedSection);
      } else {
        // अगर नहीं है, तो नई Insert कर दो
        await supabase.from('site_images').insert([{ section_name: selectedSection, image_url: imageUrl }]);
      }

      setCurrentImage(imageUrl);
      setMessage("✅ फोटो शानदार तरीके से अपडेट हो गई!");
    } catch (error: any) {
      console.error(error);
      setMessage("❌ अपलोड फेल हो गया: " + error.message);
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
          कौन सी फोटो बदलनी है? (Select Section)
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
        <label className="block text-gray-700 font-bold mb-2">नई फोटो चुनें (Upload New)</label>
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
          <p className="text-sm text-gray-500 mb-2">अभी वेबसाइट पर यह फोटो लगी है (Current Image):</p>
          <img src={currentImage} alt="Current" className="w-full h-auto max-h-80 object-contain rounded-md shadow-sm" />
        </div>
      ) : (
        <div className="mt-6 border p-8 rounded-lg bg-gray-50 text-center">
          <p className="text-gray-500">इस जगह के लिए अभी कोई फोटो सेट नहीं है। ऊपर से अपलोड करें।</p>
        </div>
      )}
    </div>
  );
}
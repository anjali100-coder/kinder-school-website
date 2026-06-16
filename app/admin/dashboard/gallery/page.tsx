"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function GalleryAdmin() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<any[]>([]);

  // 1. गैलरी की सारी फोटो मंगाने वाला फंक्शन
  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false }); // सबसे नई फोटो सबसे ऊपर
    
    if (data) setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // 2. नई फोटो अपलोड करने वाला फंक्शन
  const handleUpload = async () => {
    if (!file) {
      alert("❌ पहले कोई फोटो चुनें!");
      return;
    }
    setLoading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `gallery_${Date.now()}.${fileExt}`;

      // Storage में डालें
      const { error: uploadError } = await supabase.storage
        .from('school-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // पब्लिक लिंक निकालें
      const { data: urlData } = supabase.storage
        .from('school-images')
        .getPublicUrl(fileName);

      // Database (gallery table) में नई लाइन जोड़ें (Insert)
      const { error: dbError } = await supabase
        .from('gallery')
        .insert([{ image_url: urlData.publicUrl }]);

      if (dbError) throw dbError;

      alert("✅ फोटो गैलरी में शानदार तरीके से जुड़ गई!");
      setFile(null); 
      fetchImages(); // अपलोड होते ही लिस्ट को रिफ्रेश करें

    } catch (error: any) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // 3. फोटो डिलीट करने वाला फंक्शन
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("⚠️ क्या आप सच में इस फोटो को गैलरी से हटाना चाहते हैं?");
    if (!confirmDelete) return;

    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (!error) {
      fetchImages(); // डिलीट होते ही लिस्ट रिफ्रेश करें
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#243bb5] mb-8">Manage School Gallery 📸</h2>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border-t-4 border-green-500">
          <h3 className="text-xl font-semibold mb-4">Add New Photo</h3>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-500"
            />
            <button
              onClick={handleUpload}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              {loading ? "Uploading..." : "Upload Photo"}
            </button>
          </div>
        </div>

        {/* Gallery Grid Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Uploaded Photos ({images.length})</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="border rounded-lg overflow-hidden shadow-sm relative group">
                <img src={img.image_url} alt="Gallery" className="w-full h-48 object-cover" />
                
                {/* Delete Button (Hover करने पर दिखेगा) */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleDelete(img.id)}
                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-800 shadow-md"
                    title="Delete Photo"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
            
            {images.length === 0 && (
              <p className="text-gray-500 col-span-3 text-center py-8">अभी गैलरी में कोई फोटो नहीं है। ऊपर से अपलोड करें!</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function PublicGallery() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false }); // सबसे नई फोटो सबसे ऊपर
      
      if (data) setImages(data);
      setLoading(false);
    };
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#243bb5] mb-12">
          School Gallery 📸
        </h1>

        {loading ? (
          <p className="text-center text-xl text-gray-500">Loading photos... ⏳</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <div key={img.id} className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={img.image_url} 
                  alt="School Moment" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
            
            {images.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">अभी गैलरी में कोई फोटो नहीं है।</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
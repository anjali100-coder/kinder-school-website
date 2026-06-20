"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function DynamicContent({ pageName }: { pageName: string }) {
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('website_content')
        .select('*')
        .eq('page_name', pageName)
        .order('id', { ascending: true });
        
      if (data) {
        // 🔥 यहाँ हमने नया फ़िल्टर लगा दिया है!
        // यह उन 'सेटिंग्स' को ऊपर बड़ा-बड़ा दिखने से रोकेगा।
        const visibleSections = data.filter(
          (sec) => sec.section_name !== 'school_address' && 
                   sec.section_name !== 'school_phone' && 
                   sec.section_name !== 'school_email'
        );
        setSections(visibleSections);
      }
      setLoading(false);
    };
    fetchContent();
  }, [pageName]);

  // अगर डेटा नहीं है तो कुछ मत दिखाओ
  if (loading || sections.length === 0) return null; 

  return (
    <div className="w-full max-w-7xl mx-auto my-8 px-4">
      {sections.map((sec) => (
        <div key={sec.id} className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          
          {/* Title अगर है, और वो '-' नहीं है, तभी दिखाओ */}
          {sec.title && sec.title.trim() !== '-' && (
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">{sec.title}</h2>
          )}
          
          {/* आपका पूरा पैराग्राफ यहाँ दिखेगा */}
          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-lg">
            {sec.description}
          </p>
        </div>
      ))}
    </div>
  );
}
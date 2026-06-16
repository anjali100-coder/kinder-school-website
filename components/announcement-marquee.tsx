'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AnnouncementMarquee() {
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      // announcements टेबल से ताज़ा जानकारी ला रहे हैं
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false }) // सबसे नई खबर सबसे पहले
        .limit(5); // एक साथ 5 ताज़ा ख़बरें दिखाएंगे

      if (data && data.length > 0) {
        setAnnouncements(data);
      }
    };
    fetchAnnouncements();
  }, []);

  // अगर डेटाबेस में कोई न्यूज़ नहीं है, तो यह पट्टी अपने आप गायब हो जाएगी
  if (announcements.length === 0) return null;

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden shadow-md relative z-50 flex items-center">
      <div className="marquee-content whitespace-nowrap inline-block font-semibold tracking-wide text-sm md:text-base">
        {announcements.map((item, index) => (
          <span key={index} className="mx-10">
            🔔 {item.title || item.message || item.description || "Important Update"}
          </span>
        ))}
      </div>

      {/* चलती हुई लाइन का असली जादू (CSS Animation) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .marquee-content {
          padding-left: 100%;
          animation: scroll-marquee 25s linear infinite;
        }
        .marquee-content:hover {
          animation-play-state: paused; /* माउस ले जाने पर लाइन रुक जाएगी */
        }
        @keyframes scroll-marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100%, 0); }
        }
      `}} />
    </div>
  );
}
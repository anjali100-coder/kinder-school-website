'use client'

import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export function HeroSection() {
  const [bannerUrl, setBannerUrl] = useState("/main.jpg");
  
  // 👇 यहाँ हमने टेक्स्ट के लिए नए State बनाए हैं
  const [heroHeading, setHeroHeading] = useState("Where Little Dreams Begin to Bloom");
  const [heroText, setHeroText] = useState("At Cecil Convent School Junior Playway, we nurture young minds with love, creativity, and joy. Building a strong foundation for your child's bright future in Ambala Cantt.");

  useEffect(() => {
    const fetchHeroData = async () => {
      // 1. फोटो मँगवाने का कोड (आपका पुराना कोड)
      const { data: imgData } = await supabase
        .from('site_images')
        .select('image_url')
        .eq('section_name', 'home_banner')
        .single();
      
      if (imgData && imgData.image_url) {
        setBannerUrl(imgData.image_url);
      }

      // 2. टेक्स्ट मँगवाने का नया कोड (एडमिन पैनल से)
      const { data: textData } = await supabase
        .from('website_content')
        .select('*')
        .eq('page_name', 'Home Page')
        .order('id', { ascending: false })
        .limit(1); // सबसे लेटेस्ट वाली एंट्री उठाएगा

      if (textData && textData.length > 0) {
        // अगर एडमिन पैनल में कुछ नया डाला है, तो उसे सेट कर दो
        if (textData[0].section_name) setHeroHeading(textData[0].section_name);
        if (textData[0].content) setHeroText(textData[0].content);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-16 md:py-24 lg:py-32">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-8 md:left-16 text-yellow-400 opacity-70 animate-bounce">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-300/30 blur-2xl"></div>
      </div>
      <div className="absolute top-40 right-12 md:right-20 text-pink-300 opacity-60 animate-pulse">
        <Heart className="w-8 h-8 md:w-12 md:h-12 fill-current" />
      </div>
      <div className="absolute bottom-32 left-1/3 text-blue-300 opacity-50 animate-bounce delay-500">
        <Sparkles className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
              ✨ Welcome to Learning &amp; Play
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight">
              {/* 👇 यहाँ जादू है: अगर टेक्स्ट पुराना है तो मल्टी-कलर, अगर नया है तो सॉलिड ब्लू */}
              {heroHeading === "Where Little Dreams Begin to Bloom" ? (
                <>
                  <span className="text-balance">Where Little </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Dreams</span>
                  <span className="text-balance"> </span>
                  <span className="block text-yellow-500">Begin to Bloom</span>
                </>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
                  {heroHeading}
                </span>
              )}
            </h1>
            
            {/* 👇 Description भी अब डायनामिक हो गया है */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 whitespace-pre-wrap">
              {heroText}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* BUTTON 1 */}
              <Link href="/journey">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:opacity-90">
                  Start Your Journey
                </Button>
              </Link>

              {/* BUTTON 2 */}
              <Link href="/about-school">
                <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-white transition-colors">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 pt-8 border-t-2 border-yellow-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600">15+</div>
                <div className="text-xs md:text-sm text-gray-600 font-semibold">Years of Trust</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600">500+</div>
                <div className="text-xs md:text-sm text-gray-600 font-semibold">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600">20+</div>
                <div className="text-xs md:text-sm text-gray-600 font-semibold">Expert Teachers</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 shadow-2xl bg-white border-4 border-yellow-300 aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={bannerUrl} alt="Cecil Convent School" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Decorative background shapes */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-yellow-200/30 rounded-3xl -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-100/30 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
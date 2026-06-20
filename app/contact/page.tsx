"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import DynamicContent from '@/components/DynamicContent';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });

  // 👇 यहाँ हमने डायनामिक डेटा के लिए जगह बनाई है
  const [schoolAddress, setSchoolAddress] = useState("Loading address...");
  const [schoolPhone, setSchoolPhone] = useState("Loading phone...");
  const [schoolEmail, setSchoolEmail] = useState("Loading email...");

  useEffect(() => {
    const fetchContactInfo = async () => {
      const { data, error } = await supabase
        .from('website_content')
        .select('*')
        .eq('page_name', 'Contact');

      if (data) {
        data.forEach((item) => {
          if (item.section_name === 'school_address') setSchoolAddress(item.description);
          if (item.section_name === 'school_phone') setSchoolPhone(item.description);
          if (item.section_name === 'school_email') setSchoolEmail(item.description);
        });
      }
    };
    fetchContactInfo();
  }, []);

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error: insertError } = await supabase.from('contact_inquiries').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      ]);
      if (insertError) throw new Error("Data save error: " + insertError.message);

      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: `${formData.firstName} ${formData.lastName}`, email: formData.email }),
      });

      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error(error);
      alert("Kuch galat ho gaya, kripya dobara koshish karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10 relative">
      
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center">
            <div className="text-green-500 text-7xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Message Sent!</h2>
            <p className="text-gray-600 mb-8 text-lg">Aapka message hum tak pahunch gaya hai.</p>
            <button onClick={() => setIsSubmitted(false)} className="bg-[#243bb5] hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-bold w-full">Close</button>
          </div>
        </div>
      )}

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#243bb5] mb-4">Contact Information</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Have questions about our curriculum, facilities, or admission process? 
          Our team is here to help provide all the information you need.
        </p>
      </div>

      {/* ADMIN PANEL DYNAMIC TEXT */}
      <DynamicContent pageName="Contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="text-[#243bb5] text-2xl mt-1">📍</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Our Campus</h3>
              {/* 👇 यहाँ डायनामिक एड्रेस आएगा */}
              <p className="text-gray-600 whitespace-pre-wrap">{schoolAddress}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#243bb5] text-2xl mt-1">📞</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Phone Number</h3>
              {/* 👇 यहाँ डायनामिक नंबर आएगा */}
              <p className="text-gray-600">{schoolPhone}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#243bb5] text-2xl mt-1">✉️</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Email Address</h3>
              {/* 👇 यहाँ डायनामिक ईमेल आएगा */}
              <p className="text-gray-600">{schoolEmail}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#243bb5]">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2" required></textarea>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-[#e2695c] hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg">
              {loading ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
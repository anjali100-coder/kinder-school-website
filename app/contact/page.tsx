"use client";

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Supabase mein data save karna
      const { error: insertError } = await supabase.from('contact_inquiries').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      ]);

      if (insertError) {
        throw new Error("Data save error: " + insertError.message);
      }

      // 2. Admin ko Email bhejna (Jo humne pehle set kiya tha)
      const fullName = `${formData.firstName} ${formData.lastName}`;
      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName,
          email: formData.email,
        }),
      });

      // 3. Success Popup dikhana aur form khali karna
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
      
      {/* SUCCESS POPUP */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center">
            <div className="text-green-500 text-7xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Message Sent!</h2>
            <p className="text-gray-600 mb-8 text-lg">Aapka message hum tak pahunch gaya hai. Hum jald hi aapse sampark karenge.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-[#243bb5] hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-bold w-full transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#243bb5] mb-4">Contact Information</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Have questions about our curriculum, facilities, or admission process? 
          Our team is here to help provide all the information you need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: Contact Details */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="text-[#243bb5] text-2xl mt-1">📍</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Our Campus</h3>
              <p className="text-gray-600">Opposite GPO, Staff Road,<br/>Ambala Cantt, Haryana</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#243bb5] text-2xl mt-1">📞</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Phone Number</h3>
              <p className="text-gray-600">0171-4002666</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-[#243bb5] text-2xl mt-1">✉️</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Email Address</h3>
              <p className="text-gray-600">ambalacantt@cecilconventschooljunior.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#243bb5]">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="John" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Doe" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="john@example.com" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="+91 XXXXX XXXXX" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-[#e2695c] hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
              {loading ? "Sending..." : "🚀 Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
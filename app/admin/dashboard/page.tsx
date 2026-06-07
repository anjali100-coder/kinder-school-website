"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminDashboard() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Form states for Notice
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Supabase se data mangwane ka function
  const fetchAnnouncements = async () => {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('id', { ascending: false }); // Naya notice sabse upar dikhega
    
    if (!error && data) {
      setAnnouncements(data);
    }
  };

  // Jab page khule toh data automatically aa jaye
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Naya Notice save karne ka function
  const handleAddNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const today = new Date().toLocaleDateString('en-GB'); // DD/MM/YYYY format
    
    const { error } = await supabase.from('announcements').insert([
      { title: title, description: description, date: today, is_active: true }
    ]);

    if (!error) {
      alert("✅ Naya Notice Add Ho Gaya!");
      setTitle('');
      setDescription('');
      fetchAnnouncements(); // Naya notice add hote hi list update ho jayegi
    } else {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex mt-16">
      
      {/* SIDEBAR (Left Menu) */}
      <div className="w-64 bg-[#243bb5] text-white p-6 shadow-xl hidden md:block">
        <h2 className="text-2xl font-bold mb-8 border-b border-blue-400 pb-4">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="cursor-pointer bg-white text-[#243bb5] px-4 py-2 rounded-lg font-bold">
            📢 Announcements
          </li>
          <li className="cursor-pointer hover:bg-blue-800 px-4 py-2 rounded-lg transition">
            👥 Teachers & Staff
          </li>
          <li className="cursor-pointer hover:bg-blue-800 px-4 py-2 rounded-lg transition">
            💰 Fee Structure
          </li>
          <li className="cursor-pointer hover:bg-blue-800 px-4 py-2 rounded-lg transition mt-8 text-red-300">
            🔒 Logout
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT (Right Side) */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Announcements</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ADD NEW NOTICE FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#e2695c]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Notice</h2>
            <form onSubmit={handleAddNotice} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notice Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  placeholder="E.g. Summer Holidays" 
                  required 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notice Detail</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  rows={4} 
                  placeholder="Type the full notice message here..." 
                  required 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-[#243bb5] hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition"
              >
                {loading ? "Saving..." : "➕ Publish Notice"}
              </button>
            </form>
          </div>

          {/* LIST OF PUBLISHED NOTICES */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Current Notices</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {announcements.length === 0 ? (
                <p className="text-gray-500 italic">Abhi tak koi notice nahi dala gaya hai.</p>
              ) : (
                announcements.map((notice) => (
                  <div key={notice.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-[#243bb5]">{notice.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{notice.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm whitespace-pre-wrap">{notice.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
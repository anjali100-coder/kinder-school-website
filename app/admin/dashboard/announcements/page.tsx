'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react'; 

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ManageAnnouncements() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAnnouncements = async () => {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setAnnouncements(data);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setLoading(true);

    const { error } = await supabase
      .from('announcements')
      .insert([{ title: newMessage }]); 

    if (!error) {
      setNewMessage(""); 
      fetchAnnouncements(); 
    } else {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  const handleDelete = async (id: any) => {
    if (!window.confirm("Are you sure you want to delete this announcement?")) return;
    
    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchAnnouncements(); 
    } else {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Notice Board</h1>
        <p className="text-gray-600 mt-2">Add or remove announcements for the scrolling marquee on the homepage.</p>
      </div>

      <form onSubmit={handleAdd} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 md:items-end">
        <div className="flex-1 space-y-2">
          <label className="text-sm font-semibold text-gray-700">New Notice</label>
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="e.g., School will remain closed tomorrow due to heavy rain..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto">
          {loading ? "Adding..." : "Add Notice"}
        </Button>
      </form>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Current Announcements</h2>
        </div>
        
        {announcements.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No announcements found. Add a new one above!</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {announcements.map((item) => (
              <li key={item.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div className="flex-1 pr-4">
                  <p className="text-gray-800 font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Date: {new Date(item.created_at).toLocaleDateString('en-IN')}
                  </p>
                </div>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors flex-shrink-0"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
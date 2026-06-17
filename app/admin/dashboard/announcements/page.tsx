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

  // डेटाबेस से सारी ख़बरें मँगवाने का फंक्शन
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

  // नई खबर जोड़ने का फंक्शन
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setLoading(true);

    const { error } = await supabase
      .from('announcements')
      .insert([{ title: newMessage }]); // ध्यान दें: यहाँ 'title' कॉलम में डेटा जा रहा है

    if (!error) {
      setNewMessage(""); // बॉक्स खाली कर दो
      fetchAnnouncements(); // लिस्ट को रिफ्रेश कर दो
    } else {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  // पुरानी खबर डिलीट करने का फंक्शन
  const handleDelete = async (id: any) => {
    if (!window.confirm("क्या आप सच में इसे Delete करना चाहते हैं?")) return;
    
    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchAnnouncements(); // लिस्ट रिफ्रेश
    } else {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Notice Board</h1>
        <p className="text-gray-600 mt-2">यहाँ से वेबसाइट की चलती हुई लाल पट्टी (Marquee) पर ख़बरें डालें या डिलीट करें।</p>
      </div>

      {/* खबर जोड़ने वाला फॉर्म */}
      <form onSubmit={handleAdd} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 md:items-end">
        <div className="flex-1 space-y-2">
          <label className="text-sm font-semibold text-gray-700">नई सूचना (New Notice)</label>
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="जैसे: कल तेज़ बारिश के कारण स्कूल की छुट्टी रहेगी..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto">
          {loading ? "Adding..." : "Add Notice"}
        </Button>
      </form>

      {/* पुरानी ख़बरों की लिस्ट */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Current Announcements</h2>
        </div>
        
        {announcements.length === 0 ? (
          <div className="p-6 text-center text-gray-500">अभी कोई खबर नहीं है। ऊपर से नई खबर जोड़ें!</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {announcements.map((item) => (
              <li key={item.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div className="flex-1 pr-4">
                  <p className="text-gray-800 font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    तारीख: {new Date(item.created_at).toLocaleDateString('en-IN')}
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
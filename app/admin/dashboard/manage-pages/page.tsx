"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ManageAllPages() {
  const [contents, setContents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // फॉर्म के लिए स्टेट्स
  const [pageName, setPageName] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('website_content').select('*').order('page_name', { ascending: true });
    if (data) setContents(data);
    setLoading(false);
  };

  const handleAddContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await supabase.from('website_content').insert([
      { page_name: pageName, section_name: sectionName, title: title, description: description }
    ]);

    if (!error) {
      setPageName(''); setSectionName(''); setTitle(''); setDescription('');
      fetchContents();
    } else {
      alert('Error adding content!');
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: number) => {
    if(confirm('क्या आप सच में इसे डिलीट करना चाहते हैं? यह वेबसाइट से तुरंत हट जाएगा!')) {
      await supabase.from('website_content').delete().eq('id', id);
      fetchContents();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Master Control: Manage All Pages</h1>

      {/* नया कंटेंट जोड़ने का फॉर्म */}
      <form onSubmit={handleAddContent} className="mb-8 bg-gray-50 p-5 rounded-md border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Add Content to Any Page</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          
          {/* पेज सेलेक्ट करने का ड्रॉपडाउन */}
          <select 
            value={pageName} 
            onChange={(e) => setPageName(e.target.value)} 
            className="border border-gray-300 p-2 rounded bg-white focus:ring-2 focus:ring-blue-500" 
            required
          >
            <option value="" disabled>👉 Select Page...</option>
            <option value="Home">Home Page</option>
            <option value="About">About Us</option>
            <option value="Admission">Admission Process</option>
            <option value="Contact">Contact Page</option>
          </select>

          <input type="text" placeholder="Section Name (e.g., Vision, Main Banner)" value={sectionName} onChange={(e) => setSectionName(e.target.value)} className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500" required />
        </div>
        
        <div className="flex flex-col gap-4 mb-4">
          <input type="text" placeholder="Main Heading (Title)" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500" required />
          <textarea placeholder="Write the full paragraph or details here..." value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 p-2 rounded h-32 focus:ring-2 focus:ring-blue-500" required />
        </div>

        <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium">
          {isSubmitting ? 'Adding to Website...' : 'Add Content to Website'}
        </button>
      </form>

      {/* पूरी वेबसाइट का कंटेंट दिखाने वाला हिस्सा */}
      <h2 className="text-lg font-semibold mb-4 text-gray-700">All Website Content</h2>
      {loading ? <p className="text-gray-500">Loading website data...</p> : (
        <div className="grid grid-cols-1 gap-4">
          {contents.map((item) => (
            <div key={item.id} className="border border-gray-200 p-4 rounded bg-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex gap-2 mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Page: {item.page_name}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Section: {item.section_name}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1 whitespace-pre-wrap">{item.description}</p>
              </div>
              <button onClick={() => handleDelete(item.id)} className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded hover:bg-red-100 font-medium text-sm whitespace-nowrap">
                Delete
              </button>
            </div>
          ))}
          {contents.length === 0 && <p className="text-gray-500 bg-gray-50 p-4 rounded text-center border border-gray-200">No content added yet.</p>}
        </div>
      )}
    </div>
  );
}
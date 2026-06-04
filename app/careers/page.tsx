"use client";

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner'; // Popup ke liye add kiya hai

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CareersPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    qualification: '',
    experience: '',
    position: '',
    expectedSalary: '',
    address: '',
    message: ''
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let resumeUrl = "";

      // 1. Resume Upload
      if (resumeFile) {
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('resumes') 
          .upload(fileName, resumeFile);

        if (uploadError) {
          throw new Error("Resume upload fail: " + uploadError.message);
        }

        const { data: publicUrlData } = supabase.storage
          .from('resumes')
          .getPublicUrl(fileName);

        resumeUrl = publicUrlData.publicUrl;
      }

      // 2. Table Data Insert
      const { error: insertError } = await supabase.from('job_applications').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          mobile_number: formData.mobileNumber,
          qualification: formData.qualification,
          experience: formData.experience,
          position: formData.position,
          expected_salary: formData.expectedSalary,
          address: formData.address,
          message: formData.message,
          resume_url: resumeUrl 
        }
      ]);

      if (insertError) {
        throw new Error("Data save error: " + insertError.message);
      }

      // Yahan SUCCESS ka popup aayega!
      toast.success('Aapki application safaltapurvak jama ho gayi hai!');
      
      // Form reset
      setFormData({ fullName: '', email: '', mobileNumber: '', qualification: '', experience: '', position: '', expectedSalary: '', address: '', message: '' });
      setResumeFile(null);
      // File input ko clear karne ke liye
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      console.error(error);
      // Yahan ERROR ka popup aayega
      toast.error(error.message || "Kuch galat ho gaya, kripya dobara koshish karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 mt-10">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#243bb5] mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-600">
          Please fill out the details below and upload your resume to apply for a position at Cecil Convent School Junior Playway.
        </p>
      </div>

      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-12 border-t-8 border-[#243bb5]">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. Manish Sharma" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="your@email.com" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
              <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="+91 XXXXX XXXXX" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification</label>
              <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. B.Ed, M.A., NTT" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Teaching Experience</label>
              <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. 3 Years" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Position Applied For</label>
              <select name="position" value={formData.position} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" required>
                <option value="">Select a position...</option>
                <option value="playway-teacher">Playway Teacher</option>
                <option value="nursery-teacher">Nursery Teacher</option>
                <option value="coordinator">Coordinator</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Salary (₹)</label>
              <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. 15,000 / month" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Address / City</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. Ambala Cantt" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join us?</label>
            <textarea rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Tell us a little bit about yourself and why you'd be a great fit..." required></textarea>
          </div>

          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Upload Resume (PDF / Word file)</label>
            <input 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 cursor-pointer" 
              required
            />
          </div>

          <div className="pt-4 text-center">
            <button type="submit" disabled={loading} className="bg-[#243bb5] hover:bg-blue-800 text-white px-10 py-4 rounded-full text-lg font-bold w-full sm:w-auto transition-all shadow-lg hover:shadow-xl disabled:bg-blue-400">
              {loading ? "Submitting Application..." : "Submit Application"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
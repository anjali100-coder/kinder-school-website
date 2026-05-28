import React from 'react';
import Link from 'next/link';

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-blue-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Academic Excellence
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-md">
            Igniting curiosity, fostering critical thinking, and shaping the innovative leaders of tomorrow.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Curriculum Structure</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We follow a comprehensive, modern curriculum designed to meet global standards while staying rooted in our core values. Our learning pathways are tailored for every stage of a child's development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pre-Primary & Primary */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Primary Education" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Primary Wing</h3>
              <p className="text-gray-600 mb-4">Focuses on foundational literacy, basic numeracy, and environmental awareness through play-way methods and interactive storytelling.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Play-based Learning</li>
                <li>✓ Cognitive Development</li>
                <li>✓ Creative Arts & Crafts</li>
              </ul>
            </div>
          </div>

          {/* Middle School */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" alt="Middle School" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Middle Wing</h3>
              <p className="text-gray-600 mb-4">Bridges the gap between foundational concepts and advanced learning. We encourage analytical thinking and practical projects.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Experiential Learning</li>
                <li>✓ Logic & Reasoning</li>
                <li>✓ Interdisciplinary Projects</li>
              </ul>
            </div>
          </div>

          {/* Senior Secondary */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Senior School" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Senior Wing</h3>
              <p className="text-gray-600 mb-4">Rigorous academic preparation for board examinations and competitive entrance tests, shaping students for successful careers.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Career Counseling</li>
                <li>✓ Advanced Laboratory Work</li>
                <li>✓ Board Exam Excellence</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
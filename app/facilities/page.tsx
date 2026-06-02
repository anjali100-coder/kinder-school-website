import React from 'react';
import Link from 'next/link';

export default function FacilitiesPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">World-Class Facilities</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          At Cecil Convent School Junior Playway, we provide a safe, engaging, and modern environment tailored specifically for your child's holistic development and daily comfort.
        </p>
      </div>

      {/* 2. Main Facilities Grid (6 Cards instead of 4) */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Everything Your Child Needs</h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-blue-500">
            <div className="text-5xl mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center">🏫</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Smart Classrooms</h3>
            <p className="text-gray-600 leading-relaxed">Interactive and digital learning environments equipped with modern teaching aids to keep young minds active and engaged.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-yellow-400">
            <div className="text-5xl mb-6 bg-yellow-50 w-20 h-20 rounded-full flex items-center justify-center">⚽</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Safe Play Area</h3>
            <p className="text-gray-600 leading-relaxed">Spacious indoor and outdoor zones with child-safe flooring and colorful equipment specially designed for physical growth.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-green-500">
            <div className="text-5xl mb-6 bg-green-50 w-20 h-20 rounded-full flex items-center justify-center">🚌</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Transport Facility</h3>
            <p className="text-gray-600 leading-relaxed">Safe, comfortable, and reliable pick-and-drop transportation network covering major routes across Ambala with trained staff.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-red-500">
            <div className="text-5xl mb-6 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center">📹</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">24/7 CCTV Security</h3>
            <p className="text-gray-600 leading-relaxed">Complete campus surveillance with high-definition cameras monitoring every corner to keep your child absolutely safe.</p>
          </div>

          {/* Card 5 (New) */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-purple-500">
            <div className="text-5xl mb-6 bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center">🎨</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Art & Activity Room</h3>
            <p className="text-gray-600 leading-relaxed">A dedicated creative space for arts, crafts, music, and dance where children can freely express their hidden talents.</p>
          </div>

          {/* Card 6 (New) */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-teal-500">
            <div className="text-5xl mb-6 bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center">🩺</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Medical Room</h3>
            <p className="text-gray-600 leading-relaxed">A fully equipped medical room with basic first-aid and trained staff to handle any minor emergencies immediately.</p>
          </div>

        </div>
      </div>

      {/* 3. Bottom Call to Action (CTA) Section */}
      <div className="bg-blue-50 py-16 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Experience Our Campus Live</h2>
          <p className="text-lg text-gray-700 mb-8">We invite parents to visit Cecil Convent School and see these world-class facilities in person.</p>
          <div className="flex justify-center gap-4">
            
          </div>
        </div>
      </div>

    </div>
  );
}
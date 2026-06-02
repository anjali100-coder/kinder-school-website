import React from 'react';

export default function AcademicPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">Our Academic Programs</h1>
        
        <div className="space-y-8">
          {/* Playway & Nursery Block */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 border-l-8 border-blue-600 shadow-sm hover:shadow-md transition-all">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Playway & Nursery</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our earliest programs focus on sensory development, motor skills, and basic social interaction. We believe in teaching through fun, play-based activities that make coming to school an exciting daily adventure.
            </p>
          </div>
          
          {/* LKG & UKG Block */}
          <div className="bg-yellow-50 rounded-2xl p-8 md:p-10 border-l-8 border-yellow-500 shadow-sm hover:shadow-md transition-all">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">LKG & UKG</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As children grow, we introduce them to reading, writing, numbers, and creative arts. Our curriculum is designed to build a rock-solid foundation, preparing them confidently for their primary education journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
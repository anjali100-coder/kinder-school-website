import React from 'react';

export default function Achievements() {
  return (
    <div className="min-h-[70vh] bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-[#243bb5] py-12 px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Our Achievements</h1>
          <p className="text-blue-100 mt-2 font-medium">Celebrating every milestone</p>
        </div>
        <div className="p-12 text-center">
          <p className="text-lg text-gray-700">We take pride in the holistic development of our students. Our little stars constantly shine in various intra-school activities, sports, and cultural events.</p>
        </div>
      </div>
    </div>
  );
}
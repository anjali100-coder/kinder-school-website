import React from 'react';
import Link from 'next/link';

export default function StudentsCornerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Students&apos; Corner
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto drop-shadow-md">
            A space dedicated to student leadership, creativity, clubs, and campus life.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Life at Cecil Convent</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Student Council */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
                alt="Student Council" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-3">Student Council</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Empowering the leaders of tomorrow. Our Student Council takes an active role in organizing events, voicing student opinions, and maintaining discipline across the campus.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition">Meet the Council &rarr;</button>
            </div>
          </div>

          {/* Clubs & Societies */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1577415124269-b9140d428fd0?q=80&w=2070&auto=format&fit=crop" 
                alt="Clubs and Societies" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-3">Clubs & Societies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From the Robotics Club and Eco Club to the Debate Society and Art Workshop, students can join diverse groups to explore their passions outside the classroom.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition">Explore Clubs &rarr;</button>
            </div>
          </div>

          {/* School Magazine */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="h-60 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2073&auto=format&fit=crop" 
                alt="School Magazine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-3">Creative Expressions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dive into our annual school magazine &quot;The Cecil Chronicle&quot;. Read beautiful poems, insightful articles, and view stunning artwork contributed entirely by our students.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition">Read Latest Issue &rarr;</button>
            </div>
          </div>

          {/* Bulletin Board / Upcoming */}
          <div className="bg-purple-50 rounded-2xl shadow-lg overflow-hidden border border-purple-100 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
              📌 Student Bulletin Board
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                <span className="text-sm font-bold text-purple-600">October 15, 2026</span>
                <p className="font-semibold text-gray-800 mt-1">Inter-House Debate Competition</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                <span className="text-sm font-bold text-purple-600">November 2, 2026</span>
                <p className="font-semibold text-gray-800 mt-1">Annual Science Exhibition</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                <span className="text-sm font-bold text-purple-600">November 14, 2026</span>
                <p className="font-semibold text-gray-800 mt-1">Children&apos;s Day Grand Fete</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Palette, Music, Sparkles, Smile } from 'lucide-react';

export default function StudentsCorner() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#f07b46] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Students <span className="text-[#243bb5]">Corner</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-orange-100 font-medium">
            A creative space dedicated to the imagination, art, and joy of our little stars.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-10 rounded-3xl shadow-md border border-pink-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mb-6">
              <Palette className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Little Picassos</h3>
            <p className="text-gray-600">Explore the vibrant finger paintings, clay models, and beautiful craftwork created by our talented kindergarteners.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md border border-purple-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 mb-6">
              <Music className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rhymes & Rhythm</h3>
            <p className="text-gray-600">From action songs to morning prayers, watch our little ones express themselves through music and dance.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md border border-green-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Storytelling Magic</h3>
            <p className="text-gray-600">Fairy tales, puppet shows, and moral stories that transport our students into a world of imagination and wonder.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md border border-blue-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-6">
              <Smile className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Joyful Moments</h3>
            <p className="text-gray-600">A gallery celebrating birthdays, festival celebrations, and the everyday smiles of the Cecil Convent family.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
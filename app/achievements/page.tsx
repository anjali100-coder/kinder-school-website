import React from 'react';
import { Trophy, Star, Medal, Award } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#243bb5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="text-[#f07b46]">Achievements</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium">
            Celebrating excellence, hard work, and the joyful milestones of Cecil Convent students.
          </p>
        </div>
      </div>

      {/* Stats/Highlights */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Trophy className="w-8 h-8" />, title: "Best Playway", stat: "Awarded", desc: "Recognized locally for excellence in early education." },
            { icon: <Star className="w-8 h-8" />, title: "Happy Kids", stat: "100%", desc: "Creating joyful memories every single day." },
            { icon: <Medal className="w-8 h-8" />, title: "Alumni Base", stat: "500+", desc: "Students successfully transitioned to formal schools." },
            { icon: <Award className="w-8 h-8" />, title: "Events Hosted", stat: "50+", desc: "Annual functions, sports meets, and cultural fests." }
          ].map((item, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#f07b46] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-[#f07b46] mb-4">
                {item.icon}
              </div>
              <h2 className="text-4xl font-black text-[#243bb5] mb-2">{item.stat}</h2>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { BookOpen, Lightbulb, Heart, Target } from 'lucide-react';

export default function Academic() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#243bb5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Academic <span className="text-[#f07b46]">Excellence</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium">
            A curriculum designed to spark curiosity and foster a lifelong love for learning.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#243bb5] mb-6 inline-block relative">
          Our Learning Approach
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#f07b46] rounded-full"></div>
        </h2>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mt-6">
          At Cecil Convent School Junior Playway, we do not just teach; we facilitate learning. Our early childhood program is carefully crafted to balance structured learning with free play. We focus on the cognitive, emotional, social, and physical development of every child in Ambala Cantt.
        </p>
      </div>

      {/* Curriculum Cards */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <BookOpen className="w-8 h-8" />, title: "Language Skills", desc: "Building vocabulary through phonics, storytelling, and interactive reading." },
            { icon: <Lightbulb className="w-8 h-8" />, title: "Cognitive Growth", desc: "Developing problem-solving skills with puzzles, blocks, and shapes." },
            { icon: <Heart className="w-8 h-8" />, title: "Creative Arts", desc: "Expressing imagination through drawing, coloring, and craftwork." },
            { icon: <Target className="w-8 h-8" />, title: "Motor Skills", desc: "Enhancing physical coordination through outdoor play and sensory activities." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-[#243bb5]">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#f07b46] mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
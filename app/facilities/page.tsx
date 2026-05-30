import React from 'react';
import { Bus, MonitorPlay, ShieldCheck, Gamepad2 } from 'lucide-react';

export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#243bb5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            World-Class <span className="text-[#f07b46]">Facilities</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium">
            Providing a safe, hygienic, and engaging environment for your little ones in Ambala Cantt.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { icon: <ShieldCheck className="w-10 h-10" />, title: "Safe & Secure Campus", desc: "The safety of your child is our top priority. Our campus is fully equipped with 24/7 CCTV surveillance and trained security personnel." },
            { icon: <Gamepad2 className="w-10 h-10" />, title: "Indoor & Outdoor Play Areas", desc: "Spacious, colorful, and child-safe play zones designed to develop motor skills and encourage social interaction among kids." },
            { icon: <MonitorPlay className="w-10 h-10" />, title: "Smart Classrooms", desc: "Air-conditioned classrooms equipped with modern smart boards and audio-visual aids to make learning interactive and fun." },
            { icon: <Bus className="w-10 h-10" />, title: "Transport Facility", desc: "Safe and comfortable school transport with GPS tracking and trained female attendants covering major routes across Ambala." }
          ].map((facility, index) => (
            <div key={index} className="flex gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100">
              <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#243bb5]">
                {facility.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
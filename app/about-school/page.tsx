import React from 'react';
import { BookOpen, Heart, Shield, Users, Target, Lightbulb } from 'lucide-react';

export default function AboutSchool() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Bada aur Professional Banner */}
      <div className="relative bg-[#243bb5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            About <span className="text-[#f07b46]">Cecil Convent School</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium">
            Nurturing young minds with love, creativity, and joy in the heart of Ambala Cantt.
          </p>
        </div>
      </div>

      {/* 2. Introduction Section */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#243bb5] mb-6 relative inline-block">
              Welcome to Our Junior Playway
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#f07b46] rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Cecil Convent School Junior Playway, we believe that early childhood education is the foundation for a lifetime of learning. Established with a vision to provide quality education, our school offers a warm, safe, and stimulating environment for children.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We follow a modern play-way methodology that encourages curiosity, creativity, and independent thinking. Our dedicated staff ensures that every child feels valued, loved, and inspired to explore their true potential.
            </p>
          </div>
          
          {/* Photo Box - Yahan baad mein aap real school ki photo laga sakte hain */}
          <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
            <div className="text-center p-6">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                 <Heart className="w-10 h-10 text-[#f07b46]" />
               </div>
               <p className="text-[#243bb5] font-bold text-xl">A Home Away From Home</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Vision & Mission Cards */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border-b-4 border-[#243bb5] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#243bb5]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a leading educational institution in Ambala that fosters a holistic development in children, preparing them not just for higher education, but for life. We aim to build strong, confident, and compassionate individuals.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border-b-4 border-[#f07b46] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#f07b46]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide a joyful, secure, and supportive learning environment where quality education is imparted through innovative play-way methods, ensuring physical, mental, and emotional growth of every child.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Core Values Section */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#243bb5] inline-block relative">
            Why Choose Us?
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#f07b46] rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Shield className="w-8 h-8" />, title: "Safe & Secure", desc: "24/7 CCTV surveillance and a highly secure campus." },
            { icon: <Heart className="w-8 h-8" />, title: "Caring Environment", desc: "A home away from home with loving and supportive staff." },
            { icon: <BookOpen className="w-8 h-8" />, title: "Play-Way Method", desc: "Interactive learning through games, art, and storytelling." },
            { icon: <Users className="w-8 h-8" />, title: "Experienced Staff", desc: "Highly trained and passionate educators." }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 hover:shadow-md cursor-default">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[#243bb5] mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
import React from 'react';

export default function AboutSchool() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Top Blue Banner */}
        <div className="bg-[#243bb5] py-16 px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative z-10">
            About Cecil Convent School
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto relative z-10 font-medium">
            Where Little Dreams Begin to Bloom
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-16 text-gray-700 leading-relaxed space-y-8">
          <p className="text-lg md:text-xl font-medium text-gray-800 text-center mb-8 border-b border-orange-100 pb-8">
            Welcome to Cecil Convent School Junior Playway. We are dedicated to nurturing young minds with love, creativity, and joy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#f07b46] mb-4 flex items-center gap-2">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To build a strong foundation for your child's bright future in Ambala Cantt. We believe in providing a safe, engaging, and playful environment where children can freely explore their true potential.
              </p>
            </div>

            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#243bb5] mb-4 flex items-center gap-2">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To develop a lifelong love for learning in every child. Through interactive play, modern teaching methods, and dedicated staff, we ensure every day is a new adventure in learning.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
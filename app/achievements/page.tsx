import React from 'react';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-yellow-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Our Hall of Fame
          </h1>
          <p className="text-lg md:text-xl text-yellow-100 max-w-2xl mx-auto drop-shadow-md">
            Celebrating the milestones, victories, and extraordinary talents of our brilliant students.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Academic Records */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Academic Triumphs</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-full md:w-1/3">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Graduation" className="rounded-xl shadow-md w-full" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">100% Board Result Record</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For the past five consecutive years, our school has achieved a flawless 100% passing rate in the National Board Examinations. Over 40% of our students secure distinction, reflecting the dedication of our faculty and the hard work of our scholars.
              </p>
              <span className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full text-sm">Top District Rankers 2025</span>
            </div>
          </div>
        </div>

        {/* Sports Achievements */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Sports & Athletics</h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-full md:w-1/3">
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop" alt="Sports Victory" className="rounded-xl shadow-md w-full" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">State Level Champions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our athletic teams consistently dominate regional tournaments. This year, our Under-16 Basketball team clinched the Gold Medal at the State Championship, while our athletes brought home 15 individual medals in track and field events.
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 font-semibold px-4 py-2 rounded-full text-sm">Gold Medalists - State Championship</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
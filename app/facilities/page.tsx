import React from 'react';

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-yellow-600">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Our Campus Facilities
          </h1>
          <p className="text-lg md:text-xl text-yellow-50 max-w-2xl mx-auto drop-shadow-md">
            State-of-the-art infrastructure designed to fuel every student&apos;s imagination and growth.
          </p>
        </div>
      </div>

      {/* Main Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">World-Class Infrastructure</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Smart Classrooms */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden group border border-gray-100">
            <div className="h-56 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop" 
                alt="Smart Classroom" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Smart Classrooms</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our classrooms are equipped with modern interactive whiteboards and digital projectors to make learning an engaging visual experience.
              </p>
            </div>
          </div>

          {/* Advanced Labs */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden group border border-gray-100">
            <div className="h-56 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                alt="Science Lab" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Advanced Labs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hands-on learning with fully equipped Physics, Chemistry, Biology, and high-tech Computer labs to foster scientific inquiry.
              </p>
            </div>
          </div>

          {/* Sports Complex */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden group border border-gray-100">
            <div className="h-56 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop" 
                alt="Sports Complex" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sports Complex &amp; Playground</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Extensive sports facilities including a football ground, cricket nets, basketball court, and indoor games to ensure physical fitness.
              </p>
            </div>
          </div>

          {/* Library */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden group border border-gray-100">
            <div className="h-56 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2140&auto=format&fit=crop" 
                alt="Library" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Resourceful Library</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A peaceful sanctuary containing thousands of books, journals, and digital reference materials to expand young minds.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
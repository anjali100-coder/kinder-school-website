import React from 'react';
import Link from 'next/link';

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-blue-900">
        {/* Yeh ek real school library ki HD photo hai */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            World-Class Facilities
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-md">
            Providing a nurturing environment where young minds can explore, learn, and grow beyond the classroom.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Empowering Education with the Best Infrastructure</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Facility 1: Smart Classrooms */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop" 
                alt="Smart Classrooms" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Digital Smart Classrooms</h3>
              <p className="text-gray-600 leading-relaxed">
                Step into the future of learning. Our fully air-conditioned, digitally equipped classrooms transform traditional teaching into an interactive, engaging experience that captures every student's imagination.
              </p>
            </div>
          </div>

          {/* Facility 2: Science Labs */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                alt="Science Laboratories" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Advanced Science Laboratories</h3>
              <p className="text-gray-600 leading-relaxed">
                Where curiosity meets discovery. Our state-of-the-art Physics, Chemistry, and Biology labs provide hands-on practical knowledge, encouraging students to experiment and innovate safely.
              </p>
            </div>
          </div>

          {/* Facility 3: Sports Complex */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop" 
                alt="Sports Complex" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Expansive Sports Complex</h3>
              <p className="text-gray-600 leading-relaxed">
                Physical fitness is as vital as mental growth. With dedicated grounds for cricket, basketball, and a modern indoor sports arena, we build teamwork, discipline, and future champions.
              </p>
            </div>
          </div>

          {/* Facility 4: Library */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2030&auto=format&fit=crop" 
                alt="Library" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Resource-Rich Library</h3>
              <p className="text-gray-600 leading-relaxed">
                A sanctuary of knowledge. Our library houses thousands of books, international journals, and digital resources, offering a peaceful environment that fosters a lifelong love for reading.
              </p>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link href="#contact" className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
            Visit Our Campus Today
          </Link>
        </div>

      </div>
    </div>
  );
}
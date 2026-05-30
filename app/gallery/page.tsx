import React from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function Gallery() {
  // Yeh aapki gallery ki categories aur dummy data hai. 
  // Baad mein aap inme apni asli photos ke link daal sakte hain.
  const galleryItems = [
    { id: 1, title: "Annual Day Celebrations", category: "Events" },
    { id: 2, title: "Sports Meet", category: "Sports" },
    { id: 3, title: "Art & Craft Exhibition", category: "Activities" },
    { id: 4, title: "Diwali Fest", category: "Festivals" },
    { id: 5, title: "Classroom Learning", category: "Campus" },
    { id: 6, title: "Kids Playtime", category: "Play-Way" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#f07b46] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 flex items-center justify-center gap-4">
            Our <span className="text-[#243bb5]">Gallery</span> <Camera className="w-10 h-10 md:w-12 md:h-12 text-[#243bb5]" />
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-orange-100 font-medium">
            Glimpses of joy, learning, and unforgettable memories at Cecil Convent School.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Placeholder Alert for You */}
        <div className="mb-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm">
           <Sparkles className="w-8 h-8 mx-auto text-[#243bb5] mb-2" />
           <h3 className="text-lg font-bold text-[#243bb5]">Beautiful Image Grid</h3>
           <p className="text-gray-600 text-sm mt-1">
             (Manish bhai, jab aapke paas school ki asli photos aa jayein, tab aap in colored boxes ko `<img src="photo-link.jpg" />` se replace kar sakte hain.)
           </p>
        </div>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer">
              
              {/* Dummy Colored Box (Replace this div with your <img> tag later) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#243bb5] to-[#f07b46] flex flex-col items-center justify-center text-white p-6 transition-transform duration-500 group-hover:scale-110">
                <ImageIcon className="w-12 h-12 mb-4 opacity-30" />
              </div>

              {/* Title Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-[#f07b46] text-white text-xs font-bold rounded-full mb-2 w-max">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
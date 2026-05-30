import React from 'react';

const galleryItems = [
  {
    id: 1,
    category: "Events",
    title: "Annual Day Celebration",
    src: "https://images.unsplash.com/photo-1542736667-069968b1d418?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Activities",
    title: "Art & Craft Workshop",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Sports",
    title: "Sports Day Fun",
    src: "https://images.unsplash.com/photo-1502086223501-7d6ecd7a8da7?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Gallery() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Our Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Title Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:opacity-100 opacity-0 transition-opacity flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full mb-2 w-max">
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
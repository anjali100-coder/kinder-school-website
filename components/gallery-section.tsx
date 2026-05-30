import React from 'react';

const galleryItems = [
  { id: 1, title: "School Campus", desc: "A safe and nurturing environment.", src: "https://images.unsplash.com/photo-1580582932707-5289ed627546?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Learning & Play", desc: "Where curiosity meets fun.", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Outdoor Fun", desc: "Physical development through play.", src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
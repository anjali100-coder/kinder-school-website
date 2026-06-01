import React from 'react';

export function GallerySection() {
  const images = [
    {
      src: "/campus.jpg",
      title: "School Campus"
    },
    {
      src: "/classroom.jpg",
      title: "Classroom Fun"
    },
    {
      src: "/sports.jfif",
      title: "Sports Day"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-72 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
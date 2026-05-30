import React from 'react';

const classPhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    title: "Annual Day Celebration",
    description: "Children performed dances and skits"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    title: "Art & Craft Workshop",
    description: "Creative expression through colors"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    title: "Sports Day Fun",
    description: "Running, jumping, and teamwork"
  }
];

export function ClassPhotosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classPhotos.map((photo) => (
            <div key={photo.id} className="border rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow">
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-blue-900">{photo.title}</h3>
                <p className="text-sm text-gray-600">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
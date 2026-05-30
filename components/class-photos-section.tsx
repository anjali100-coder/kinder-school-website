import React from 'react';
import { Card } from '@/components/ui/card';

const classPhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542736667-069968b1d418?auto=format&fit=crop&w=800&q=80",
    alt: "Annual Day Celebration",
    title: "Annual Day Celebration",
    description: "Children performed dances and skits"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    alt: "Art & Craft Workshop",
    title: "Art & Craft Workshop",
    description: "Creative expression through colors"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1502086223501-7d6ecd7a8da7?auto=format&fit=crop&w=800&q=80",
    alt: "Sports Day Fun",
    title: "Sports Day Fun",
    description: "Running, jumping, and teamwork"
  }
];

export function ClassPhotosSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden border-2 border-yellow-200">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">{photo.title}</h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
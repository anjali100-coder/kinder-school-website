import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1580582932707-5289ed627546?q=80&w=800&auto=format&fit=crop",
    alt: "School Building",
    title: "School Campus",
    description: "A safe and nurturing environment for little learners."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    alt: "Classroom Activities",
    title: "Learning & Play",
    description: "Where curiosity meets fun and creativity."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
    alt: "Outdoor Play",
    title: "Outdoor Fun",
    description: "Physical development through joyful outdoor play."
  }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
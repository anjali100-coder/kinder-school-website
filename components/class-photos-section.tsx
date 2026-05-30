import React from 'react';
import { Card } from '@/components/ui/card'; // Aapka purana path yahi hoga
import Image from 'next/image';

const classPhotos = [
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    alt: "Creative Workshop",
    title: "Creative Activities",
    description: "Art, craft, and creative expression opportunities",
  }
];

export function ClassPhotosSection() {
  return (
    <section id="class-photos" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4">
            Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">Activities</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            Glimpses of our classroom activities, celebrations, and school moments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden border-3 border-yellow-200 hover:border-blue-400 shadow-lg">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{photo.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{photo.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
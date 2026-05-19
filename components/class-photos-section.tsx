'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'

const classPhotos = [
  {
    id: 1,
    src: '/images/classroom-lesson.jpg',
    alt: 'Classroom Learning Activity',
    title: 'Interactive Learning',
    description: 'Teacher-led classroom activities with hands-on learning experiences',
  },
  {
    id: 2,
    src: '/images/class-team.jpg',
    alt: 'Staff Team with Children',
    title: 'Our Dedicated Team',
    description: 'Professional educators committed to student development',
  },
  {
    id: 3,
    src: '/images/class-activity.jpg',
    alt: 'School Event',
    title: 'School Events',
    description: 'Creating memories through celebrations and activities',
  },
  {
    id: 4,
    src: '/images/class-celebration.jpg',
    alt: 'Classroom Celebration',
    title: 'Team Spirit',
    description: 'Building bonds and celebrating achievements together',
  },
  {
    id: 5,
    src: '/images/gallery1.jpg',
    alt: 'Annual Celebration',
    title: 'Annual Events',
    description: 'Special occasions and festive celebrations at school',
  },
  {
    id: 6,
    src: '/images/gallery2.jpg',
    alt: 'Creative Workshop',
    title: 'Creative Activities',
    description: 'Art, craft, and creative expression opportunities',
  },
]

export function ClassPhotosSection() {
  return (
    <section id="class-photos" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4">
            Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">Photos</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            Glimpses of our classroom activities, celebrations, and school moments
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classPhotos.map((photo) => (
            <Card 
              key={photo.id}
              className="overflow-hidden border-3 border-yellow-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl bg-white"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-yellow-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{photo.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-semibold">{photo.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full"></div>
                  <span className="text-xs font-bold text-blue-600 uppercase">Gallery</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <a 
            href="https://www.instagram.com/cecilconventschooljunior"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
          >
            View More Photos on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

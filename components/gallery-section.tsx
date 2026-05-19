'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Camera, Calendar, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    type: 'event',
    title: 'Annual Day Celebration',
    date: 'March 2024',
    description: 'Children performed dances and skits',
  },
  {
    id: 2,
    type: 'activity',
    title: 'Art & Craft Workshop',
    date: 'February 2024',
    description: 'Creative expression through colors',
  },
  {
    id: 3,
    type: 'event',
    title: 'Sports Day Fun',
    date: 'January 2024',
    description: 'Running, jumping, and teamwork',
  },
  {
    id: 4,
    type: 'celebration',
    title: 'Diwali Celebrations',
    date: 'November 2023',
    description: 'Festival of lights and joy',
  },
  {
    id: 5,
    type: 'activity',
    title: 'Story Time Session',
    date: 'October 2023',
    description: 'Imaginative tales and learning',
  },
  {
    id: 6,
    type: 'event',
    title: 'Parent-Teacher Meet',
    date: 'September 2023',
    description: 'Building strong partnerships',
  },
]

const upcomingEvents = [
  {
    title: 'Summer Camp Registration',
    date: 'May 15, 2024',
    description: 'Fun-filled activities and learning',
  },
  {
    title: 'New Session Admissions',
    date: 'June 1, 2024',
    description: 'Enroll for 2024-25 academic year',
  },
  {
    title: 'Open House Day',
    date: 'May 25, 2024',
    description: 'Visit our campus and meet teachers',
  },
]

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'events'>('gallery')
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
            📸 Moments & Memories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6">
            Gallery &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">Events</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Glimpses of the joyful moments, celebrations, and activities at our school.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-10">
          <Button
            variant={activeTab === 'gallery' ? 'default' : 'outline'}
            onClick={() => setActiveTab('gallery')}
            className={`rounded-full font-bold transition-all ${
              activeTab === 'gallery' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                : 'border-2 border-blue-300 text-blue-900 hover:bg-blue-50'
            }`}
          >
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </Button>
          <Button
            variant={activeTab === 'events' ? 'default' : 'outline'}
            onClick={() => setActiveTab('events')}
            className={`rounded-full font-bold transition-all ${
              activeTab === 'events' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                : 'border-2 border-blue-300 text-blue-900 hover:bg-blue-50'
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Upcoming Events
          </Button>
        </div>

        {/* Gallery Tab Content */}
        {activeTab === 'gallery' && (
          <>
            {/* Featured Carousel */}
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-300">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {galleryItems.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0">
                      <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                        <Image
                          src={`/images/gallery${item.id}.jpg`}
                          alt={item.title}
                          fill
                          className="object-cover"
                          priority={item.id === 1}
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="text-center z-10 p-8 relative">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                            <Camera className="w-10 h-10 text-blue-600" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                          <p className="text-white drop-shadow-md">{item.description}</p>
                          <span className="inline-block mt-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-blue-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-blue-900" />
              </button>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="border-3 border-yellow-200 hover:border-blue-400 transition-all hover:shadow-xl rounded-2xl overflow-hidden group cursor-pointer bg-white"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={`/images/gallery${item.id}.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-blue-900">{item.title}</h4>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </div>
                      <span className="text-xs bg-yellow-300 text-blue-900 px-2 py-1 rounded-full whitespace-nowrap font-bold">
                        {item.date}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Instagram CTA */}
            <div className="mt-12 text-center">
              <a 
                href="https://www.instagram.com/cecilconventschooljunior" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all shadow-lg text-lg"
              >
                <Instagram className="w-5 h-5" />
                Follow Us on Instagram
              </a>
            </div>
          </>
        )}

        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="border-3 border-yellow-300 hover:border-blue-400 transition-all hover:shadow-xl rounded-2xl overflow-hidden bg-white group"
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-yellow-200 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all">
                    <Calendar className="w-7 h-7 text-blue-900 font-bold" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold text-sm">{event.date}</span>
                    <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition-all font-bold">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

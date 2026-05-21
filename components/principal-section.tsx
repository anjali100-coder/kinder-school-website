'use client'

import { Quote } from 'lucide-react'
import { ImageUploadPlaceholder } from '@/components/image-upload-placeholder'

export function PrincipalSection() {
  return (
    <section id="principal" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
            From Our Leader
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900">
            Principal&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Message</span>
          </h2>
        </div>

        {/* Principal Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border-4 border-yellow-300">
            {/* Decorative Quote Icon */}
            <div className="absolute top-4 right-4 opacity-10">
              <Quote className="w-24 h-24 text-blue-600" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Principal Photo */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-300 shadow-lg bg-gradient-to-br from-blue-100 to-yellow-100 flex-shrink-0">
                    <img src="images/principal.jpg.jpeg" alt="Principal" className="w-full h-full object-cover" />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 border-4 border-dashed border-blue-300 rounded-full"></div>
                </div>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2 text-center md:text-left">
                <Quote className="w-10 h-10 text-blue-600 mb-4 mx-auto md:mx-0" />
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic font-semibold">
                  &quot;Every child is unique and special. At Cecil Convent School Junior Playway, we believe in nurturing each child&apos;s individual potential while building a strong foundation for their future. Our goal is to create happy learners who are curious, confident, and kind.&quot;
                </blockquote>
                
                <div className="border-t-2 border-yellow-300 pt-4">
                  <h3 className="text-xl font-bold text-blue-900">Mrs. Parul Garg</h3>
                  <p className="text-blue-600 font-bold">Principal</p>
                  <p className="text-sm text-gray-700 mt-1 font-semibold">M.Ed., 20+ Years in Education</p>
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600"></div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all border-3 border-blue-300">
            <h4 className="text-xl font-bold text-blue-900 mb-3">Our Vision</h4>
            <p className="text-gray-700 leading-relaxed font-semibold">
              To be the leading early childhood education center that inspires a lifelong love for learning while nurturing compassionate and creative individuals.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all border-3 border-yellow-300">
            <h4 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h4>
            <p className="text-gray-700 leading-relaxed font-semibold">
              To provide a safe, stimulating, and joyful environment where young children develop essential skills and values that prepare them for a successful future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function JourneyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Upar Ka Heading aur Text */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#243bb5] mb-6">
          Our Beautiful Journey
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to Cecil Convent School Junior Playway. We believe in nurturing children not just through academics, but by guiding them forward with love, creativity, and joy. Our aim is to build a strong foundation for your child's bright future.
        </p>
      </div>

      {/* 6 Photos Ki Badi Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        
        {/* Photo 1 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src="/pic11.jpg" alt="Activity 1" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Photo 2 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src="/pic12.jpg" alt="Activity 2" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Photo 3 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src="/pic13.jpg" alt="Activity 3" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Photo 4 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src="/pic14.jpg" alt="Activity 4" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Photo 5 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src="/pic15.jpg" alt="Activity 5" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Photo 6 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src="/pic16.jpg" alt="Activity 6" className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" />
        </div>

      </div>

      {/* Wapas Home Page Par Jane Ka Button */}
      <div className="flex justify-center mt-10">
        <Link href="/">
          <Button className="bg-[#243bb5] hover:bg-blue-800 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all">
            Back to Home
          </Button>
        </Link>
      </div>
      
    </div>
  );
}
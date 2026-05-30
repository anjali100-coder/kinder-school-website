import React from 'react';

export default function Gallery() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Photo 1 - School Campus (NEW LINK) */}
          <div className="bg-white border rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" 
              alt="School Campus" 
              className="w-full h-72 object-cover" 
            />
            <div className="p-4">
              <h3 className="font-bold text-center text-xl text-blue-900">School Campus</h3>
            </div>
          </div>

          {/* Photo 2 - Art & Craft (ALREADY WORKING) */}
          <div className="bg-white border rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
              alt="Art & Craft" 
              className="w-full h-72 object-cover" 
            />
            <div className="p-4">
              <h3 className="font-bold text-center text-xl text-blue-900">Art & Craft</h3>
            </div>
          </div>

          {/* Photo 3 - Sports Day (NEW LINK) */}
          <div className="bg-white border rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80" 
              alt="Sports Day" 
              className="w-full h-72 object-cover" 
            />
            <div className="p-4">
              <h3 className="font-bold text-center text-xl text-blue-900">Sports Day Fun</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
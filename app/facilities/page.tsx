import React from 'react';

export default function FacilitiesPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">Our Top-Class Facilities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all border-t-4 border-blue-500">
            <div className="text-5xl mb-4">🏫</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Smart Classes</h3>
            <p className="text-gray-600">Interactive and digital learning environment for active minds.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all border-t-4 border-yellow-400">
            <div className="text-5xl mb-4">⚽</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Safe Play Area</h3>
            <p className="text-gray-600">Indoor & outdoor zones specially designed for physical growth.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all border-t-4 border-green-500">
            <div className="text-5xl mb-4">🚌</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Transport</h3>
            <p className="text-gray-600">Safe and reliable pick and drop facility across Ambala.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all border-t-4 border-red-500">
            <div className="text-5xl mb-4">📹</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">CCTV Security</h3>
            <p className="text-gray-600">24/7 camera monitoring to keep your child absolutely safe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export default function BookListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner */}
      <div className="relative w-full h-[35vh] md:h-[40vh] flex items-center justify-center bg-teal-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Book List 2026-2027
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto drop-shadow-md">
            Official curriculum and prescribed book lists for the upcoming academic session.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Parents can download the class-wise book lists and stationery requirements below. All prescribed books are aligned with the latest educational guidelines.
          </p>
        </div>

        {/* Book List Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kindergarten Section */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Kindergarten Wing</h2>
            <p className="text-sm text-gray-500 mb-6">Pre-Nursery, Nursery & KG</p>
            <button className="w-full bg-teal-50 text-teal-700 font-semibold py-3 rounded-lg border border-teal-200 hover:bg-teal-500 hover:text-white transition-colors flex justify-center items-center gap-2">
              <span>📥</span> Download PDF
            </button>
          </div>

          {/* Primary Section */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Primary Wing</h2>
            <p className="text-sm text-gray-500 mb-6">Class 1st to 5th</p>
            <button className="w-full bg-blue-50 text-blue-700 font-semibold py-3 rounded-lg border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors flex justify-center items-center gap-2">
              <span>📥</span> Download PDF
            </button>
          </div>

          {/* Middle & Senior Section */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Senior Wing</h2>
            <p className="text-sm text-gray-500 mb-6">Class 6th to 12th</p>
            <button className="w-full bg-purple-50 text-purple-700 font-semibold py-3 rounded-lg border border-purple-200 hover:bg-purple-600 hover:text-white transition-colors flex justify-center items-center gap-2">
              <span>📥</span> Download PDF
            </button>
          </div>

        </div>

        {/* Important Note */}
        <div className="mt-16 bg-yellow-50 rounded-lg p-6 border border-yellow-200">
          <h4 className="font-bold text-yellow-800 mb-2">⚠️ Important Notice for Parents</h4>
          <p className="text-yellow-700 text-sm leading-relaxed">
            School books and uniform can be purchased from any vendor of your choice. The school does not force parents to buy stationery or uniforms from a specific shop. Please ensure you match the publisher and edition exactly as mentioned in the PDF.
          </p>
        </div>

      </div>
    </div>
  );
}
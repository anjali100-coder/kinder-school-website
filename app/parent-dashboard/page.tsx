"use client";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border-t-4 border-blue-600">
          <h1 className="text-3xl font-extrabold text-gray-900">Parent Dashboard</h1>
          <p className="text-gray-500 mt-2">लॉगिन सफल! अपने बच्चे की स्कूल रिपोर्ट यहाँ देखें।</p>
        </div>

        {/* Dashboard Cards (यहाँ हम बाद में डेटाबेस से असली डेटा लाएंगे) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Attendance Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-700">Attendance</h3>
              <span className="text-2xl">📅</span>
            </div>
            <p className="text-gray-500 text-sm">इस महीने की हाज़िरी...</p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
               <div className="h-2 bg-green-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          {/* Fees Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-700">Fee Status</h3>
              <span className="text-2xl">💳</span>
            </div>
            <p className="text-gray-500 text-sm">अगली क़िस्त की जानकारी...</p>
            <p className="mt-4 text-xl font-bold text-yellow-600">Pending</p>
          </div>

          {/* Results Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-700">Latest Result</h3>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-gray-500 text-sm">क्लास टेस्ट और एग्जाम रिपोर्ट...</p>
            <p className="mt-4 font-semibold text-blue-600">View Report &rarr;</p>
          </div>

        </div>
      </div>
    </div>
  );
}
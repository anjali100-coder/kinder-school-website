import React from 'react';
import { BookOpen, PenTool, Backpack, FileText } from 'lucide-react';

export default function BookList() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#f07b46] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Book List <span className="text-[#243bb5]">2026-2027</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-orange-100 font-medium">
            Curriculum materials and stationery requirements for the upcoming academic session.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#243bb5] mb-6 shadow-sm">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Textbooks & Workbooks</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our curriculum follows highly interactive and colorful books designed specially for play-way learning. The complete list of recommended publishers will be provided at the time of admission confirmation.
            </p>
          </div>

          <div className="bg-orange-50/50 p-10 rounded-3xl border border-orange-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#f07b46] mb-6 shadow-sm">
              <PenTool className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Art & Craft Materials</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              To support our creative activities, a specific set of non-toxic crayons, clay, drawing files, and craft papers are required. All items must be child-safe.
            </p>
          </div>

          <div className="bg-green-50/50 p-10 rounded-3xl border border-green-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-sm">
              <Backpack className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">School Bag Guidelines</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We encourage lightweight, ergonomic bags. For junior playway students, bringing a heavy bag is strictly discouraged. Only necessary items like an apron, water bottle, and a tiffin box are needed daily.
            </p>
          </div>

          <div className="bg-purple-50/50 p-10 rounded-3xl border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Note to Parents</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Please ensure all books, notebooks, and stationery items are clearly labeled with your child's full name and class to avoid any misplacement.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
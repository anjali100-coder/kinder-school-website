import React from 'react';
import { ClipboardList, CheckCircle, Calendar, Phone } from 'lucide-react';

export default function AdmissionInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#243bb5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Admission <span className="text-[#f07b46]">Information</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium">
            Begin your child's beautiful learning journey with Cecil Convent School.
          </p>
        </div>
      </div>

      {/* Admission Process Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#f07b46] py-8 px-10 text-center">
            <h2 className="text-3xl font-bold text-white">How to Apply</h2>
            <p className="text-orange-100 mt-2">Simple and transparent admission process</p>
          </div>
          
          <div className="p-10 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <ClipboardList className="w-10 h-10" />, step: "Step 1", title: "Registration", desc: "Fill out the online enquiry form or visit the school campus." },
                { icon: <Calendar className="w-10 h-10" />, step: "Step 2", title: "Campus Visit", desc: "Schedule a visit to see our facilities and meet the teachers." },
                { icon: <CheckCircle className="w-10 h-10" />, step: "Step 3", title: "Interaction", desc: "A brief, friendly interaction session with the child and parents." },
                { icon: <Phone className="w-10 h-10" />, step: "Step 4", title: "Confirmation", desc: "Complete the fee payment and submit necessary documents." }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[#243bb5] mb-6 shadow-sm border border-blue-100">
                    {item.icon}
                  </div>
                  <span className="text-[#f07b46] font-bold text-sm tracking-wider uppercase mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

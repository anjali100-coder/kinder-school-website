import React from 'react';

export default function AdmissionInfo() {
  return (
    <div className="min-h-[70vh] bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-[#243bb5] py-12 px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Admission Information</h1>
          <p className="text-blue-100 mt-2 font-medium">Join the Cecil Convent Family</p>
        </div>
        <div className="p-12 text-center">
          <p className="text-lg text-gray-700">Admissions are now open! We welcome parents to visit our campus in Ambala Cantt, meet our teachers, and experience our learning environment.</p>
          <button className="mt-6 bg-[#f07b46] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d96b3a] transition-colors">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
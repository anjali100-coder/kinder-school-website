import React from 'react';
import Link from 'next/link';

export default function AdmissionInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-blue-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Admission Information
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-md">
            Your child&apos;s journey to excellence begins here. Join the most trusted educational institution in Ambala Cantt.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Admission Process Steps */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admission Process 2026-2027</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Online Registration</h3>
                <p className="text-gray-600 mt-2">Fill out the online inquiry form or visit the school reception to collect the registration form.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Interaction / Assessment</h3>
                <p className="text-gray-600 mt-2">Registered candidates will be called for a brief interaction (for junior classes) or a basic written assessment (for senior classes).</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Document Verification</h3>
                <p className="text-gray-600 mt-2">Submit all mandatory documents including the birth certificate, previous school report card, and photographs.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Fee Payment & Enrollment</h3>
                <p className="text-gray-600 mt-2">Upon selection, complete the admission by paying the required admission fee to secure the seat.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-blue-50 rounded-2xl shadow-sm p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">📌 Required Documents</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-medium">
            <li className="flex items-center gap-2"><span>📄</span> Original Birth Certificate</li>
            <li className="flex items-center gap-2"><span>📸</span> 4 Passport Size Photos of Student</li>
            <li className="flex items-center gap-2"><span>📸</span> 2 Passport Size Photos of Parents</li>
            <li className="flex items-center gap-2"><span>📊</span> Previous Year Report Card</li>
            <li className="flex items-center gap-2"><span>📜</span> Transfer Certificate (TC)</li>
            <li className="flex items-center gap-2"><span>💳</span> Aadhar Card Copy (Student & Parents)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
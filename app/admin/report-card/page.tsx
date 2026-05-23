"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReportCardFrontend() {
  // Form States
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [className, setClassName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState(''); // Naya state Email ke liye
  
  // Marks States
  const [english, setEnglish] = useState('');
  const [maths, setMaths] = useState('');
  const [science, setScience] = useState('');

  // Calculate Total & Percentage
  const totalMarks = (Number(english) || 0) + (Number(maths) || 0) + (Number(science) || 0);
  const percentage = totalMarks > 0 ? ((totalMarks / 300) * 100).toFixed(2) : '0.00';

  // Message Generate Karne ka function (Sabke liye same message)
  const generateMessage = () => {
    return `Cecil Convent School - Academic Report Card\n\n` +
      `Student Name: ${studentName || '-'}\n` +
      `Father's Name: ${fatherName || '-'}\n` +
      `Class: ${className || '-'}\n` +
      `Roll No: ${rollNo || '-'}\n\n` +
      `Marks Obtained:\n` +
      `- English: ${english || '0'}/100\n` +
      `- Mathematics: ${maths || '0'}/100\n` +
      `- Science: ${science || '0'}/100\n\n` +
      `Total Marks: ${totalMarks} / 300\n` +
      `Percentage: ${percentage}%\n\n` +
      `Regards,\nSchool Administration`;
  };

  // 1. WhatsApp Logic
  const handleWhatsAppShare = () => {
    if (!parentPhone) {
      alert("⚠️ Please enter Parent's Phone Number!");
      return;
    }
    let formattedPhone = parentPhone.trim();
    if (formattedPhone.length === 10) formattedPhone = '91' + formattedPhone;
    
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
  };

  // 2. SMS Logic
  const handleSMSShare = () => {
    if (!parentPhone) {
      alert("⚠️ Please enter Parent's Phone Number!");
      return;
    }
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    // 'sms:' protocol computer/phone ka default message app kholta hai
    window.open(`sms:${parentPhone}?body=${encodedMessage}`, '_self');
  };

  // 3. Email Logic
  const handleEmailShare = () => {
    if (!parentEmail) {
      alert("⚠️ Please enter Parent's Email Address!");
      return;
    }
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    const subject = encodeURIComponent(`Academic Report Card - ${studentName}`);
    // 'mailto:' protocol default email app (Gmail/Outlook) kholta hai
    window.open(`mailto:${parentEmail}?subject=${subject}&body=${encodedMessage}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Report Card Generator 📝</h1>
            <p className="text-gray-500 mt-1">Create and share results via WhatsApp, SMS, or Email.</p>
          </div>
          <Link href="/admin">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition">
              &larr; Back to Admin
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side: Data Entry Form */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 h-fit">
            <h2 className="text-xl font-semibold mb-5 border-b pb-2">Enter Student Details</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                  <input type="text" className="w-full border rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                  <input type="text" className="w-full border rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class & Section</label>
                  <input type="text" className="w-full border rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={className} onChange={(e) => setClassName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
                  <input type="text" className="w-full border rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                </div>
              </div>

              {/* Contact Details (Phone & Email) */}
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded-md border border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="text" placeholder="For WhatsApp/SMS" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="For Email Share" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} />
                </div>
              </div>

              <h3 className="font-semibold text-gray-700 pt-4 border-t mt-4">Subject Marks (Out of 100)</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">English</label>
                  <input type="number" className="w-full border rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={english} onChange={(e) => setEnglish(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Mathematics</label>
                  <input type="number" className="w-full border rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={maths} onChange={(e) => setMaths(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Science</label>
                  <input type="number" className="w-full border rounded-md p-2.5 outline-none focus:ring-2 focus:ring-blue-500" value={science} onChange={(e) => setScience(e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Report Card Preview & Share Buttons */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="text-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-blue-900">Cecil Convent School</h2>
                <p className="text-gray-500 text-sm">Academic Report Card</p>
              </div>
              
              <div className="mb-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">Name:</span> {studentName || '___________'}</p>
                <p><span className="font-semibold">Father's Name:</span> {fatherName || '___________'}</p>
                <p><span className="font-semibold">Class:</span> {className || '___________'}</p>
                <p><span className="font-semibold">Roll No:</span> {rollNo || '___________'}</p>
              </div>

              <table className="w-full text-left border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-2 border">Subject</th>
                    <th className="p-2 border text-center">Max Marks</th>
                    <th className="p-2 border text-center">Marks Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-medium">English</td>
                    <td className="p-2 border text-center">100</td>
                    <td className="p-2 border text-center text-blue-600 font-semibold">{english || '-'}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Mathematics</td>
                    <td className="p-2 border text-center">100</td>
                    <td className="p-2 border text-center text-blue-600 font-semibold">{maths || '-'}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-medium">Science</td>
                    <td className="p-2 border text-center">100</td>
                    <td className="p-2 border text-center text-blue-600 font-semibold">{science || '-'}</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td colSpan={2} className="p-2 border font-bold text-right text-blue-900">Total Marks:</td>
                    <td className="p-2 border text-center font-bold text-blue-900">{totalMarks} / 300</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td colSpan={2} className="p-2 border font-bold text-right text-green-900">Percentage:</td>
                    <td className="p-2 border text-center font-bold text-green-900">{percentage}%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Share Action Buttons */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">Share Report Card With Parents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={handleWhatsAppShare}
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition font-medium shadow-sm"
                >
                  📱 WhatsApp
                </button>
                <button 
                  onClick={handleSMSShare}
                  className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition font-medium"
                >
                  💬 SMS
                </button>
                <button 
                  onClick={handleEmailShare}
                  className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition font-medium"
                >
                  ✉️ Email
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
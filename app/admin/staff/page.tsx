"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

// Supabase Setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function StaffManagement() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [staffList, setStaffList] = useState<any[]>([]);
  
  // Form States
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [phone, setPhone] = useState('');
  const [salary, setSalary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123') {
      setIsAuthenticated(true);
      fetchStaff();
    } else {
      alert('Wrong passcode!');
    }
  };

  // Fetch Data from Supabase
  const fetchStaff = async () => {
    const { data, error } = await supabase
      .from('staff_details')
      .select('*')
      .order('id', { ascending: false });
    
    if (data) setStaffList(data);
  };

  // Add New Staff to Supabase
  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('staff_details')
      .insert([
        { 
          name, 
          designation, 
          phone, 
          salary: Number(salary) 
        }
      ]);

    if (!error) {
      alert("Staff added successfully! 🎉");
      setName('');
      setDesignation('');
      setPhone('');
      setSalary('');
      fetchStaff(); // Table ko turant update karne ke liye
    } else {
      alert("Error adding staff. Please check database connection.");
      console.error(error);
    }
    setIsSubmitting(false);
  };

  // Security Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border-t-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Staff Dashboard Login 🔐</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter Staff Admin Passcode"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
            <p className="text-sm text-gray-500 mb-6">💡 Hint: admin123</p>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Unlock Staff Data
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Staff Management 👥</h1>
            <p className="text-gray-500 mt-1">Manage school employees and salary details securely.</p>
          </div>
          <Link href="/admin">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition">
              &larr; Back to Inquiries
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Staff Form (Left Side) */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit border-t-4 border-blue-600">
            <h2 className="text-xl font-semibold mb-5 border-b pb-2">Add New Staff</h2>
            <form onSubmit={handleAddStaff} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                <input required type="text" placeholder="e.g. Teacher, Clerk, Peon" className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50" value={designation} onChange={e => setDesignation(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="text" className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Salary (₹)</label>
                <input required type="number" className="w-full border rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50" value={salary} onChange={e => setSalary(e.target.value)} />
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full bg-blue-600 text-white py-3 mt-2 rounded-md hover:bg-blue-700 font-semibold transition">
                {isSubmitting ? 'Saving to Database...' : 'Save Staff Details'}
              </button>
            </form>
          </div>

          {/* Staff List Table (Right Side) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md overflow-hidden">
            <h2 className="text-xl font-semibold mb-5 border-b pb-2">Current Staff List (Total: {staffList.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="p-4 font-semibold rounded-tl-lg">Name</th>
                    <th className="p-4 font-semibold">Designation</th>
                    <th className="p-4 font-semibold">Phone</th>
                    <th className="p-4 font-semibold rounded-tr-lg">Salary</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {staffList.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-gray-500">
                        No staff data found. Add new staff from the left form.
                      </td>
                    </tr>
                  ) : (
                    staffList.map((staff, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition">
                        <td className="p-4 font-medium">{staff.name}</td>
                        <td className="p-4">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                            {staff.designation}
                          </span>
                        </td>
                        <td className="p-4">{staff.phone}</td>
                        <td className="p-4 font-semibold text-green-600">₹{staff.salary}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
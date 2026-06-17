"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ManageFees() {
  const [fees, setFees] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [className, setClassName] = useState('');
  const [admissionFee, setAdmissionFee] = useState('');
  const [monthlyFee, setMonthlyFee] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('fee_structure')
      .select('*')
      .order('id', { ascending: true });
    
    if (data) setFees(data);
    setLoading(false);
  };

  const handleAddFee = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('fee_structure')
      .insert([
        { class_name: className, admission_fee: admissionFee, monthly_fee: monthlyFee }
      ]);

    if (!error) {
      setClassName('');
      setAdmissionFee('');
      setMonthlyFee('');
      fetchFees(); // लिस्ट को रिफ्रेश करें
    } else {
      alert('Error adding fee structure!');
    }
    setIsSubmitting(false);
  };

  const handleDelete = async (id: number) => {
    if(confirm('क्या आप सच में इसे डिलीट करना चाहते हैं?')) {
      await supabase.from('fee_structure').delete().eq('id', id);
      fetchFees();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Fee Structure</h1>

      {/* नई फीस जोड़ने का फॉर्म */}
      <form onSubmit={handleAddFee} className="mb-8 bg-gray-50 p-4 rounded-md border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Add New Class Fee</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Class Name (e.g., Nursery)"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Admission Fee (e.g., ₹5000)"
            value={admissionFee}
            onChange={(e) => setAdmissionFee(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Monthly Fee (e.g., ₹1500)"
            value={monthlyFee}
            onChange={(e) => setMonthlyFee(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {isSubmitting ? 'Adding...' : 'Add Fee Structure'}
        </button>
      </form>

      {/* फीस की लिस्ट दिखने वाला टेबल */}
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Current Fee Structure</h2>
      {loading ? (
        <p className="text-gray-500">Loading fees data...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-50 text-gray-700">
                <th className="border border-gray-200 p-3 font-semibold">Class Name</th>
                <th className="border border-gray-200 p-3 font-semibold">Admission Fee</th>
                <th className="border border-gray-200 p-3 font-semibold">Monthly Fee</th>
                <th className="border border-gray-200 p-3 font-semibold w-24">Action</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-200 p-3 text-gray-700">{fee.class_name}</td>
                  <td className="border border-gray-200 p-3 text-gray-700">{fee.admission_fee}</td>
                  <td className="border border-gray-200 p-3 text-gray-700">{fee.monthly_fee}</td>
                  <td className="border border-gray-200 p-3">
                    <button 
                      onClick={() => handleDelete(fee.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-sm bg-red-50 px-2 py-1 rounded border border-red-100 hover:border-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {fees.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-8 text-gray-500 border border-gray-200 bg-gray-50 rounded">
                    No fee structure added yet. Use the form above to add one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
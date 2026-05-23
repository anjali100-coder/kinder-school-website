import React from 'react';
import Link from 'next/link';

export default function FeeStructure() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Fee Structure (2026-2027)
          </h1>
          <p className="text-lg text-gray-600">
            Transparent and affordable fee details for all classes.
          </p>
        </div>

        {/* Fee Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Class</th>
                  <th className="py-4 px-6 font-semibold">Admission Fee (One-Time)</th>
                  <th className="py-4 px-6 font-semibold">Monthly Tuition Fee</th>
                  <th className="py-4 px-6 font-semibold">Annual Charges</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {/* Row 1 */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Pre-Nursery - UKG</td>
                  <td className="py-4 px-6">₹5,000</td>
                  <td className="py-4 px-6">₹1,500</td>
                  <td className="py-4 px-6">₹3,000</td>
                </tr>
                {/* Row 2 */}
                <tr className="border-b hover:bg-gray-50 bg-gray-50/50">
                  <td className="py-4 px-6 font-medium">Class 1st - 5th</td>
                  <td className="py-4 px-6">₹6,000</td>
                  <td className="py-4 px-6">₹1,800</td>
                  <td className="py-4 px-6">₹3,500</td>
                </tr>
                {/* Row 3 */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Class 6th - 8th</td>
                  <td className="py-4 px-6">₹7,000</td>
                  <td className="py-4 px-6">₹2,200</td>
                  <td className="py-4 px-6">₹4,000</td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="py-4 px-6 font-medium">Class 9th - 10th</td>
                  <td className="py-4 px-6">₹8,000</td>
                  <td className="py-4 px-6">₹2,500</td>
                  <td className="py-4 px-6">₹4,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href="/">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 font-medium">
              &larr; Back to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
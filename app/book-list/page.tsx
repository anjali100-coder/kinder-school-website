import React from 'react';

export default function BookList() {
  return (
    <div className="min-h-[70vh] bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-[#f07b46] py-12 px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Book List 2026-2027</h1>
          <p className="text-orange-100 mt-2 font-medium">Curriculum materials for the academic year</p>
        </div>
        <div className="p-12 text-center">
          <p className="text-lg text-gray-700">The updated list of books, stationery, and learning materials for the 2026-2027 session will be displayed here soon.</p>
        </div>
      </div>
    </div>
  );
}
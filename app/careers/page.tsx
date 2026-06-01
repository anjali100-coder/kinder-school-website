import React from 'react';

export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 mt-10">
      
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#243bb5] mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-600">
          Please fill out the details below and upload your resume to apply for a position at Cecil Convent School Junior Playway.
        </p>
      </div>

      {/* Job Application Form */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-12 border-t-8 border-[#243bb5]">
        <form className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 1. Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. Manish Sharma" required />
            </div>

            {/* 2. Email Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="your@email.com" required />
            </div>

            {/* 3. Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
              <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="+91 XXXXX XXXXX" required />
            </div>

            {/* 4. Highest Qualification */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. B.Ed, M.A., NTT" required />
            </div>

            {/* 5. Total Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Teaching Experience</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. 3 Years" required />
            </div>

            {/* 6. Position Applied For */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Position Applied For</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3" required>
                <option value="">Select a position...</option>
                <option value="playway-teacher">Playway Teacher</option>
                <option value="nursery-teacher">Nursery Teacher</option>
                <option value="coordinator">Coordinator</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* 7. Expected Salary */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Salary (₹)</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. 15,000 / month" />
            </div>

            {/* 8. Current City/Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Address / City</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="e.g. Ambala Cantt" required />
            </div>
          </div>

          {/* 9. Short Description / Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join us?</label>
            <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Tell us a little bit about yourself and why you'd be a great fit..." required></textarea>
          </div>

          {/* 10. Resume Upload Field */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Upload Resume (PDF / Word file)</label>
            <input 
              type="file" 
              accept=".pdf,.doc,.docx" 
              className="w-full text-sm text-gray-500 cursor-pointer" 
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button type="submit" className="bg-[#243bb5] hover:bg-blue-800 text-white px-10 py-4 rounded-full text-lg font-bold w-full sm:w-auto transition-all shadow-lg hover:shadow-xl">
              Submit Application
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
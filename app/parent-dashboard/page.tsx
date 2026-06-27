"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardPage() {
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function getData() {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData?.user) {
        setMsg("आप लॉगिन नहीं हैं! कृपया वापस जाकर लॉगिन करें।");
        setLoading(false);
        return;
      }
      
      const { data } = await supabase
        .from("students")
        .select("*")
        .eq("parent_id", authData.user.id);
        
      if (data && data.length > 0) {
        setStudent(data[0]);
      } else {
        setMsg("डेटाबेस में इस आईडी से कोई बच्चा नहीं मिला।");
      }
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) return <div className="p-10 text-xl font-semibold text-center">Loading...</div>;
  
  if (!student) return (
    <div className="p-10 max-w-md mx-auto mt-20 bg-red-50 border-l-4 border-red-500 rounded p-4">
      <h1 className="text-xl text-red-700 font-bold">Data Not Found!</h1>
      <p className="text-red-600 mt-2 font-medium">कारण: {msg}</p>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white shadow-2xl rounded-2xl border border-gray-100">
      
      {/* School Header */}
      <div className="text-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide">Cecil Convent School</h1>
        <p className="text-gray-500 mt-1 font-medium">Student Performance Dashboard</p>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Welcome, {student.name.toUpperCase()}'s Parent!
      </h2>
      
      {/* 4 Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Student Profile Card */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
          <h3 className="font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2 flex items-center gap-2">
            👤 Student Profile
          </h3>
          <p className="mb-3 text-lg"><span className="font-semibold text-gray-700">Name:</span> <span className="capitalize">{student.name}</span></p>
          <p className="mb-3 text-lg"><span className="font-semibold text-gray-700">Class:</span> <span>{student.class}</span></p>
          <p className="text-lg"><span className="font-semibold text-gray-700">Roll Number:</span> <span>{student.roll_number}</span></p>
        </div>

        {/* 2. Academic Status Card */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all">
          <h3 className="font-bold text-green-700 mb-4 border-b border-green-200 pb-2 flex items-center gap-2">
            📊 Academic Status
          </h3>
          <div className="mb-4 flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <span className="font-semibold text-gray-700">Attendance:</span> 
            <span className="bg-green-100 px-3 py-1 rounded-md text-sm font-bold text-green-700 border border-green-200">
              {student.attendance || "Not Updated"}
            </span>
          </div>
          <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <span className="font-semibold text-gray-700">Term Result:</span> 
            <span className="bg-green-100 px-3 py-1 rounded-md text-sm font-bold text-green-700 border border-green-200">
              {student.result || "Not Declared"}
            </span>
          </div>
        </div>

        {/* 3. Fee Details Card */}
        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md transition-all">
          <h3 className="font-bold text-yellow-700 mb-4 border-b border-yellow-200 pb-2 flex items-center gap-2">
            💰 Fee Details
          </h3>
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
            <span className="block text-gray-500 text-sm font-semibold mb-1">Current Status</span>
            <span className="text-lg font-bold text-yellow-800">
              {student.fee || "Record Not Available"}
            </span>
          </div>
        </div>

        {/* 4. Class Performance Card */}
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all">
          <h3 className="font-bold text-purple-700 mb-4 border-b border-purple-200 pb-2 flex items-center gap-2">
            ⭐ Teacher's Remark
          </h3>
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm h-full italic text-gray-700">
            "{student.performance || "No remarks updated yet."}"
          </div>
        </div>

      </div>
    </div>
  );
}
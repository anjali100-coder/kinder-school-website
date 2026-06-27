"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { ManagePages } from '@/components/ManagePages'; // आपका पुराना पेज मैनेजमेंट फीचर

// Supabase Connection
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardHome() {
  // --- Student Management Logic ---
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  const [editId, setEditId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fee: "",
    attendance: "",
    result: "",
    performance: ""
  });

  // ऑथेंटिकेशन चेक और डेटा लाना
  useEffect(() => {
    async function checkAuthAndFetch() {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData?.user) {
        router.push("/admin");
        return;
      }
      
      const { data } = await supabase
        .from("students")
        .select("*")
        .order("roll_number", { ascending: true });
        
      if (data) setStudents(data);
      setLoading(false);
    }
    checkAuthAndFetch();
  }, [router]);

  // एडिट बटन का फंक्शन
  const handleEdit = (student: any) => {
    setEditId(student.id);
    setFormData({
      fee: student.fee || "",
      attendance: student.attendance || "",
      result: student.result || "",
      performance: student.performance || ""
    });
  };

  // सेव बटन का फंक्शन
  const handleUpdate = async () => {
    const { error } = await supabase
      .from("students")
      .update({
        fee: formData.fee,
        attendance: formData.attendance,
        result: formData.result,
        performance: formData.performance
      })
      .eq("id", editId);

    if (error) {
      alert("❌ अपडेट करने में दिक्कत आई!");
    } else {
      alert("✅ डेटा सफलतापूर्वक अपडेट हो गया!");
      setEditId(null);
      const { data } = await supabase.from("students").select("*").order("roll_number", { ascending: true });
      if (data) setStudents(data);
    }
  };

  // लॉगआउट फंक्शन
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  if (loading) return <div className="p-10 text-center text-xl font-bold text-blue-800 mt-20">Loading Dashboard...</div>;

  return (
    <div className="space-y-8">
      
      {/* 1. आपका पुराना वेलकम मैसेज और नया लॉगआउट बटन */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Admin Dashboard</h1>
          <p className="text-gray-600 text-lg">
            Please use the menu on the left to navigate through different sections and manage the website content.
          </p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-100 text-red-700 px-4 py-2 rounded-md font-bold hover:bg-red-200 transition-colors"
        >
          Logout 🚪
        </button>
      </div>

      {/* 2. आपका Manage Pages वाला फीचर (जो पहले से था) */}
      <ManagePages />

      {/* 3. हमारा नया Student Management सेक्शन */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-[#243bb5] mb-6 border-b pb-4">🎓 Manage Students Data</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            <thead className="bg-[#243bb5]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Roll No</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Class</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Attendance</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Fee</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-800">{student.roll_number}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 capitalize">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{student.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{student.attendance || "N/A"}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">{student.fee || "N/A"}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button 
                      onClick={() => handleEdit(student)}
                      className="bg-[#243bb5] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-blue-800 transition-colors shadow-sm"
                    >
                      Edit / Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Data Modal (Pop-up) */}
      {editId && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl border-t-4 border-[#243bb5]">
            <h2 className="text-2xl font-bold mb-6 text-[#243bb5] border-b pb-2">Update Student Data</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Attendance</label>
                <input type="text" value={formData.attendance} onChange={(e) => setFormData({...formData, attendance: e.target.value})} className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-[#243bb5] outline-none" placeholder="e.g. 85%" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Fee Status</label>
                <input type="text" value={formData.fee} onChange={(e) => setFormData({...formData, fee: e.target.value})} className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-[#243bb5] outline-none" placeholder="e.g. Paid, Pending ₹500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Result</label>
                <input type="text" value={formData.result} onChange={(e) => setFormData({...formData, result: e.target.value})} className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-[#243bb5] outline-none" placeholder="e.g. Pass, A Grade" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Performance Remark</label>
                <textarea value={formData.performance} onChange={(e) => setFormData({...formData, performance: e.target.value})} className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-[#243bb5] outline-none" placeholder="Teacher's remark..."></textarea>
              </div>
            </div>

            <div className="mt-8 flex gap-3 justify-end">
              <button onClick={() => setEditId(null)} className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md font-bold hover:bg-gray-300 transition-colors">Cancel</button>
              <button onClick={handleUpdate} className="px-5 py-2 bg-[#243bb5] text-white rounded-md font-bold hover:bg-blue-800 transition-colors">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
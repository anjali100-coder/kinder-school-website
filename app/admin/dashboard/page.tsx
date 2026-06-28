"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { ManagePages } from '@/components/ManagePages';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardHome() {
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

  const handleEdit = (student: any) => {
    setEditId(student.id);
    setFormData({
      fee: student.fee || "",
      attendance: student.attendance || "",
      result: student.result || "",
      performance: student.performance || ""
    });
  };

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  if (loading) return <div className="p-10 text-center text-xl font-bold text-blue-800 mt-20">Loading Dashboard...</div>;

  return (
    <div className="space-y-8 p-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Admin Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage your school content and student data here.</p>
        </div>
        <button onClick={handleLogout} className="bg-red-100 text-red-700 px-4 py-2 rounded-md font-bold hover:bg-red-200 transition-colors">Logout 🚪</button>
      </div>

      <ManagePages />

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-[#243bb5] mb-6 border-b pb-4">🎓 Manage Students Data</h2>
        
        {students.length === 0 ? (
          <div className="p-6 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-lg text-center font-bold">
            ⚠️ कोई स्टूडेंट डेटा नहीं मिला। Supabase में डेटा डालें!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-[#243bb5]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">Roll No</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">Class</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">Attendance</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">Fee</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-800">{student.roll_number}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 capitalize">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{student.class}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{student.attendance || "N/A"}</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">{student.fee || "N/A"}</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button onClick={() => handleEdit(student)} className="bg-[#243bb5] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-blue-800 shadow-sm">Edit / Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editId && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-[#243bb5]">Update Student Data</h2>
            <div className="space-y-4">
              <div><label className="block text-sm font-bold text-gray-700">Attendance</label><input type="text" value={formData.attendance} onChange={(e) => setFormData({...formData, attendance: e.target.value})} className="w-full border p-2 rounded" /></div>
              <div><label className="block text-sm font-bold text-gray-700">Fee Status</label><input type="text" value={formData.fee} onChange={(e) => setFormData({...formData, fee: e.target.value})} className="w-full border p-2 rounded" /></div>
              <div><label className="block text-sm font-bold text-gray-700">Result</label><input type="text" value={formData.result} onChange={(e) => setFormData({...formData, result: e.target.value})} className="w-full border p-2 rounded" /></div>
              <div><label className="block text-sm font-bold text-gray-700">Performance Remark</label><textarea value={formData.performance} onChange={(e) => setFormData({...formData, performance: e.target.value})} className="w-full border p-2 rounded"></textarea></div>
            </div>
            <div className="mt-8 flex gap-3 justify-end">
              <button onClick={() => setEditId(null)} className="px-5 py-2 bg-gray-200 rounded-md font-bold">Cancel</button>
              <button onClick={handleUpdate} className="px-5 py-2 bg-[#243bb5] text-white rounded-md font-bold">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
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

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: studentData } = await supabase
        .from("students")
        .select("*, attendance(*), fees(*), results(*)")
        .eq("parent_id", user.id)
        .single();

      setStudent(studentData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading data...</div>;
  if (!student) return <div className="p-10 text-center">No student record found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Hello, {student.name}'s parent!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Fee Status</h2>
            <p className="text-2xl font-bold text-blue-600">
              {student.fees[0]?.status || "No Data"}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Latest Result</h2>
            <p>{student.results[0]?.marks_obtained || "N/A"} / {student.results[0]?.total_marks || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
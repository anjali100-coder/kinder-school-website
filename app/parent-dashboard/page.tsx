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
    async function getData() {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData?.user) {
        setLoading(false);
        return;
      }
      
      const { data } = await supabase
        .from("students")
        .select("*")
        .eq("parent_id", authData.user.id);
        
      // डेटा आ गया है, हम लिस्ट में से पहला बच्चा दिखाएंगे
      if (data && data.length > 0) {
        setStudent(data[0]);
      }
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) return <div className="p-10 text-xl font-semibold">Loading...</div>;
  if (!student) return <div className="p-10 text-xl text-red-500 font-semibold">No data found for this parent.</div>;

  return (
    <div className="p-10 max-w-md mx-auto mt-20 bg-white shadow-xl rounded-2xl border border-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 border-b pb-4">
        Welcome, {student.name.toUpperCase()}'s Parent!
      </h1>
      <div className="text-lg text-gray-700 space-y-3">
        <p className="flex justify-between border-b pb-2">
          <span className="font-semibold">Student Name:</span> 
          <span className="capitalize">{student.name}</span>
        </p>
        <p className="flex justify-between border-b pb-2">
          <span className="font-semibold">Class:</span> 
          <span>{student.class}</span>
        </p>
        <p className="flex justify-between pb-2">
          <span className="font-semibold">Roll Number:</span> 
          <span>{student.roll_number}</span>
        </p>
      </div>
    </div>
  );
}
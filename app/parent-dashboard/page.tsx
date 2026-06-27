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
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }
      
      const { data } = await supabase
        .from("students")
        .select("*")
        .eq("parent_id", user.id)
        .single();
        
      setStudent(data);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!student) return <div>No data found for this parent.</div>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Hello, {student.name}'s parent!</h1>
      <p>Class: {student.class}</p>
      <p>Roll Number: {student.roll_number}</p>
    </div>
  );
}
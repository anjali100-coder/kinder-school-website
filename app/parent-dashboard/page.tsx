"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardPage() {
  const [debugInfo, setDebugInfo] = useState<any>("Checking database connection...");

  useEffect(() => {
    async function testDb() {
      // 1. User Check
      const { data: authData, error: authError } = await supabase.auth.getUser();
      
      if (authError || !authData?.user) {
        setDebugInfo({ 
          status: "Error", 
          message: "User not logged in or Auth failed", 
          error: authError 
        });
        return;
      }

      const userId = authData.user.id;
      
      // 2. Database Check (बिना .single() के ताकि क्रैश न हो)
      const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("parent_id", userId);

      // 3. Print Everything
      setDebugInfo({
        status: "Checked",
        loggedInUserUID: userId,
        supabaseError: error,
        dataFoundInTable: data
      });
    }
    testDb();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Debug Report</h1>
      <pre className="bg-gray-100 p-4 border border-gray-400 rounded text-sm overflow-auto text-black">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
}
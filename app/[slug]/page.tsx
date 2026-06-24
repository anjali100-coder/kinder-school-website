import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// यह 404 एरर को हमेशा के लिए रोकेगा
export const dynamic = 'force-dynamic';

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// Next.js 15 का एकदम सही तरीका
export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // URL से नाम निकालना (बिना किसी एरर के)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { data: pageData } = await supabase
    .from("dynamic_pages")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 border-b-4 border-yellow-400 pb-4 inline-block">
          {pageData.title}
        </h1>
        <div 
          className="prose prose-lg text-gray-700 max-w-none"
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        />
      </div>
    </div>
  );
}
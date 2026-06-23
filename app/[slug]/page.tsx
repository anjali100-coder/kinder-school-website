import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  // 1. URL से slug (पेज का नाम) निकालो
  const { slug } = params;

  // 2. Supabase में चेक करो कि क्या इस नाम का कोई पेज है?
  const { data: pageData } = await supabase
    .from("dynamic_pages")
    .select("*")
    .eq("slug", slug)
    .single();

  // 3. अगर पेज डिलीट हो गया है या नहीं मिला, तो 404 (Not Found) दिखा दो!
  if (!pageData) {
    notFound();
  }

  // 4. अगर पेज मिल गया, तो उसका टाइटल और डिज़ाइन दिखा दो
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 border-b-4 border-yellow-400 pb-4 inline-block">
          {pageData.title}
        </h1>
        
        
        <div className="prose prose-lg text-gray-700 whitespace-pre-wrap">
          {pageData.content}
        </div>
      </div>
    </div>
  );
}
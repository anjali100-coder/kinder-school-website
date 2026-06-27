import { createClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { data: pageData, error } = await supabase
    .from("dynamic_pages")
    .select("*")
    .eq("slug", slug)
    .single();

  // अगर पेज नहीं मिला, तो 404 नहीं, बल्कि लाल रंग का एरर बॉक्स दिखाएगा
  if (!pageData) {
    return (
      <div style={{ padding: '50px', backgroundColor: '#fee2e2', color: '#991b1b', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>🚨 जासूसी मोड ऑन (Debug Mode)</h1>
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>कोड ने जो Slug पढ़ा:</strong> [{slug}]
        </p>
        <p style={{ marginTop: '10px', fontSize: '18px' }}>
          <strong>Supabase का एरर मैसेज:</strong> {JSON.stringify(error)}
        </p>
        <div style={{ marginTop: '30px', padding: '15px', background: 'white', borderRadius: '8px' }}>
          <p><strong>चेक करें:</strong> क्या ऊपर वाले ब्रैकेट [ ] के अंदर लिखा हुआ नाम आपके Supabase के डेटाबेस वाले नाम से 100% मैच कर रहा है? कोई खाली स्पेस तो नहीं है?</p>
        </div>
      </div>
    );
  }

  // अगर सब सही है, तो नॉर्मल पेज दिखाएगा
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
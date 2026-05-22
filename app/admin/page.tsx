import { supabase } from '@/lib/supabase'

// Yeh line Next.js ko batati hai ki hamesha naya data dikhaye (cache na kare)
export const revalidate = 0; 

export default async function AdminPage() {
  // Database se saari enquiries lana (naye se purane ke kram mein)
  const { data: enquiries, error } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-primary">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-8">Yahan se aapki site ka data manage hoga.</p>
      
      <div className="bg-card border-2 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 border-b pb-2">Admission Inquiries</h2>
        
        {error && <p className="text-red-500">Data laane mein error aaya: {error.message}</p>}
        
        {/* Agar koi data nahi hai */}
        {!enquiries || enquiries.length === 0 ? (
          <p className="text-gray-500 italic">Abhi tak kisi ne form nahi bhara hai.</p>
        ) : (
          /* Data ko cards ke roop mein dikhana */
          <div className="space-y-4">
            {enquiries.map((inquiry: any) => (
              <div key={inquiry.id} className="border p-4 rounded-lg bg-white/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p><span className="font-semibold text-gray-400">Student Name:</span> {inquiry.student_name}</p>
                  <p><span className="font-semibold text-gray-400">Class:</span> {inquiry.class_name}</p>
                  <p><span className="font-semibold text-gray-400">Father's Name:</span> {inquiry.father_name}</p>
                  <p><span className="font-semibold text-gray-400">Phone Number:</span> {inquiry.phone_number}</p>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-right">
                  Date: {new Date(inquiry.created_at).toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
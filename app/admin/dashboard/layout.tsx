import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex mt-16">
      
      {/* SIDEBAR (Left Menu) - आपकी वाली डिज़ाइन */}
      <div className="w-64 bg-[#243bb5] text-white p-6 shadow-xl hidden md:block">
        <h2 className="text-2xl font-bold mb-8 border-b border-blue-400 pb-4">Admin Panel</h2>
        <ul className="space-y-4">
          <Link href="/admin/dashboard" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded-lg transition">
            🏠 Dashboard Home
          </Link>
          <Link href="/admin/dashboard/announcements" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded-lg transition">
            📢 Announcements
          </Link>
          <Link href="/admin/dashboard/fees" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded-lg transition">
            💰 Fee Structure
          </Link>
          <Link href="#" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded-lg transition">
            👥 Teachers & Staff
          </Link>
            <Link href="/admin/dashboard/gallery" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded mb-2">
          {/* Master Site Content Link */}
          <Link href="/admin/dashboard/manage-pages" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded mb-2">
            📝 Manage All Pages
          </Link>
            🖼️ Gallery
</Link>
<Link href="/admin/dashboard/site-images" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded mb-2">
           ⚙️ Manage Site Images
</Link>   
          <Link href="#" className="block cursor-pointer hover:bg-blue-800 px-4 py-2 rounded mt-4">
             🔒 Logout
</Link>
        </ul>
      </div>

      {/* MAIN CONTENT (Right Side) - यहाँ बाकी पेज खुलेंगे */}
      <div className="flex-1 p-8 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}
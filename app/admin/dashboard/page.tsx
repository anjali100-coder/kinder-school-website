import { ManagePages } from '@/components/ManagePages';

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* ऊपर का वेलकम मैसेज */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Admin Dashboard</h1>
        <p className="text-gray-600 text-lg">
          Please use the menu on the left to navigate through different sections and manage the website content.
        </p>
      </div>

      {/* 👇 यहाँ हमने अपना 'पेज बनाने और डिलीट करने' वाला जादुई फॉर्म लगा दिया है */}
      <ManagePages />
    </div>
  );
}
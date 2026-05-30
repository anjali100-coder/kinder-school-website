import React from 'react';

export default function AboutSchool() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-blue-900 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">About Our School</h1>
        <p className="text-xl text-blue-100">Nurturing young minds for over 15 years.</p>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="School" className="rounded-3xl shadow-2xl h-80 w-full object-cover" />
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Cecil Convent School Junior Playway, we believe that every child is unique. Our mission is to provide a safe, joyful, and stimulating environment where children can explore, play, and learn.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <img src="https://images.unsplash.com/photo-1509062522246-37ed59775024?auto=format&fit=crop&w=800&q=80" alt="Learning" className="rounded-3xl shadow-2xl h-80 w-full object-cover" />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Methodology</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on play-based learning that enhances cognitive, social, and physical skills. Our dedicated faculty ensures each child gets personalized attention in a warm, family-like atmosphere.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
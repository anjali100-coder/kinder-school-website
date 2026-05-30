import React from 'react';

export default function StudentsCorner() {
  const sections = [
    { 
      title: "Little Picassos", 
      desc: "Watch our children unleash their creativity through finger painting, clay modeling, and vibrant craft projects. We believe every child is an artist in the making.",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Rhymes & Rhythm", 
      desc: "Music is the heartbeat of our school. From action songs to morning prayers, children express their emotions and build confidence through melody and movement.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Storytelling Magic", 
      desc: "Our storytelling sessions transport children into worlds of imagination. These tales not only entertain but also instill moral values and love for reading.",
      img: "https://images.unsplash.com/photo-1497633762265-9d176374f676?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Fun in the Sun", 
      desc: "We balance indoor learning with outdoor play. Our play areas are designed for physical coordination, teamwork, and endless hours of healthy fun.",
      img: "https://images.unsplash.com/photo-1502086223501-7d6ecd7a8da7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">Students Corner</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Celebrating the curiosity, creativity, and joy of our young learners.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 space-y-20">
        {sections.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2">
              <img src={item.img} alt={item.title} className="w-full h-80 object-cover rounded-3xl shadow-xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
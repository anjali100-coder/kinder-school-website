import React from 'react';

export default function StudentsCorner() {
  const activities = [
    {
      id: 1,
      title: "Storytelling Magic",
      description: "Our storytelling sessions transport children into worlds of imagination. These tales not only entertain but also instill moral values and love for reading.",
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Fun in the Sun",
      description: "Outdoor play is essential for physical development. Our secure playground offers a safe space for running, jumping, and joyful interactions.",
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Creative Arts",
      description: "Expressing thoughts through colors and crafts helps build fine motor skills and boosts creative thinking in our little artists.",
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Students Corner</h2>
        
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div key={activity.id} className={`flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-md ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img 
                  src={activity.src} 
                  alt={activity.title} 
                  className="w-full h-80 object-cover rounded-xl shadow-sm"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-4 px-4">
                <h3 className="text-3xl font-bold text-blue-800">{activity.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {activity.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
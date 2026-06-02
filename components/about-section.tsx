import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side - Upload box removed, beautiful static photo added */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50 group">
            {/* Jab aapke paas school ki asli photo aaye, toh aap usko public folder mein daal kar yahan src="/aapki-photo.jpg" likh sakte hain */}
            <img 
              src="/pic13.jpg" 
              alt="Cecil Convent School Playway" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Decorative colored blurred circles behind the image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f07b46] rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#243bb5] rounded-full opacity-30 blur-3xl"></div>
          </div>

          
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#243bb5] mb-6 leading-tight">
              Where Every Child's Journey Begins <br/> <span className="text-[#f07b46]">with Joy</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded with a vision to create a nurturing space for young learners, Cecil Convent School Junior Playway has been a trusted name in early childhood education in Ambala Cantt for over 15 years.
              </p>
              <p>
                We understand that the early years are crucial for a child's development. Our carefully designed programs focus on building cognitive, social, emotional, and physical skills through engaging activities and play-based learning.
              </p>
              <p>
                Our dedicated team of teachers creates a warm and welcoming environment where children feel safe to explore, question, and discover the world around them.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
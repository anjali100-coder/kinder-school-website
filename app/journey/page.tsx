import React from 'react';

export default function JourneyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      
      {/* School Ki Information Wala Hissa */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#243bb5] mb-6">
          Our Beautiful Journey
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to Cecil Convent School Junior Playway. Yahan hum bachon ko sirf padhate nahi, 
          balki unhe pyaar, creativity, aur khushi ke saath aage badhna sikhate hain. 
          Humara aim hai aapke bache ke future ki ek mazboot neev rakhna.
        </p>
      </div>

      {/* Aapki Original Photos Ki Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Photo 1 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          {/* 👇 Yahan 'photo1.jpg' ki jagah apni public folder wali image ka naam likhein 👇 */}
          <img 
            src="/photo1.jpg" 
            alt="School Activity 1" 
            className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" 
          />
        </div>

        {/* Photo 2 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="/photo2.jpg" 
            alt="School Activity 2" 
            className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" 
          />
        </div>

        {/* Photo 3 */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="/photo3.jpg" 
            alt="School Activity 3" 
            className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500" 
          />
        </div>

      </div>
      
    </div>
  );
}
import React from 'react';

export default function SchoolMap() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left Side: Contact & Address details */}
          <div className="bg-blue-900 text-white rounded-2xl p-8 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">Find Us</span>
              <h3 className="text-3xl font-extrabold mt-2 mb-6">Our Campus</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <h4 className="font-bold text-lg text-yellow-400">Address</h4>
                    <p className="text-blue-100 text-sm mt-1 leading-relaxed">
                      Cecil Convent School, <br />
                      Ambala Cantt, Haryana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <h4 className="font-bold text-lg text-yellow-400">Admission Desk</h4>
                    <p className="text-blue-100 text-sm mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">✉️</span>
                  <div>
                    <h4 className="font-bold text-lg text-yellow-400">Email Us</h4>
                    <p className="text-blue-100 text-sm mt-1">info@cecilconventschool.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-800 text-xs text-blue-200">
              Visiting Hours: 08:00 AM - 02:00 PM (Mon - Sat)
            </div>
          </div>

          {/* Right Side: Interactive Google Map */}
          <div className="lg:col-span-2 w-full h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white">
            <iframe 
              title="Cecil Convent School Location Map"
              src="https://maps.google.com/maps?q=Ambala%20Cantt&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
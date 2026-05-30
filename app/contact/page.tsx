import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#243bb5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Get in <span className="text-[#f07b46]">Touch</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 font-medium">
            We would love to hear from you. Reach out to us for admissions, queries, or just to say hello!
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side - Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-[#243bb5] mb-8 relative inline-block">
              Contact Information
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#f07b46] rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Have questions about our curriculum, facilities, or admission process? Our team is here to help provide all the information you need.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#243bb5] shrink-0 shadow-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Campus</h3>
                  <p className="text-gray-600 leading-relaxed">Opposite GPO, Staff Road,<br />Ambala Cantt, Haryana</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-orange-50/50 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#f07b46] shrink-0 shadow-sm">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                  <p className="text-gray-600 leading-relaxed">0171-4002666</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-green-50/50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                  <p className="text-gray-600 leading-relaxed break-all">ambalacantt@cecilconventschooljunior.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#243bb5]/20 focus:border-[#243bb5] transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#243bb5]/20 focus:border-[#243bb5] transition-all bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#243bb5]/20 focus:border-[#243bb5] transition-all bg-gray-50 focus:bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#243bb5]/20 focus:border-[#243bb5] transition-all bg-gray-50 focus:bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#243bb5]/20 focus:border-[#243bb5] transition-all bg-gray-50 focus:bg-white resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-[#f07b46] hover:bg-[#d96b3a] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X } from 'lucide-react'
import { toast } from 'sonner'

// 1. YAHAN HUMNE SUPABASE KO IMPORT KIYA HAI
import { supabase } from '@/lib/supabase'

interface AdmissionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    fatherName: '',
    phoneNumber: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleClassChange = (value: string) => {
    setFormData(prev => ({ ...prev, class: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.studentName.trim() || !formData.class || !formData.fatherName.trim() || !formData.phoneNumber.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number')
      return
    }

    setIsSubmitting(true)

    try {
      // 2. YAHAN HUM DATA KO SUPABASE DATABASE MEIN BHEJ RAHE HAIN
      const { error } = await supabase
        .from('enquiries')
        .insert([
          {
            student_name: formData.studentName.trim(),
            class_name: formData.class,
            father_name: formData.fatherName.trim(),
            phone_number: formData.phoneNumber.replace(/\D/g, ''),
          }
        ])

      // Agar data save hone mein koi error aaye
      if (error) {
        console.error('Supabase Error:', error)
        throw error
      }

      toast.success('Admission inquiry submitted successfully! We will contact you soon.')
      setFormData({ studentName: '', class: '', fatherName: '', phoneNumber: '' })
      onClose()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-primary/20">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-primary">Admission Inquiry</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-1">
                Fill out the form below to register your child for admission
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

       <form className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
  
  {/* Basic Details - 2 Column Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Student Name */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">Student's Full Name *</label>
      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Rahul Sharma" required />
    </div>

    {/* Date of Birth */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth *</label>
      <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required />
    </div>

    {/* Class */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">Class Applying For *</label>
      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" required>
        <option value="">Select class...</option>
        <option value="playway">Playway</option>
        <option value="nursery">Nursery</option>
        <option value="lkg">LKG</option>
        <option value="ukg">UKG</option>
      </select>
    </div>

    {/* Aadhaar Number */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">Aadhaar Card Number *</label>
      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="XXXX XXXX XXXX" required />
    </div>

    {/* Father/Mother Name */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">Father's / Mother's Name *</label>
      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter parent's name" required />
    </div>

    {/* Phone Number */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
      <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 XXXXX XXXXX" required />
    </div>
  </div>

  {/* Full Width Address Field */}
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">Residential Address *</label>
    <textarea rows={2} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter complete address" required></textarea>
  </div>

  {/* Document Upload Section */}
  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-2">
    <h3 className="font-bold text-blue-900 mb-3 border-b border-blue-200 pb-2">Upload Required Documents</h3>
    
    <div className="space-y-3">
      {/* 1. Aadhaar Card Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">1. Aadhaar Card (PDF / Image) *</label>
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="w-full text-sm text-gray-600 bg-white border border-gray-300 rounded-md file:bg-blue-100 file:text-blue-700 file:border-0 file:px-4 file:py-2 file:mr-4 hover:file:bg-blue-200 cursor-pointer" required />
      </div>
      
      {/* 2. Birth Certificate Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">2. Birth Certificate (PDF / Image) *</label>
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="w-full text-sm text-gray-600 bg-white border border-gray-300 rounded-md file:bg-blue-100 file:text-blue-700 file:border-0 file:px-4 file:py-2 file:mr-4 hover:file:bg-blue-200 cursor-pointer" required />
      </div>

      {/* 3. Student Photo */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">3. Student's Passport Size Photo *</label>
        <input type="file" accept=".jpg,.jpeg,.png" className="w-full text-sm text-gray-600 bg-white border border-gray-300 rounded-md file:bg-blue-100 file:text-blue-700 file:border-0 file:px-4 file:py-2 file:mr-4 hover:file:bg-blue-200 cursor-pointer" required />
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="pt-2">
    <button type="submit" className="w-full bg-[#243bb5] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md">
      Submit Complete Admission Form
    </button>
  </div>
</form>
      </DialogContent>
    </Dialog>
  )
}
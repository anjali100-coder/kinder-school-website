"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { createClient } from '@supabase/supabase-js'

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Maine yahan dob, aadhaarNumber aur address bhi jod diya hai
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    fatherName: '',
    phoneNumber: '',
    email: '',
    dob: '',
    aadhaarNumber: '',
    address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Sabse pehle Supabase mein data bhejna
      const { error: supabaseError } = await supabase.from('enquiries').insert([
        {
          student_name: formData.studentName,
          dob: formData.dob,
          class_name: formData.class,
          aadhaar_number: formData.aadhaarNumber,
          parent_name: formData.fatherName,
          phone_number: formData.phoneNumber,
          email: formData.email,
          address: formData.address,
        }
      ]);

      if (supabaseError) {
        throw new Error('Supabase error: ' + supabaseError.message);
      }

      // 2. Uske baad Email send karna (Aapka purana code)
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast.success('Admission inquiry submitted successfully!');
      // Form ko wapas khali karna
      setFormData({ studentName: '', class: '', fatherName: '', phoneNumber: '', email: '', dob: '', aadhaarNumber: '', address: '' });
      setIsSubmitted(true);

    } catch (error: any) {
      alert("Submission Error: Something went wrong");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white text-gray-900 border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-900">
            Admission Inquiry
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">Thank you for your inquiry. We will contact you soon.</p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Student's Full Name *</Label>
                <Input required placeholder="e.g. Rahul Sharma" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Date of Birth *</Label>
                <Input required type="date" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Class Applying For *</Label>
                <Select onValueChange={(value) => setFormData({...formData, class: value})}>
                  <SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Playway">Playway</SelectItem>
                    <SelectItem value="Nursery">Nursery</SelectItem>
                    <SelectItem value="LKG">LKG</SelectItem>
                    <SelectItem value="UKG">UKG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Aadhaar Card Number *</Label>
                <Input required placeholder="XXXX XXXX XXXX" value={formData.aadhaarNumber} onChange={(e) => setFormData({...formData, aadhaarNumber: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Father's / Mother's Name *</Label>
                <Input required placeholder="Enter parent's name" value={formData.fatherName} onChange={(e) => setFormData({...formData, fatherName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Phone Number *</Label>
                <Input required placeholder="+91 XXXXXXXXXX" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Email Address *</Label>
                <Input name="email" required type="email" placeholder="e.g. name@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Residential Address *</Label>
              <Input required placeholder="Enter complete address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>

            <div className="pt-2 pb-4">
              <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                Upload Required Documents
              </span>
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    fatherName: '',
    phoneNumber: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleClassChange = (value: string) => {
    setFormData(prev => ({ ...prev, class: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    alert("Form is submitting...");
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
      setIsSubmitted(true)
  } catch (error: any) {
  alert("Submission Error: " + (error.message || "Something went wrong"));
  console.error(error);
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

       <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Student's Full Name *</Label>
                <Input required placeholder="e.g. Rahul Sharma" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Date of Birth *</Label>
                <Input required type="date" />
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
                <Input required placeholder="XXXX XXXX XXXX" />
              </div>

              <div className="space-y-2">
                <Label>Father's / Mother's Name *</Label>
                <Input required placeholder="Enter parent's name" value={formData.fatherName} onChange={(e) => setFormData({...formData, fatherName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Phone Number *</Label>
                <Input required placeholder="+91 XXXXXXXXXX" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Residential Address *</Label>
              <Input required placeholder="Enter complete address" />
            </div>

            <div className="pt-2 pb-4">
              <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                Upload Required Documents
              </span>
            </div>
            
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Submit Inquiry
            </Button>
            
          </form>
      </DialogContent>
    </Dialog>
  )
}
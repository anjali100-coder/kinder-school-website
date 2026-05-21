'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X } from 'lucide-react'
import { toast } from 'sonner'

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
      // Simulate network latency
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Construct new inquiry
      const newInquiry = {
        id: Math.random().toString(36).substring(2, 11),
        studentName: formData.studentName.trim(),
        class: formData.class,
        fatherName: formData.fatherName.trim(),
        phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
        status: 'Pending',
        date: new Date().toISOString(),
        notes: ''
      }

      // Save to localStorage
      try {
        const stored = localStorage.getItem('cecil_school_inquiries')
        const currentInquiries = stored ? JSON.parse(stored) : []
        localStorage.setItem('cecil_school_inquiries', JSON.stringify([newInquiry, ...currentInquiries]))
      } catch (err) {
        console.error('Failed to save inquiry to localStorage:', err)
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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name */}
          <div className="space-y-2">
            <Label htmlFor="studentName" className="text-foreground font-semibold">
              Student Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter student's full name"
              className="border-2 border-border focus:border-primary rounded-lg"
              disabled={isSubmitting}
            />
          </div>

          {/* Class */}
          <div className="space-y-2">
            <Label htmlFor="class" className="text-foreground font-semibold">
              Class <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.class} onValueChange={handleClassChange} disabled={isSubmitting}>
              <SelectTrigger className="border-2 border-border focus:border-primary rounded-lg">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="playgroup">Playgroup (Age 2-3)</SelectItem>
                <SelectItem value="nursery">Nursery (Age 3-4)</SelectItem>
                <SelectItem value="lkg">LKG (Age 4-5)</SelectItem>
                <SelectItem value="ukg">UKG (Age 5-6)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Father's Name */}
          <div className="space-y-2">
            <Label htmlFor="fatherName" className="text-foreground font-semibold">
              Father&apos;s Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter father's full name"
              className="border-2 border-border focus:border-primary rounded-lg"
              disabled={isSubmitting}
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-foreground font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              className="border-2 border-border focus:border-primary rounded-lg"
              disabled={isSubmitting}
              type="tel"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold py-3 mt-6"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            We respect your privacy. Your information will be used only for admission purposes.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}

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

       {isSubmitted ? (
          
          /* 1. जब फॉर्म सबमिट हो जाएगा, तो यह दिखेगा */
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">Thank you for your inquiry. We will contact you soon.</p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                onClose(); 
              }}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Close
            </Button>
          </div>

        ) : (

          /* 2. जब तक फॉर्म सबमिट नहीं हुआ है, तब तक यह फॉर्म दिखेगा */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* --- यहाँ आपके फॉर्म के सारे पुराने Inputs आएंगे --- */}
            {/* (जैसे Name, Class, Father Name वाले डिब्बे यहीं रहने दें) */}
            
            {/* फॉर्म का सबसे नीचे वाला सबमिट बटन */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Submit Inquiry
            </Button>
          </form>

        )}
      </DialogContent>
    </Dialog>
  )
}
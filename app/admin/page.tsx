'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { 
  Lock, 
  Unlock, 
  Search, 
  Trash2, 
  FileText, 
  Download, 
  LogOut, 
  RefreshCw, 
  CheckCircle, 
  Clock, 
  UserCheck, 
  Users, 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  Edit3, 
  AlertTriangle,
  X,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { toast } from 'sonner'

export interface Inquiry {
  id: string
  studentName: string
  class: string
  fatherName: string
  phoneNumber: string
  status: 'Pending' | 'Contacted' | 'Enrolled' | 'Rejected'
  date: string
  notes?: string
}

export default function AdminPage() {
  const [mounted, setMounted] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [showPasscode, setShowPasscode] = useState(false)
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('')
  const [classFilter, setClassFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  
  // Active Inquiry Modal
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [editNotes, setEditNotes] = useState('')
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false)
  
  // Delete Confirmation Modal
  const [inquiryToDelete, setInquiryToDelete] = useState<string | null>(null)

  // Handle Hydration Mismatch
  useEffect(() => {
    setMounted(true)
    
    // Check session storage
    const authStatus = sessionStorage.getItem('cecil_admin_authorized')
    if (authStatus === 'true') {
      setIsAuthorized(true)
    }

    // Load inquiries
    const stored = localStorage.getItem('cecil_school_inquiries')
    if (stored) {
      try {
        setInquiries(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse inquiries:', e)
      }
    }
  }, [])

  // Sync inquiries with localStorage
  const saveInquiries = (updatedList: Inquiry[]) => {
    setInquiries(updatedList)
    try {
      localStorage.setItem('cecil_school_inquiries', JSON.stringify(updatedList))
    } catch (e) {
      console.error('Failed to write inquiries to localStorage:', e)
    }
  }

  // Handle Unlock
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode === 'admin123') {
      setIsAuthorized(true)
      sessionStorage.setItem('cecil_admin_authorized', 'true')
      toast.success('Successfully unlocked Admin Dashboard!')
      setPasscode('')
    } else {
      toast.error('Invalid passcode. Please try again.')
    }
  }

  // Handle Logout
  const handleLogout = () => {
    setIsAuthorized(false)
    sessionStorage.removeItem('cecil_admin_authorized')
    toast.info('Logged out of Admin Dashboard.')
  }

  // Generate Mock Data
  const handleGenerateMockData = () => {
    const mockInquiries: Inquiry[] = [
      {
        id: 'mock-1',
        studentName: 'Aarav Sharma',
        class: 'playgroup',
        fatherName: 'Vikram Sharma',
        phoneNumber: '9876543210',
        status: 'Pending',
        date: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 hours ago
        notes: 'Father requested information about school transport routes.'
      },
      {
        id: 'mock-2',
        studentName: 'Priya Patel',
        class: 'nursery',
        fatherName: 'Rajesh Patel',
        phoneNumber: '9812345678',
        status: 'Contacted',
        date: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
        notes: 'Called mother. Scheduled campus visit next Tuesday at 10 AM.'
      },
      {
        id: 'mock-3',
        studentName: 'Ishaan Singh',
        class: 'lkg',
        fatherName: 'Gurpreet Singh',
        phoneNumber: '9998887776',
        status: 'Enrolled',
        date: new Date(Date.now() - 3600000 * 72).toISOString(), // 3 days ago
        notes: 'Fees paid in full. Document verification completed. Roll no. assigned.'
      },
      {
        id: 'mock-4',
        studentName: 'Kiara Sen',
        class: 'ukg',
        fatherName: 'Amit Sen',
        phoneNumber: '9871234560',
        status: 'Pending',
        date: new Date(Date.now() - 3600000 * 8).toISOString(), // 8 hours ago
        notes: ''
      },
      {
        id: 'mock-5',
        studentName: 'Kabir Verma',
        class: 'nursery',
        fatherName: 'Neeraj Verma',
        phoneNumber: '9911223344',
        status: 'Rejected',
        date: new Date(Date.now() - 3600000 * 120).toISOString(), // 5 days ago
        notes: 'Age criterion not met. Child is below 3 years for Nursery. Suggested Playgroup.'
      },
      {
        id: 'mock-6',
        studentName: 'Ananya Nair',
        class: 'ukg',
        fatherName: 'Suresh Nair',
        phoneNumber: '9555666777',
        status: 'Contacted',
        date: new Date(Date.now() - 3600000 * 150).toISOString(), // 6 days ago
        notes: 'Spoke with father. Wants to enroll both siblings. Sent admission form link.'
      }
    ]

    // Prepend or replace
    const newList = [...mockInquiries, ...inquiries.filter(item => !item.id.startsWith('mock-'))]
    saveInquiries(newList)
    toast.success('Generated 6 mock inquiry records!')
  }

  // Clear all inquiries
  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear ALL inquiry records? This cannot be undone.')) {
      saveInquiries([])
      toast.info('All inquiries cleared.')
    }
  }

  // Update Inquiry Status
  const handleStatusChange = (id: string, newStatus: Inquiry['status']) => {
    const updated = inquiries.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus }
      }
      return item
    })
    saveInquiries(updated)
    toast.success(`Updated status to ${newStatus}`)
  }

  // Delete inquiry record
  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter(item => item.id !== id)
    saveInquiries(updated)
    setInquiryToDelete(null)
    toast.success('Inquiry record deleted successfully.')
  }

  // Save Notes
  const handleSaveNotes = () => {
    if (!selectedInquiry) return
    
    const updated = inquiries.map(item => {
      if (item.id === selectedInquiry.id) {
        return { ...item, notes: editNotes }
      }
      return item
    })
    saveInquiries(updated)
    setIsNotesModalOpen(false)
    setSelectedInquiry(null)
    toast.success('Staff notes updated successfully.')
  }

  // Open Notes Modal
  const openNotesModal = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry)
    setEditNotes(inquiry.notes || '')
    setIsNotesModalOpen(true)
  }

  // Export Filtered data to CSV
  const handleExportCSV = () => {
    if (filteredInquiries.length === 0) {
      toast.error('No records available to export.')
      return
    }

    const headers = ['ID', 'Student Name', 'Class', "Father's Name", 'Phone Number', 'Status', 'Submission Date', 'Remarks/Notes']
    const rows = filteredInquiries.map(item => [
      item.id,
      item.studentName,
      item.class.toUpperCase(),
      item.fatherName,
      item.phoneNumber,
      item.status,
      new Date(item.date).toLocaleDateString() + ' ' + new Date(item.date).toLocaleTimeString(),
      (item.notes || '').replace(/"/g, '""') // Escape double quotes
    ])

    const csvContent = 
      "data:text/csv;charset=utf-8," + 
      [headers.join(','), ...rows.map(e => e.map(val => `"${val}"`).join(','))].join('\n')
    
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `cecil_admission_inquiries_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('CSV export download started!')
  }

  // Filtered inquiries calculation
  const filteredInquiries = inquiries.filter(item => {
    const matchesSearch = 
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneNumber.includes(searchTerm)
      
    const matchesClass = classFilter === 'all' || item.class === classFilter
    const matchesStatus = statusFilter === 'all' || item.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesClass && matchesStatus
  })

  // Status counts for cards
  const stats = {
    total: inquiries.length,
    pending: inquiries.filter(i => i.status === 'Pending').length,
    contacted: inquiries.filter(i => i.status === 'Contacted').length,
    enrolled: inquiries.filter(i => i.status === 'Enrolled').length,
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-bold">Loading Admin Portal...</p>
        </div>
      </div>
    )
  }

  // PASSCODE LOCK SCREEN
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-50 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 font-sans">
        {/* Top Header */}
        <div className="max-w-md mx-auto w-full text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-85 transition-opacity">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow border-2 border-primary/20 flex-shrink-0">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <div className="text-left">
              <h1 className="font-bold text-sm text-blue-900 leading-tight">Cecil Convent School</h1>
              <p className="text-[10px] text-yellow-600 font-bold">Junior Playway</p>
            </div>
          </Link>
        </div>

        {/* Lock Card */}
        <div className="max-w-md mx-auto w-full">
          <Card className="shadow-2xl border-4 border-yellow-300 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-8 px-6 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 animate-pulse"></div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-lg border-3 border-white mb-4">
                <Lock className="w-8 h-8 text-blue-900" />
              </div>
              <CardTitle className="text-2xl font-bold">Admin Portal Secured</CardTitle>
              <p className="text-blue-100 text-xs mt-1 font-semibold">Enter the passcode to manage student inquiries</p>
            </div>

            <form onSubmit={handleUnlock}>
              <CardContent className="space-y-4 pt-8 px-8">
                <div className="space-y-2">
                  <Label htmlFor="passcode" className="text-blue-900 font-bold">Enter Administrator Passcode</Label>
                  <div className="relative">
                    <Input
                      id="passcode"
                      type={showPasscode ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="pr-10 border-2 border-gray-200 focus:border-primary rounded-xl font-mono text-center tracking-widest text-lg py-6"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasscode(!showPasscode)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-900 transition-colors"
                    >
                      {showPasscode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-500 font-semibold italic text-center mt-2">
                    💡 Hint: The default demo passcode is <code className="bg-gray-100 px-1 py-0.5 rounded font-bold text-primary font-mono">admin123</code>
                  </p>
                </div>
              </CardContent>
              <CardFooter className="px-8 pb-8">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-bold py-6 shadow-lg transform hover:scale-102 transition-all text-base flex items-center gap-2 justify-center"
                >
                  <Unlock className="w-5 h-5" />
                  Unlock Dashboard
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        {/* Bottom Back To Home link */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-blue-900/60 hover:text-blue-900 font-bold transition-all hover:underline">
            <ChevronLeft className="w-4 h-4" />
            Back to Public Website
          </Link>
        </div>
      </div>
    )
  }

  // AUTHORIZED FULL ADMIN PORTAL
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans pb-16">
      
      {/* Top Navigation */}
      <header className="bg-white border-b-4 border-yellow-300 shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-white">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg text-blue-900 leading-tight">Cecil Convent School</h1>
                <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-400 font-bold rounded-full text-[10px]">Admin Panel</Badge>
              </div>
              <p className="text-xs text-yellow-600 font-bold">Junior Playway play school management portal</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleGenerateMockData}
              className="border-2 border-dashed border-primary/40 hover:border-primary text-primary hover:bg-primary/5 rounded-full font-bold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Generate Mock Data
            </Button>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border-2 border-red-200 rounded-full font-bold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer shadow-none"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        
        {/* STATS HIGHLIGHTS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Card Total */}
          <Card className="border-l-8 border-l-blue-600 rounded-2xl bg-white shadow-sm overflow-hidden hover:shadow transition-shadow">
            <CardHeader className="p-4 flex flex-row items-center justify-between pb-2">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total Inquiries</span>
              <Users className="w-5 h-5 text-blue-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-extrabold text-blue-900">{stats.total}</div>
              <p className="text-[10px] text-gray-400 mt-1 font-semibold">Registered from enrollment form</p>
            </CardContent>
          </Card>

          {/* Card Pending */}
          <Card className="border-l-8 border-l-orange-500 rounded-2xl bg-white shadow-sm overflow-hidden hover:shadow transition-shadow">
            <CardHeader className="p-4 flex flex-row items-center justify-between pb-2">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Pending Inquiry</span>
              <Clock className="w-5 h-5 text-orange-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-extrabold text-orange-600">{stats.pending}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div 
                    className="bg-orange-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${stats.total > 0 ? (stats.pending / stats.total) * 100 : 0}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-gray-500 font-bold">{stats.total > 0 ? Math.round((stats.pending / stats.total) * 100) : 0}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Card Contacted */}
          <Card className="border-l-8 border-l-sky-500 rounded-2xl bg-white shadow-sm overflow-hidden hover:shadow transition-shadow">
            <CardHeader className="p-4 flex flex-row items-center justify-between pb-2">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">In Contact</span>
              <RefreshCw className="w-5 h-5 text-sky-500" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-extrabold text-sky-600">{stats.contacted}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div 
                    className="bg-sky-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${stats.total > 0 ? (stats.contacted / stats.total) * 100 : 0}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-gray-500 font-bold">{stats.total > 0 ? Math.round((stats.contacted / stats.total) * 100) : 0}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Card Enrolled */}
          <Card className="border-l-8 border-l-green-600 rounded-2xl bg-white shadow-sm overflow-hidden hover:shadow transition-shadow">
            <CardHeader className="p-4 flex flex-row items-center justify-between pb-2">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Enrolled</span>
              <UserCheck className="w-5 h-5 text-green-600" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-extrabold text-green-700">{stats.enrolled}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div 
                    className="bg-green-600 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${stats.total > 0 ? (stats.enrolled / stats.total) * 100 : 0}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-gray-500 font-bold">{stats.total > 0 ? Math.round((stats.enrolled / stats.total) * 100) : 0}%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CONTROLS BAR & DATA VIEWER */}
        <Card className="rounded-3xl border-2 border-gray-100 shadow-lg overflow-hidden bg-white">
          <CardHeader className="border-b border-gray-100 bg-gray-50/50 py-6 px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-extrabold text-blue-900">Admission Enquiries Database</CardTitle>
                <CardDescription className="text-xs text-gray-500 font-semibold mt-1">
                  Showing {filteredInquiries.length} of {inquiries.length} inquiry records
                </CardDescription>
              </div>
              
              <div className="flex items-center gap-2 flex-wrap">
                <Button 
                  onClick={handleExportCSV}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full font-bold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Export CSV
                </Button>
                {inquiries.length > 0 && (
                  <Button 
                    variant="outline"
                    onClick={handleClearAll}
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-full font-bold px-4 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Database
                  </Button>
                )}
              </div>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {/* Search bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by student/father name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-gray-200 focus:border-primary rounded-xl text-sm"
                />
              </div>

              {/* Class filter */}
              <div>
                <Select value={classFilter} onValueChange={setClassFilter}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-primary rounded-xl text-sm w-full bg-white">
                    <SelectValue placeholder="All Classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="playgroup">Playgroup (Age 2-3)</SelectItem>
                    <SelectItem value="nursery">Nursery (Age 3-4)</SelectItem>
                    <SelectItem value="lkg">LKG (Age 4-5)</SelectItem>
                    <SelectItem value="ukg">UKG (Age 5-6)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status filter */}
              <div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-primary rounded-xl text-sm w-full bg-white">
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="enrolled">Enrolled</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>

          {/* TABLE DISPLAY */}
          <CardContent className="p-0">
            {filteredInquiries.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4 border-2 border-dashed border-gray-200">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-700 text-lg">No inquiries found</h3>
                <p className="text-gray-400 text-sm max-w-sm mt-1">
                  {inquiries.length === 0 
                    ? 'No parents have submitted the admission form yet. Try clicking "Generate Mock Data" above to instantly seed realistic data!' 
                    : 'Try loosening your search query or filters to find the inquiries you are looking for.'}
                </p>
                {inquiries.length === 0 && (
                  <Button 
                    onClick={handleGenerateMockData}
                    className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-bold px-6 py-2 shadow cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    Seed Sample Inquiries
                  </Button>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-gray-50/70 border-b border-gray-100">
                    <TableRow>
                      <TableHead className="font-bold text-blue-900 py-4 pl-6 text-xs uppercase tracking-wider">Date & Time</TableHead>
                      <TableHead className="font-bold text-blue-900 py-4 text-xs uppercase tracking-wider">Student Name</TableHead>
                      <TableHead className="font-bold text-blue-900 py-4 text-xs uppercase tracking-wider">Class</TableHead>
                      <TableHead className="font-bold text-blue-900 py-4 text-xs uppercase tracking-wider">Father Name</TableHead>
                      <TableHead className="font-bold text-blue-900 py-4 text-xs uppercase tracking-wider">Phone Number</TableHead>
                      <TableHead className="font-bold text-blue-900 py-4 text-xs uppercase tracking-wider">Status</TableHead>
                      <TableHead className="font-bold text-blue-900 py-4 text-xs uppercase tracking-wider">Remarks</TableHead>
                      <TableHead className="font-bold text-blue-900 py-4 pr-6 text-right text-xs uppercase tracking-wider">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInquiries.map((inquiry) => {
                      // Status styling helper
                      const getStatusBadge = (status: Inquiry['status']) => {
                        switch (status) {
                          case 'Pending':
                            return 'bg-amber-100 text-amber-800 border-amber-200'
                          case 'Contacted':
                            return 'bg-sky-100 text-sky-800 border-sky-200'
                          case 'Enrolled':
                            return 'bg-emerald-100 text-emerald-800 border-emerald-200 font-bold'
                          case 'Rejected':
                            return 'bg-rose-100 text-rose-800 border-rose-200'
                        }
                      }

                      return (
                        <TableRow key={inquiry.id} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100">
                          {/* Date */}
                          <TableCell className="py-4 pl-6 text-xs text-gray-500 font-medium">
                            {new Date(inquiry.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            <span className="block text-[10px] text-gray-400 mt-0.5">
                              {new Date(inquiry.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </TableCell>
                          
                          {/* Student Name */}
                          <TableCell className="py-4 font-bold text-sm text-blue-950">
                            {inquiry.studentName}
                          </TableCell>
                          
                          {/* Class */}
                          <TableCell className="py-4 text-xs font-semibold text-gray-700 capitalize">
                            {inquiry.class}
                          </TableCell>
                          
                          {/* Father Name */}
                          <TableCell className="py-4 text-xs font-semibold text-gray-700">
                            {inquiry.fatherName}
                          </TableCell>
                          
                          {/* Phone Number */}
                          <TableCell className="py-4 text-xs font-bold text-blue-600/90 font-mono">
                            <a href={`tel:${inquiry.phoneNumber}`} className="hover:underline">
                              {inquiry.phoneNumber.replace(/(\d{5})(\d{5})/, '$1-$2')}
                            </a>
                          </TableCell>
                          
                          {/* Status Badge */}
                          <TableCell className="py-4">
                            <Badge className={`border-1 shadow-none text-[11px] rounded-full px-2.5 py-0.5 ${getStatusBadge(inquiry.status)}`}>
                              {inquiry.status}
                            </Badge>
                          </TableCell>
                          
                          {/* Remarks Snippet */}
                          <TableCell className="py-4 max-w-[150px] truncate text-xs text-gray-500 font-semibold italic">
                            {inquiry.notes || <span className="text-gray-300 font-normal">No remarks yet</span>}
                          </TableCell>
                          
                          {/* Action Items */}
                          <TableCell className="py-4 pr-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {/* Status Select changer */}
                              <Select
                                value={inquiry.status}
                                onValueChange={(val) => handleStatusChange(inquiry.id, val as Inquiry['status'])}
                              >
                                <SelectTrigger className="h-8 w-[110px] border border-gray-200 focus:border-primary rounded-lg text-xs bg-white font-semibold shadow-none cursor-pointer">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="min-w-[110px] text-xs">
                                  <SelectItem value="Pending">Pending</SelectItem>
                                  <SelectItem value="Contacted">Contacted</SelectItem>
                                  <SelectItem value="Enrolled">Enrolled</SelectItem>
                                  <SelectItem value="Rejected">Rejected</SelectItem>
                                </SelectContent>
                              </Select>

                              {/* Edit remarks button */}
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => openNotesModal(inquiry)}
                                className="w-8 h-8 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 cursor-pointer"
                                title="Edit Remarks & Notes"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </Button>

                              {/* Delete button */}
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => setInquiryToDelete(inquiry.id)}
                                className="w-8 h-8 rounded-lg text-red-500 hover:text-red-600 hover:bg-red-50 border border-red-100 hover:border-red-200 cursor-pointer"
                                title="Delete Record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* EDIT NOTES REMARKS DIALOG */}
      <Dialog open={isNotesModalOpen} onOpenChange={(open) => !open && setIsNotesModalOpen(false)}>
        <DialogContent className="sm:max-w-md bg-card border-2 border-primary/20 rounded-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <div>
                <DialogTitle className="text-xl font-bold text-blue-900">Coordinator Remarks</DialogTitle>
                <DialogDescription className="text-xs text-gray-500 mt-1 font-semibold">
                  Update administrative comments for <strong className="text-blue-950">{selectedInquiry?.studentName}</strong>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {selectedInquiry && (
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-xs font-semibold text-gray-700 border border-gray-100">
                <div>
                  <span className="text-gray-400 block mb-0.5">Parent&apos;s Name</span>
                  <span className="text-blue-950 font-bold">{selectedInquiry.fatherName}</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Phone Number</span>
                  <span className="text-blue-950 font-bold font-mono">{selectedInquiry.phoneNumber}</span>
                </div>
                <div className="mt-2">
                  <span className="text-gray-400 block mb-0.5">Class Applied</span>
                  <span className="text-blue-950 font-bold capitalize">{selectedInquiry.class}</span>
                </div>
                <div className="mt-2">
                  <span className="text-gray-400 block mb-0.5">Current Status</span>
                  <Badge className="bg-blue-100 text-blue-800 border-none font-bold rounded px-1.5 py-0.2 shadow-none uppercase text-[10px] tracking-wider">
                    {selectedInquiry.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notesInput" className="text-blue-900 font-bold text-xs">Remarks / Notes</Label>
                <textarea
                  id="notesInput"
                  rows={4}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="Type admission process logs, call history remarks, child details, or parent specifications..."
                  className="w-full border-2 border-gray-200 focus:border-primary rounded-xl text-sm p-3 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}

          <DialogFooter className="pt-4 border-t border-gray-100 flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsNotesModalOpen(false)
                setSelectedInquiry(null)
              }}
              className="rounded-full font-bold text-xs"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveNotes}
              className="bg-primary text-primary-foreground hover:bg-primary/95 rounded-full font-bold text-xs px-6"
            >
              Save Remarks
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* DELETE CONFIRMATION DIALOG */}
      <Dialog open={inquiryToDelete !== null} onOpenChange={(open) => !open && setInquiryToDelete(null)}>
        <DialogContent className="sm:max-w-md bg-card border-2 border-red-100 rounded-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-red-950">Delete Inquiry Record?</DialogTitle>
                <DialogDescription className="text-xs text-gray-500 font-semibold mt-0.5">
                  This action is permanent and cannot be undone.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="py-2 text-sm text-gray-600">
            Are you sure you want to remove this inquiry from the database? All details, remarks, and history will be cleared.
          </div>
          <DialogFooter className="pt-4 border-t border-gray-100 flex gap-2">
            <Button
              variant="outline"
              onClick={() => setInquiryToDelete(null)}
              className="rounded-full font-bold text-xs"
            >
              Cancel
            </Button>
            <Button
              onClick={() => inquiryToDelete && handleDeleteInquiry(inquiryToDelete)}
              className="bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-xs px-6 cursor-pointer"
            >
              Delete Record
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  )
}

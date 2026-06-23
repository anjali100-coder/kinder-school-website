'use client'

import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Trash2, Plus, FileText, ExternalLink } from 'lucide-react'

// Supabase Connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export function ManagePages() {
  const [pages, setPages] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  // पेज लोड होते ही डेटाबेस से सारे पेज मँगवाओ
  useEffect(() => {
    fetchPages()
  }, [])

  const fetchPages = async () => {
    const { data } = await supabase.from('dynamic_pages').select('*').order('id', { ascending: false })
    if (data) setPages(data)
  }

  // नया पेज बनाने का फंक्शन
  const handleAddPage = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Slug (URL) को साफ करना (Space की जगह - लगाना)
    const cleanSlug = slug.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')

    const { error } = await supabase
      .from('dynamic_pages')
      .insert([{ title, slug: cleanSlug, content }])

    if (!error) {
      alert('🎉 नया पेज सफलतापूर्वक बन गया!')
      setTitle('')
      setSlug('')
      setContent('')
      fetchPages() // लिस्ट को अपडेट करो
    } else {
      alert('Error: ' + error.message)
    }
    setLoading(false)
  }

  // पेज डिलीट करने का फंक्शन
  const handleDeletePage = async (id: string, pageTitle: string) => {
    if (!window.confirm(`क्या आप सच में "${pageTitle}" पेज को डिलीट करना चाहते हैं?`)) return

    const { error } = await supabase.from('dynamic_pages').delete().eq('id', id)
    
    if (!error) {
      alert('🗑️ पेज हमेशा के लिए डिलीट हो गया!')
      fetchPages()
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b pb-4 flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-600" /> Manage Dynamic Pages
      </h2>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* बायाँ हिस्सा: नया पेज बनाने का फॉर्म */}
        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5" /> Create New Page
          </h3>
          <form onSubmit={handleAddPage} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Page Title (हेडिंग)</label>
              <input 
                type="text" 
                required 
                value={title} 
                onChange={(e) => {
                  setTitle(e.target.value)
                  // Title लिखते ही URL (slug) अपने आप बन जाएगा
                  if(!slug) setSlug(e.target.value.toLowerCase().replace(/ /g, '-'))
                }}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" 
                placeholder="e.g. Admission Rules" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">URL / Slug (लिंक का नाम)</label>
              <div className="flex items-center">
                <span className="bg-gray-100 border border-r-0 p-3 rounded-l-lg text-gray-500 text-sm">/</span>
                <input 
                  type="text" 
                  required 
                  value={slug} 
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full p-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500 lowercase" 
                  placeholder="e.g. admission-rules" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Page Content (पूरा टेक्स्ट)</label>
              <textarea 
                required 
                rows={6}
                value={content} 
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" 
                placeholder="Write all the details here..." 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Creating Page...' : 'Publish Page'}
            </button>
          </form>
        </div>

        {/* दायाँ हिस्सा: बने हुए पेजों की लिस्ट और Delete बटन */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Existing Pages</h3>
          
          {pages.length === 0 ? (
            <p className="text-gray-500 italic p-4 bg-gray-50 rounded-lg">No dynamic pages created yet.</p>
          ) : (
            <div className="space-y-4">
              {pages.map((page) => (
                <div key={page.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition">
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg">{page.title}</h4>
                    <a href={`/${page.slug}`} target="_blank" rel="noreferrer" className="text-sm text-blue-500 flex items-center gap-1 hover:underline mt-1">
                      /{page.slug} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <button 
                    onClick={() => handleDeletePage(page.id, page.title)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                    title="Delete Page"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
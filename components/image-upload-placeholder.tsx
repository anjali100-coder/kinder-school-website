'use client'

import { Upload, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef } from 'react'

interface ImageUploadPlaceholderProps {
  id: string
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  onImageChange?: (file: File | null) => void
  isCircle?: boolean
}

export function ImageUploadPlaceholder({
  id,
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  containerClassName = '',
  onImageChange,
  isCircle = false,
}: ImageUploadPlaceholderProps) {
  const [image, setImage] = useState<string | undefined>(src)
  const [isDragActive, setIsDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImage(result)
        onImageChange?.(file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setImage(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    onImageChange?.(null)
  }

  const borderRadius = isCircle ? 'rounded-full' : 'rounded-2xl'

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-blue-50 to-yellow-50 border-2 border-dashed border-blue-300 hover:border-blue-400 transition-colors cursor-pointer ${borderRadius} ${containerClassName}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      {image ? (
        <div className={`relative w-full h-full ${borderRadius}`}>
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
          />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-colors"
            aria-label="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/20 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-sm">Click to replace</span>
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-center w-full h-full p-6 text-center ${isDragActive ? 'bg-blue-100' : ''} transition-colors`}
        >
          <Upload className={`w-12 h-12 text-blue-400 mb-3 ${isDragActive ? 'scale-110' : ''} transition-transform`} />
          <p className="text-blue-900 font-bold text-sm mb-1">Upload Photo</p>
          <p className="text-blue-600 text-xs">Drag & drop or click to select</p>
          <p className="text-gray-500 text-xs mt-2">(JPG, PNG up to 5MB)</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        className="hidden"
        aria-label={`Upload ${alt}`}
      />
    </div>
  )
}

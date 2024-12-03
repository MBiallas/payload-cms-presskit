'use client'

import React, { useState } from 'react'

interface EditableTextProps {
  text: string
  className?: string
  field: string
  documentId: string
}

export function EditableText({ text, className = '', field, documentId }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(text)
  const [error, setError] = useState<string | null>(null)

  const handleBlur = async () => {
    if (value === text) {
      setIsEditing(false)
      return
    }

    try {
      const response = await fetch(`/api/presskit/${documentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          field,
          value,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update')
      }

      setIsEditing(false)
      setError(null)
      // Optionally refresh the page to show updated data
      window.location.reload()
    } catch (error) {
      console.error('Failed to update:', error)
      setError(error.message)
      setValue(text) // Reset to original on error
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        className={`bg-transparent outline-none border-b border-emerald-400 ${className}`}
        autoFocus
      />
    )
  }

  return (
    <>
      <span
        onClick={() => setIsEditing(true)}
        className={`cursor-pointer hover:bg-emerald-400/10 rounded px-1 ${className}`}
      >
        {value}
      </span>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </>
  )
} 
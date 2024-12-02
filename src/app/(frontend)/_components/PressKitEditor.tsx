'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface PressKitEditorProps {
  initialData: any // Type this properly based on your presskit type
}

export function PressKitEditor({ initialData }: PressKitEditorProps) {
  const [editingField, setEditingField] = useState<string | null>(null)
  const [tempValue, setTempValue] = useState('')

  const handleFieldChange = async (field: string, value: any) => {
    try {
      const response = await fetch('/api/presskit', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      })

      if (!response.ok) throw new Error('Failed to update')
      
      // Refresh the page to show updated data
      window.location.reload()
    } catch (error) {
      console.error('Error updating field:', error)
    }
  }

  const handleJsonFieldChange = async (field: string, jsonString: string) => {
    try {
      const jsonValue = JSON.parse(jsonString)
      await handleFieldChange(field, jsonValue)
    } catch (error) {
      console.error('Invalid JSON:', error)
    }
  }

  return (
    <Dialog open={!!editingField} onOpenChange={() => setEditingField(null)}>
      <DialogContent className="bg-slate-900 text-white">
        <Input
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={() => {
            if (['djInfo', 'bookingAgency', 'socialMedia'].includes(editingField || '')) {
              handleJsonFieldChange(editingField!, tempValue)
            } else {
              handleFieldChange(editingField!, tempValue)
            }
          }}
          className="text-white border-emerald-400/30 focus:border-emerald-400"
        />
      </DialogContent>
    </Dialog>
  )
} 
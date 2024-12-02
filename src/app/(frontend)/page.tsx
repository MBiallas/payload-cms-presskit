import { getPayload } from 'payload'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Edit } from 'lucide-react'
import config from '@payload-config'
import { PressKitEditor } from './_components/PressKitEditor'

export default async function Page() {
  const payload = await getPayload({ config })

  const presskitRes = await payload.find({
    collection: 'presskit',
    draft: true,
    limit: 1,
  })

  const data = presskitRes?.docs?.[0]

  if (!data) {
    return (
      <div className="text-red-500 mb-4">
        No presskit data found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-green-900 p-6">
      <div className="container mx-auto">
        {/* Artist Name Section */}
        <div className="relative mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-400">
            {data.artistName || 'Artist Name'}
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-10 top-2 text-emerald-400"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Image */}
          <Card className="overflow-hidden w-[300px] h-[275px]">
            <img
              src={data.profileImage?.url || '/default-image.png'}
              alt={data.artistName || 'Artist'}
              className="w-full h-full object-cover object-center"
            />
          </Card>

          {/* DJ Info */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">
              DJ INFO
              <Button
                variant="ghost"
                size="icon"
                className="absolute -right-10 top-0 text-emerald-400"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </h2>
            {/* DJ Info Fields */}
            {Object.entries(data.djInfo || {}).map(([key, value]) => (
              <div key={key} className="flex gap-2 text-white">
                <span className="font-bold">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client-side editor component */}
        <PressKitEditor initialData={data} />
      </div>
    </div>
  )
}

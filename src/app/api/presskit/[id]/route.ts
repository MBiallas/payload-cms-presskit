import { getPayload } from 'payload'
import { NextResponse } from 'next/server'
import config from "/Users/michi/Documents/GitHub/Private/MPK/payload-cms-presskit/src/payload.config"

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = await params.id

  try {
    const { field, value } = await request.json()
    const payload = await getPayload({ config })

    // Handle nested fields (e.g., djInfo.contactName)
    let updateData = {}
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      updateData = {
        [parent]: {
          ...(await payload.findByID({
            collection: 'presskit',
            id,
          }))?.[parent],
          [child]: value
        }
      }
    } else {
      updateData = { [field]: value }
    }

    const result = await payload.update({
      collection: 'presskit',
      id,
      data: updateData,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error updating presskit:', error)
    return NextResponse.json(
      { error: 'Failed to update presskit', details: error.message },
      { status: 500 }
    )
  }
} 
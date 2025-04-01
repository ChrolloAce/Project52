import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Enable CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    // Handle OPTIONS request for CORS preflight
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { headers })
    }

    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400, headers }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400, headers }
      )
    }

    // Send to Make.com webhook
    const webhookResponse = await fetch(process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: 'project52_website',
      }),
    })

    if (!webhookResponse.ok) {
      throw new Error(`Webhook error: ${webhookResponse.status}`)
    }

    return NextResponse.json(
      { success: true, message: 'Subscription successful' },
      { status: 200, headers }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    )
  }
} 
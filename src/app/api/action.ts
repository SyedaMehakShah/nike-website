import { NextResponse } from "next/server"
import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Function to generate a unique order ID
function generateOrderId(email: string): string {
  const timestamp = new Date().getTime()
  return `${email}-${timestamp}`
}

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const formData = await req.json()
      const orderId = generateOrderId(formData.email)

      // Check if an order with this ID already exists
      const existingOrder = await client.fetch(`*[_type == "order" && orderId == $orderId][0]`, { orderId })

      if (existingOrder) {
        return NextResponse.json({ success: false, error: "Order already submitted" }, { status: 409 })
      }

      // Create a new document in Sanity
      const result = await client.create({
        _type: "order",
        orderId,
        ...formData,
        createdAt: new Date().toISOString(),
      })

      return NextResponse.json({ success: true, orderId: result._id })
    } catch (error) {
      console.error("Error submitting to Sanity:", error)
      return NextResponse.json({ success: false, error: "Failed to submit order" }, { status: 500 })
    }
  } else {
    return NextResponse.json({ success: false, error: "Method not allowed" }, { status: 405 })
  }
}



"use server"

import { client } from "@/sanity/lib/client"
import { v4 as uuidv4 } from "uuid"

interface OrderData {
  cartItems: { _id: string; quantity: number; price: number }[];
  total: number;
  [key: string]: string | number | { _id: string; quantity: number; price: number }[];
}

export async function createOrder(orderData: OrderData) {
  console.log("Creating order with data:", orderData)

  const { cartItems, total, ...customerData } = orderData

  const order = {
    _type: "order",
    orderId: uuidv4(),
    ...customerData,
    cartItems: cartItems.map((item) => ({
      _type: "cartItem",
      product: {
        _type: "reference",
        _ref: item._id,
      },
      quantity: item.quantity,
      price: item.price,
    })),
    total: total,
    status: "pending",
    createdAt: new Date().toISOString(),
  }

  try {
    console.log("Attempting to create order in Sanity:", order)
    const result = await client.create(order)
    console.log("Order created in Sanity:", result)

    if (!result || !result._id) {
      throw new Error("Invalid response from Sanity")
    }
    return result
  } catch (error) {
    console.error("Error creating order:", error)
    throw new Error("Failed to create order: " + (error instanceof Error ? error.message : String(error)))
  }
}


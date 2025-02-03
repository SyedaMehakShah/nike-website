
"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { urlFor } from "../../sanity/lib/image"
import { getCart } from "../actions/cartActions"
import { createOrder } from "../actions/orderActions"
import type React from "react" // Added import for React

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    location: "",
    stateTerritory: "",
    country: "",
    email: "",
    phoneNumber: "",
    pan: "",
    consent: false,
  })
  interface CartItem {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    image: string | null;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function fetchCart() {
      try {
        const items = await getCart()
        setCartItems(items)
        setTotal(items.reduce((sum, item) => sum + item.price * item.quantity, 0))
      } catch (error) {
        console.error("Error fetching cart:", error)
        setError("Failed to load cart items. Please try again.")
      }
    }
    fetchCart()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      console.log("Submitting order with data:", { ...formData, cartItems, total })
      const order = await createOrder({ ...formData, cartItems, total, consent: formData.consent ? "true" : "false" })
      console.log("Order created:", order)

      if (order && order._id) {
        console.log("Redirecting to order confirmation")
        router.push(`/order-confirmation/${order._id}`)
      } else {
        throw new Error("Invalid order response")
      }
    } catch (error) {
      console.error("Error creating order:", error)
      setError(
        "Failed to create order. Please try again. Error: " + (error instanceof Error ? error.message : String(error)),
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (error) {
    return <div className="text-red-500 text-center mt-8">{error}</div>
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-8 gap-12">
        {/* Left Section (Full Width on Small Screens, 5/8 width on large) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 border rounded-md">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Enter your name and address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="border p-2 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="border p-2 rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  placeholder="Address Line 1"
                  className="border p-2 w-full rounded-md"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">We don’t ship to P.O. boxes</p>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Address Line 2"
                  className="border p-2 w-full mt-2 rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Postal Code"
                  className="border p-2 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  className="border p-2 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="stateTerritory"
                  value={formData.stateTerritory}
                  onChange={handleInputChange}
                  placeholder="State/Territory"
                  className="border p-2 rounded-md"
                  required
                />
              </div>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="border p-2 w-full mt-2 rounded-md"
                required
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">What’s your contact information?</h2>
              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="border p-2 w-full rounded-md"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">A confirmation email will be sent after checkout</p>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="border p-2 w-full mt-2 rounded-md"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">A carrier might contact you to confirm delivery</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">What’s your PAN?</h2>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleInputChange}
                placeholder="PAN"
                className="border p-2 w-full mt-2 rounded-md"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter your PAN to enable payment with UPI, Net Banking, or local card methods
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="border"
                  required
                />
                <label htmlFor="consent" className="text-gray-600">
                  I have read and consent to eShopWorld processing my information in accordance with the Privacy
                  Statement and Cookie Policy.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-md w-full mt-4 hover:bg-gray-800 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>

          {/* Section Headers */}
          {["Delivery", "Shipping", "Billing", "Payment"].map((section) => (
            <div key={section} className="border-t pt-4">
              <h2 className="text-lg font-semibold text-[#757575]">{section}</h2>
            </div>
          ))}
        </div>

        {/* Right Section (Full Width on Small Screens, 3/8 width on large) */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white p-6 border rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              (The total reflects the price of your order, including all duties and taxes)
            </p>
          </div>

          <div className="bg-white p-6 border rounded-md">
            <h2 className="text-md font-semibold text-gray-800">Estimated Delivery: 7-14 business days</h2>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center mt-4">
                <Image
                  src={item.image ? urlFor(item.image).width(100).height(100).url() : "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">{item.name}</p>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-gray-800 font-semibold">₹ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}




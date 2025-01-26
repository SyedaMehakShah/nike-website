

import { getCart } from "../actions/cartActions"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"


// interface Product {
//   _id: string;
//   productName: string;
//   _type: string;
//   image: string | null; 
//   price: number;
//   category: string | string[];
//   description: string;
// }
export default async function CartPage() {
  const cartItems = await getCart()

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id} className="flex items-center gap-4 mb-4">
              {item.image ? (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.productName}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
              ) : (
                <div className="w-[100px] h-[100px] bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">No image</span>
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold">{item.productName}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-xl font-bold">
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </p>
    </div>
  )
}


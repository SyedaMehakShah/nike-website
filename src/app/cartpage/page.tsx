
"use client";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 lg:col-span-7 space-y-8">
          <h2 className="text-2xl font-bold mb-6">Bag</h2>
          {cart.length > 0 ? (
            cart.map((product) => (
              <div
                key={product.id}
                className="border-b border-gray-300 pb-6 mb-6 flex flex-wrap"
              >
                <img
                  src={product.image.src}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 ml-6">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-[#757575] mt-2">{product.category}</p>
                  <p className="text-[#757575] mt-2">Price: {product.price}</p>
                  <p className="text-[#757575] mt-2">
                    Quantity: {product.quantity}
                  </p>
                  <button
                    className="mt-4 text-red-500 hover:underline"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="col-span-12 sm:col-span-12 lg:col-span-4">
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
          
              <p className="text-gray-600">
  Subtotal: ₹ {isNaN(getTotalPrice()) ? "Invalid Price" : getTotalPrice().toLocaleString("en-IN")}
</p>
              <button className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                Checkout
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}



"use client";
// components/cartbutton.tsx
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

interface AddToCartButtonProps {
  addToCart: (productId: string) => Promise<void>; // Accepts productId as an argument
  productId: string;
}
// Removed unused ButtonProps interface


interface AddToCartButtonProps {

  variant: string;

  size: string;

  onClick: () => Promise<void>;

  disabled: boolean;

  children?: React.ReactNode;

}

export default function AddToCartButton({
  addToCart,
  productId,
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(productId).finally(() => setIsAdding(false)); // Pass productId to addToCart
  };

  return (
    <button
      className="bg-black text-white py-3 px-6 rounded-full flex items-center gap-2 hover:bg-gray-800 disabled:bg-gray-400"
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      <HiOutlineShoppingCart className="text-lg" />
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}


"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { StaticImageData } from "next/image";
import { products as originalProducts } from "@/components/productData";
import { useCart } from "@/app/context/CartContext";

const products = originalProducts.map((product) => ({
  ...product,
  quantity: 1,
  image: {
    src: product.image.src.toString(), // Convert to string
    alt: product.name,
  },
  price: Number(product.price), // Ensure price is a number
}));

interface Image {
  src: string; // Updated to string
  alt: string;
}

interface Product {
  id: number;
  image: Image;
  name: string;
  category: string;
  price: number;
  description: string;
  quantity: number;
}

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBackClick={handleBackClick}
        />
      ) : (
        <ProductList onProductClick={handleProductClick} />
      )}
    </div>
  );
}

function ProductList({
  onProductClick,
}: {
  onProductClick: (product: Product) => void;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <p className="font-semibold text-lg sm:text-xl">New (500)</p>
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button className="text-sm sm:text-base">Hide Filters</button>
          <button className="text-sm sm:text-base">Sort By</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <p className="font-semibold text-xl mb-4">Categories</p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>Shoes</p>
            <p>Sport Bras</p>
            <p>Tops & T-Shirts</p>
            <p>Jackets</p>
            <p>Trousers & Tights</p>
            <p>Shorts</p>
            <p>Tracksuits</p>
            <p>Jumpsuits & Rompers</p>
            <p>Skirts & Dresses</p>
            <p>Socks</p>
            <p>Accessories & Equipment</p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <div
                key={product.id}
                className="bg-white shadow-sm p-4 rounded-lg flex flex-col items-center cursor-pointer"
                onClick={() => onProductClick(product)}
                >
                <Image
                  src={product.image.src}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-md"
                />
                <div className="mt-2 text-center">
                  <p className="text-sm font-semibold text-[#111111]">
                  {product.name}
                  </p>
                  <p className="text-xs text-[#757575]">{product.category}</p>
                  <p className="text-sm font-semibold">${Number(product.price).toFixed(2)}</p>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetail({
  product,
  onBackClick,
}: {
  product: Product;
  onBackClick: () => void;
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      image: {
        ...product.image,
        src: product.image.src.toString(), // Convert StaticImageData to string
      },
    };
    addToCart(cartItem);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={onBackClick}
      >
        &larr; Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
          src={product.image.src}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold text-[#111111] mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-[#757575] mb-4">
            Category: {product.category}
          </p>
          <p className="text-xl font-semibold mb-4">Price: {product.price}</p>
          <p className="text-sm sm:text-base lg:text-lg text-[#111111] leading-relaxed">
            {product.description}
          </p>
          <Link href="/cartpage">
            <button
              className="bg-black text-white py-3 px-6 rounded-full flex items-center gap-2 hover:bg-gray-800 mt-3"
              onClick={handleAddToCart}
            >
              <HiOutlineShoppingCart className="text-lg" />
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    _id: string | number;  
    productName: string;
    image: string | null;
    description: string;
    price: number;
    category: string[] | string;  
    slug: {
        current: string;
    };
  }

const allProduct = `*[_type == "product"]`;

const Shoes = () => {
const [products, setProducts] = useState<Product[]>([]);
// const { addToCart } = useCart();

useEffect(() => {
    async function fetchProducts() {
        const fetchProducts :Product[] = await client.fetch(allProduct);
        setProducts(fetchProducts);
    }
    fetchProducts();
}, []);



return (
    
   <div>
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <p className="font-semibold text-lg sm:text-xl">All Products ({products.length})</p>
              </div>
        
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <aside className="lg:col-span-1">
                  <h2 className="font-semibold text-xl mb-4">Categories</h2>
                  <ul className="space-y-2">
                    {["Shoes", "Sport Bras", "Tops & T-Shirts", "Jackets", "Trousers & Tights"].map((category) => (
                      <li key={category}>{category}</li>
                    ))}
                  </ul>
                </aside>
        
                <div className="lg:col-span-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <div
                        key={product._id}
                        className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md cursor-pointer"
                       
                      >
                        <Link href={`/product/${product.slug.current}`}>
                        {product.image && (
                          <Image
                            src={urlFor(product.image).url()}
                            alt={product.productName}
                            width={200}
                            height={200}
                            className="object-cover rounded-md"
                          />
                        )}
                        <div className="mt-2 text-center">
                          <p className="text-sm font-semibold">{product.productName}</p>
                          <p className="text-xs text-gray-500">
                            {Array.isArray(product.category) ? product.category.join(", ") : product.category}
                          </p>
                          <p className="text-sm font-semibold">${product.price.toFixed(2)}</p>
                        </div>

                        </Link>
    
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
);
}

export default Shoes;
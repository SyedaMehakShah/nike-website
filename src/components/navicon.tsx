
"use client"

import { useState, useEffect, useRef } from "react"
import { IoMdSearch } from "react-icons/io"
import { AiOutlineShopping } from "react-icons/ai"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { useRouter } from "next/navigation"

interface Product {
  _id: string | number
  productName: string
  category: string[] | string
  categoriestypes: string[] | string
  slug: {
    current: string
  }
}

export default function Navicon() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        searchProducts(searchTerm)
      } else {
        setSearchResults([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const searchProducts = async (term: string) => {
    const query = `*[_type == "product" && (productName match $term || category match $term || categoriestypes match $term)]{
      _id,
      productName,
      category,
      categoriestypes,
      "slug": slug.current
    }`
    const params = { term: `*${term}*` }

    try {
      const results = await client.fetch(query, params)
      setSearchResults(results)
    } catch (error) {
      console.error("Error searching products:", error)
    }
  }

  const handleSearchSelect = (slug: string) => {
    setIsSearchFocused(false)
    setSearchTerm("")
    router.push(`/product/${slug}`)
  }

  return (
    <div className="flex items-center space-x-2 md:space-x-4 m-4 md:m-9">
      {/* Search Bar */}
      <div ref={searchRef} className="relative">
        <div className="rounded-lg border h-10 bg-[#F5F5F5] flex items-center px-3 w-20 sm:w-28 md:w-48">
          <IoMdSearch className="text-lg sm:text-xl text-black cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F5F5F5] text-black w-full outline-none px-2 text-xs sm:text-sm"
            onFocus={() => setIsSearchFocused(true)}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        {isSearchFocused && searchResults.length > 0 && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {searchResults.map((product) => (
              <div
                key={product._id}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSearchSelect(product.slug.current)}
              >
                {product.productName}
                <span className="text-xs text-gray-500 ml-2">
                  {Array.isArray(product.category) ? product.category.join(", ") : product.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Icons */}
      <div className="flex gap-2 sm:gap-3">
        <Link href="/cartpage">
          <AiOutlineShopping className="text-lg sm:text-xl md:text-2xl" />
        </Link>
      </div>
    </div>
  )
}


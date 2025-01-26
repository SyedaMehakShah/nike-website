// "use server"

// import { cookies } from "next/headers"

// interface CartItem {
//   _id: string
//   productName: string
//   price: number
//   quantity: number
//   image: string
// }

// export async function addToCart(product: CartItem) {
//   const cartCookie = await cookies().then(c => c.get("cart"))
//   const cart: CartItem[] = cartCookie ? JSON.parse(cartCookie.value) : []

//   const existingItemIndex = cart.findIndex((item) => item._id === product._id)

//   if (existingItemIndex > -1) {
//     cart[existingItemIndex].quantity += 1
//   } else {
//     cart.push({ ...product, quantity: 1 })
//   }

//   const cookieStore = await cookies();
//   cookieStore.set("cart", JSON.stringify(cart));

//   return { success: true, message: "Item added to cart" }
// }

// export async function getCart(): Promise<CartItem[]> {
//   const cartCookie = await cookies().then(c => c.get("cart"))
//   return cartCookie ? JSON.parse(cartCookie.value) : []
// }

// "use server"

// import { cookies } from "next/headers"
// import { revalidatePath } from "next/cache"

// interface CartItem {
//   _id: string
//   productName: string
//   price: number
//   quantity: number
//   image: string
// }

// export async function addToCart(product: CartItem) {
//   const cartCookie = await cookies().then(c => c.get("cart"))
//   const cart: CartItem[] = cartCookie ? JSON.parse(cartCookie.value) : []

//   const existingItemIndex = cart.findIndex((item) => item._id === product._id)

//   if (existingItemIndex > -1) {
//     cart[existingItemIndex].quantity += 1
//   } else {
//     cart.push({ ...product, quantity: 1 })
//   }

//   await cookies().then(c => c.set("cart", JSON.stringify(cart)))
//   revalidatePath("/cart")

//   return { success: true, message: "Item added to cart" }
// }

// export async function getCart(): Promise<CartItem[]> {
//   const cookieStore = await cookies();
//   const cartCookie = cookieStore.get("cart");
//   return cartCookie ? JSON.parse(cartCookie.value) : [];
// }


"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

interface CartItem {
  _id: string
  productName: string
  price: number
  quantity: number
  image: string
}

export async function addToCart(product: CartItem) {
  const cartCookie = await cookies().then(c => c.get("cart"))
  const cart: CartItem[] = cartCookie ? JSON.parse(cartCookie.value) : []

  const existingItemIndex = cart.findIndex((item) => item._id === product._id)

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  await cookies().then(c => c.set("cart", JSON.stringify(cart)))
  revalidatePath("/cart")

  return { success: true, message: "Item added to cart" }
}

export async function getCart(): Promise<CartItem[]> {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart");
  return cartCookie ? JSON.parse(cartCookie.value) : []
}



// // "use client";

// // import React, { createContext, useContext, useState, useEffect } from "react";

// // interface Product {
// //   _id: string;
// //   productName: string;
// //   image: any;
// //   description: string;
// //   price: number;
// //   category: string[] | string;
// // }

// // interface CartContextType {
// //   cart: Product[];
// //   addToCart: (product: Product) => void;
// //   removeFromCart: (id: string) => void;
// //   getTotalPrice: () => number;
// // }

// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // export const CartProvider = ({ children }: { children: React.ReactNode }) => {
// //   const [cart, setCart] = useState<Product[]>([]);

// //   // Load cart from localStorage when the component mounts
// //   useEffect(() => {
// //     const storedCart = localStorage.getItem("cart");
// //     if (storedCart) {
// //       setCart(JSON.parse(storedCart));
// //     }
// //   }, []);

// //   // Save cart to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   const addToCart = (product: Product) => {
// //     setCart((prevCart) => [...prevCart, product]);
// //   };

// //   const removeFromCart = (id: string) => {
// //     setCart((prevCart) => prevCart.filter((item) => item._id !== id));
// //   };

// //   const getTotalPrice = () => {
// //     return cart.reduce((total, item) => total + item.price, 0);
// //   };

// //   return (
// //     <CartContext.Provider
// //       value={{ cart, addToCart, removeFromCart, getTotalPrice }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error("useCart must be used within a CartProvider");
// //   }
// //   return context;
// // };


// "use client";

// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   _id: string;
//   productName: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (product: CartItem) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (product: CartItem) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item._id === product._id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
  id: string;
  price: number;
  imageUrl: string;
  quantity: number;
  slug: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  updateItemQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
      } catch {
        console.error("Failed to parse cart from localStorage");
        return [];
      }
    }
    return [];
  });

  // Persist cart items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch {
      console.error("Failed to save cart to localStorage");
    }
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.slug === item.slug);
      if (existingItem) {
        return prevItems.map((i) =>
          i.slug === item.slug
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (slug: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  };

  const updateItemQuantity = (slug: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

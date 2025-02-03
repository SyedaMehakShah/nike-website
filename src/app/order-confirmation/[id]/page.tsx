// import { client } from "@/sanity/lib/client"
// // order-confirmation/[id]/page.tsx
// interface Params {
//   id: string;
// }

// interface Order {
//   orderId: string;
//   total: number;
//   status: string;
//   cartItems: CartItem[];
// }

// interface CartItem {
//   product: {
//     name: string;
//   };
//   quantity: number;
//   price: number;
// }

// export default async function OrderConfirmationPage({ params }: { params: Params }) {
//   const order: Order = await client.fetch(`*[_type == "order" && _id == $id][0]`, { id: params.id })

//   if (!order) {
//     return <div>Order not found</div>
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-4">
//       <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
//       <p className="text-xl mb-4">Thank you for your order!</p>
//       <p className="mb-2">Order ID: {order.orderId}</p>
//       <p className="mb-2">Total: ₹{order.total.toFixed(2)}</p>
//       <p className="mb-2">Status: {order.status}</p>
//       <h2 className="text-2xl font-semibold mt-6 mb-4">Order Details</h2>
//       <ul className="space-y-4">
//         {order.cartItems.map((item, index) => (
//           <li key={index} className="border-b pb-2">
//             <p className="font-semibold">{item.product.name}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Price: ₹{item.price.toFixed(2)}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default async function OrderConfirmationPage( ){
  return ( 
    <div className="bold text-3xl font-black">Thank to order </div>
  )
}
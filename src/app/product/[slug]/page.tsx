
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { groq } from "next-sanity";
import Link from "next/link";
import AddToCartButton from "@/components/cartbutton";
import { addToCart } from "@/app/actions/cartActions";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

interface Product {
  _id: string;
  productName: string;
  _type: string;
  image: string | null; // Allow image to be null
  price: number;
  category: string | string[];
  description: string;
}

async function getProduct(slug: string): Promise<Product> {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      category,
      description,
      "image": image.asset->url, // Fetch image URL correctly
      price,
    }`,
    { slug }
  );

  // Ensure image is a valid URL or null
  if (!product.image || product.image === "") {
    product.image = null;
  }

  return product;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  async function handleAddToCart() {
    "use server";
    await addToCart({
      _id: product._id,
      productName: product.productName,
      price: product.price,
      image: product.image || "/placeholder.svg", // Fallback to placeholder if image is null
      quantity: 1,
    });
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
          src={product.image || "/placeholder.svg"} // Fallback to placeholder if image is null
          alt={product.productName}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
          <p className="text-lg text-gray-600 mb-4">
            Category:{" "}
            {Array.isArray(product.category)
              ? product.category.join(", ")
              : product.category}
          </p>
          <p className="text-xl font-semibold mb-4">
            Price: ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            {product.description}
          </p>
          <Link href="/cartpage">
          <AddToCartButton
            productId={product._id}
            addToCart={handleAddToCart}
          />
          </Link>
        </div>
      </div>
         
    </div>
  );
}

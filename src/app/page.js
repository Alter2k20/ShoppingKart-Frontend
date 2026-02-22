"use client"
import { useEffect, useState } from "react"; 
import { getProducts } from "@/lib/api/product";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await getProducts();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="grid place-items-center p-4 font-sans overflow-y-scroll">
      <main>
            {data ? (
      data.map((product, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow-md w-72"
        >
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-gray-500">{product.description}</p>

          <p className="mt-2">
            <span className="line-through text-red-500">
              ₹{product.price}
            </span>{" "}
            <span className="text-green-600 font-semibold">
              ₹{product.discount_price}
            </span>
          </p>

          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <p>
            Stock:{" "}
            {product.stock ? product.stock : "Out of stock"}
          </p>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
      </main>
    </div>
  );
}

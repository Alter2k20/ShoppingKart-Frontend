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
    <div className="grid place-items-center p-4 font-sans">
      <main>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}

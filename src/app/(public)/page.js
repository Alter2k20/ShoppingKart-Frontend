"use client"
import { useEffect, useState } from "react"; 
import { getProducts } from "@/lib/api/product";

import Card from "@/components/general/Card";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await getProducts();
        console.log(result);
        setData(result);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className=" grid grid-cols-4 place-items-center p-4 font-sans overflow-y-scroll gap-2">
      {/* <main> */}
            {data ? (
      data.map((product, index) => (
        <Card key={index} product={product} />
      ))
    ) : (
      <p>Loading...</p>
    )}
      {/* </main> */}
    </div>
  );
}

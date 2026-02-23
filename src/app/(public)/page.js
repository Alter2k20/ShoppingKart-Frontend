"use client"
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api/product";

import Link from "next/link";

import Card from "@/components/general/Card";

import category from "@/lib/dummy/static.json";


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
    <div>
      <div className="flex w-screen p-4 gap-2 ">
        {
          category.map((type, index) => (
            <Link key={index} href={`/Product/Category/${type.id}`} >
            <div className=" button duration-500 text-center p-4 border rounded h-fit w-fit"> {type.name} </div>
            </Link>
          ))
        }
      </div>
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
    </div>
  );
}

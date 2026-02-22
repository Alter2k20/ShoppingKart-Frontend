"use client"

import Link from "next/link"

export default function Card({ product }) {

    return (
        <Link href={`/Product/${product.id}`}>
        <div 
            //   key={key}
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
            </Link>

        )
}
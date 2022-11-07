/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

export default function ProductItem({ product, addToCartHandler }) {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button w-full"
          onClick={() => {
            addToCartHandler(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

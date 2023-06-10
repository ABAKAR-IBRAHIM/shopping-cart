import React, { useContext } from "react";
import ProductModel from "../lib/product_type";
import ReactStars from "react-stars";
import AddToCart from "./addtocart";
import { SkeletonCard } from "./skeleton";

export default function Productdetails({ product }: { product: ProductModel }) {
  if (!product) {
    return (
      <div className=" p-16">
        <SkeletonCard />;
      </div>
    );
  }
  return (
    <div>
      <div className="  p-8 pt-16 ">
        <h3 className=" font-bold items-center  ">{product && product.name}</h3>
        <h3 className="  text-gray-900 font-serif text-sm pt-2">
          {product && product.discription}
        </h3>
        <div className="self-center pt-2">
          <ReactStars
            count={5}
            size={14}
            color2={"#2cb978"}
            edit={false}
            color1={"#2cb978"}
          />
        </div>
        <h3 className=" pt-2 font-semibold">{`$${
          product && product.price
        } Or $${Math.round(product && product.price * 0.1).toFixed(
          2
        )}/month`}</h3>
      </div>
      <AddToCart product={product} />
      <div className="p-8">
        <div className="  bg-green-900 hover:bg-green-800 max-w-[150px]    font-semibold text-white py-2 px-4 pr-4  border border-gray-900 hover:border-transparent rounded-full  ">
          Add to Cart
        </div>
      </div>
    </div>
  );
}

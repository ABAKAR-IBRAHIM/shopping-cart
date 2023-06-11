"use client";

import React, { useState } from "react";
import Image from "next/image";

import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Link from "next/link";
import ProductModel from "../lib/product_type";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../Redux/feature/cart/cartSlice";
export default function Page() {
  const [counter, setCounter] = useState(1);
  const items = useSelector((state: RootState) => state.cart.items);
  const count = useSelector((state: RootState) => state.cart.totalQuantity);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();
  function increment(product: ProductModel) {
    dispatch(incrementQuantity({ product }));
  }
  function decrement(product: ProductModel) {
    dispatch(decrementQuantity({ product }));
  }

  if (items.length == 0)
    return (
      <div className="flex justify-center flex-col">
        <div className=" text-center  md: pt-56">Your basket is empty</div>
        <Link
          className=" text-center  text-red-500 font-bold text-lg p-4   "
          href={"/shop"}
        >
          Shop Now
        </Link>
      </div>
    );
  return (
    <div className="p-44 grid md:grid-cols-3 bg-slate-100/95  gap-4 ">
      <div className="   justify-between  col-span-2">
        {items &&
          items.map((product) => (
            <div
              key={product._id}
              className=" md:flex  border-b-2  border-gray-400  "
            >
              <div className="flex">
                <div className=" items-center h-full">
                  <div className="flex items-center">
                    <Image
                      src={product.imageSrc}
                      width={280}
                      height={300}
                      alt={product.name}
                      className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 "
                    />
                    <div>
                      <div className="  p-8 pt-16 ">
                        <h3 className=" font-bold items-center  ">
                          {product.name}
                        </h3>
                        <h3 className="  text-gray-900 font-serif text-sm pt-2">
                          {product.discription}
                        </h3>

                        <h3 className=" pt-2 font-semibold">{`$${
                          product.totalPrice
                        } Or $${Math.round(product.price * 0.1).toFixed(
                          2
                        )}/month`}</h3>
                        <div className="self-center p-8  pt-4 font-bold text-lg text-red-600 ">
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div className="  flex items-center justify-between mt-6 cursor-pointer">
                  <div className="p-2" onClick={() => increment(product)}>
                    <HiOutlinePlusSm style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="">{product.quantity}</div>
                  <div onClick={() => decrement(product)} className="p-2">
                    <HiMinusSm style={{ fontSize: "1.5rem" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className=" h-[300px]   sticky  top-20  p-4  bg-white shadow-md">
        <div className="   text-center text-lg font-sans">Order Summary</div>
        <div className="  text-lg  md: text-center  font-sans pt-2 pb-9">
          {`  Subtotal (${count} items): $${totalAmount.toFixed(2)}`}
        </div>
        <div className=" text-center  w-full   bg-yellow-300  font-semibold text-black py-2 px-4 border  hover:border-transparent rounded-full    bottom-3     ">
          proceed to checkout
        </div>
      </div>
    </div>
  );
}

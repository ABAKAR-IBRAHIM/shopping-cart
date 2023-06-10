"use client";

import React, { useState } from "react";
import Image from "next/image";

import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Link from "next/link";
export default function Page() {
  const [counter, setCounter] = useState(1);
  const items = useSelector((state: RootState) => state.cart.items);

  function increment() {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
    }
  }
  function decrement() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  }

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value);
    }
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
                          product.price
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
                  <div className="p-2" onClick={increment}>
                    <HiOutlinePlusSm style={{ fontSize: "1.5rem" }} />
                  </div>
                  <input
                    className="   py-2 mx-1 sm:mx-6    bg-white border-gray-400  "
                    type="number"
                    min={1}
                    max={10}
                    value={product.quantity}
                    onChange={onInputNumberChangeHandler}
                  />{" "}
                  <div onClick={decrement} className="p-2">
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
          OSubtotal (15 items): $728.92
        </div>
        <div className=" text-center  w-full   bg-yellow-300  font-semibold text-black py-2 px-4 border  hover:border-transparent rounded-full    bottom-3     ">
          proceed to checkout
        </div>
      </div>
    </div>
  );
}

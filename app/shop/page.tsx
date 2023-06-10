"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactStars from "react-stars";
import axios from "axios";
import type { RootState } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import ProductModel from "../lib/product_type";
import { SkeletonCard } from "../components/skeleton";
export default function Page() {
  const [products, setProduct] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("api/get_home_poducts").then((res) => {
      setProduct(res.data.products);
      setLoading(false);
      console.log(res.data.products[0].images[0]);
    });
  }, []);
  if (loading) {
    return (
      <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 p-[90px]">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-3 my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl flex relative"
            >
              <SkeletonCard />
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 p-[90px]">
      {products &&
        products.map((product) => (
          <div
            key={product._id}
            className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-3 shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl flex relative"
          >
            <Link href={`/shop/${product._id}`}>
              <div className="flex md:items-center md:flex-col relative w-full">
                <div className="w-1/2 md:w-full relative bg-zinc-200 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center">
                  <div className="flex items-center h-full">
                    <Image
                      src={product.imageSrc}
                      width={280}
                      height={300}
                      alt={product.name}
                      className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 "
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between  flex-grow  w-1/2 md:w-full  px-1 md:px-3 py-2 md:py-4">
                  <div className="flex justify-center md:justify-start flex-col  flex-grow overflow-hidden">
                    <div className="self-center">
                      <ReactStars
                        count={5}
                        size={14}
                        color2={"#2cb978"}
                        edit={false}
                        color1={"#2cb978"}
                      />
                    </div>
                    <h3 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute  ">
                      {product.name}
                    </h3>
                    <h3 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute  ">
                      {`$${product.price}`}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

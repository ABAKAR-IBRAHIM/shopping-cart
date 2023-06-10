"use client";
import Image from "next/image";

import React, { useState } from "react";
import ProductModel from "../lib/product_type";
import { SkeletonCard } from "./skeleton";
interface TImage {
  _id: number;
  image: string;
}

interface Props {
  product: ProductModel;
}
const Gallery: React.FC<Props> = ({ product }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  function onClickHandler(index: number) {
    setSelectedImg(index);
  }

  if (!product) {
    return (
      <div className=" p-16">
        <SkeletonCard />;
      </div>
    );
  }
  return (
    <div className="flex items-start rounded-lg w-full md:w-auto">
      <div className="flex flex-col items-center w-full md:w-auto">
        <Image
          src={`${product && product.images[selectedImg].image}`}
          alt="product img"
          width={300}
          height={300}
          className="  object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2   max-w-[300px] max-h-[300px] "
        />

        <div className="flex mt-4  md:p-4 w-full max-w-[350px] overflow-auto">
          {product &&
            product.images.map((imgItem: TImage, index: number) => {
              return (
                <div
                  key={imgItem._id}
                  className={`flex items-center justify-center p-2 md:p-4 rounded-lg  border-none transition-all duration-300 ease-in-out min-w-[80px] ${
                    index === selectedImg
                      ? "border-2 border-slate-300/60 shadow-md bg-palette-card/60"
                      : ""
                  }`}
                  onClick={() => onClickHandler(index)}
                >
                  <Image
                    src={`${imgItem.image}`}
                    width={70}
                    height={70}
                    alt="product img"
                    className="object-contain"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

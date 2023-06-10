"use client";

import React, { useEffect, useState } from "react";
import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";
import ProductModel from "../lib/product_type";

interface Props {
  product: ProductModel;
}
const AddToCart: React.FC<Props> = ({ product }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    return () => {
      setCounter(1);
    };
  }, [product]);

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

  return (
    <div className="flex items-center gap-8 p-4">
      <div className="  flex items-center justify-between mt-6 cursor-pointer">
        <div className="p-2" onClick={increment}>
          <HiOutlinePlusSm style={{ fontSize: "1.5rem" }} />
        </div>
        <input
          className="   py-2 mx-1 sm:mx-6    bg-zinc-100 border-gray-400  "
          type="number"
          min={1}
          max={10}
          value={counter}
          onChange={onInputNumberChangeHandler}
        />{" "}
        <div onClick={decrement} className="p-2">
          <HiMinusSm style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
      <p className=" text-red-500 font-medium">Only 12 items left </p>
    </div>
  );
};

export default AddToCart;

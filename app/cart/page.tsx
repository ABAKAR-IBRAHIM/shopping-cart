"use client";

import React from "react";
import Image from "next/image";

import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Link from "next/link";
import ProductModel from "../lib/types";
import { useDispatch } from "react-redux";
import { removeItem } from "../Redux/feature/cart/cartSlice";
import {
  incrementQuantity,
  decrementQuantity,
} from "../Redux/feature/cart/cartSlice";

import "react-toastify/dist/ReactToastify.css";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "react-toastify";

const stripePromise = loadStripe(process.env.stripe_public_key!);
export default function Page() {
  const items = useSelector((state: RootState) => state.cart.items);
  const count = useSelector((state: RootState) => state.cart.totalQuantity);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();
  function increment(product: ProductModel) {
    dispatch(incrementQuantity({ product }));
  }

  function removeItems(product: ProductModel) {
    dispatch(removeItem({ product }));
  }
  function decrement(product: ProductModel) {
    dispatch(decrementQuantity({ product }));
  }

  const Order = async () => {
    const stripe = await stripePromise;
    const checkoutSession: any = await axios.post("/api/checkout_sessions", {
      items: items,
      email: "abakar@gmail.com",
    });

    console.log(`checkoutSession ${checkoutSession.data.id}`);
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) {
      toast.error(result?.error.message);
    }
  };

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
                        <div
                          onClick={() => removeItems(product)}
                          className="self-center p-8  pt-4 font-bold text-lg text-red-600 "
                        >
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
        <div
          onClick={Order}
          className=" text-center  w-full   bg-yellow-300  font-semibold text-black py-2 px-4 border  hover:border-transparent rounded-full    bottom-3     "
        >
          proceed to checkout
        </div>
      </div>
    </div>
  );
}

const data = {
  items: [
    {
      name: "Laptop Sleeve 14",
      imageSrc:
        "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686096179/home%20products/81On3MEFDRL._AC_SX679_-removebg-preview_jtvz4b.png",
      discription:
        "This laptop bag features a high-quality padded outer shell with a cushioned design",
      price: 39.99,
      rating: 4.7,
      review: 24,
      quantity: 2,
      images: [
        {
          image:
            "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686077445/home%20products/63e8c4e61eb4ad4af6e75689_macbook_13-min_rziwjv.png",
        },
        {
          image:
            "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686077445/home%20products/63e8c4e61eb4ad4af6e75689_macbook_13-min_rziwjv.png",
        },
        {
          image:
            "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686077445/home%20products/63e8c4e61eb4ad4af6e75689_macbook_13-min_rziwjv.png",
        },
        {
          name: "AirPods Max",
          imageSrc:
            "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686097997/home%20products/media_result_20230606_cbc50b1a-306b-484e-90e8-15595394e5f5_r8hb7a.png",
          discription:
            "NOISE CANCELLING WIRELESS HEADPHONES: The perfect balance of quiet, comfort, and sound",
          price: 279.0,
          rating: 4.8,
          review: 453,
          quantity: 2,
          images: [
            {
              image:
                "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686077445/home%20products/63e8c4e61eb4ad4af6e75689_macbook_13-min_rziwjv.png",
            },
            {
              image:
                "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686077445/home%20products/63e8c4e61eb4ad4af6e75689_macbook_13-min_rziwjv.png",
            },
            {
              image:
                "https://res.cloudinary.com/djyb0n6nq/image/upload/v1686077445/home%20products/63e8c4e61eb4ad4af6e75689_macbook_13-min_rziwjv.png",
            },
          ],
        },
      ],
    },
  ],
};

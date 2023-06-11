"use client";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
import ProductModel from "./lib/product_type";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SkeletonCard } from "./components/skeleton";

import { addItemToCart, removeItem } from "./Redux/feature/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const [products, setProduct] = useState<ProductModel[]>([]);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  function addToCartHandler(product: ProductModel) {
    dispatch(addItemToCart({ product: product, quantity: 1 }));
    toast.success("product.name", {
      theme: "light",
    });
  }

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
    <>
      <div className="p-[70px]">
        <div className="  h-[320px] relative">
          <Image src="/hero.webp" alt="hero  image" fill={true} />
          <div className=" absolute  w-80   font-bold  text-2xl  p-2 tex m-auto left-0 right-0  backdrop-filter backdrop-blur-[23px] bg-palette-card/60">
            Pay in your local currency and shop with confident
          </div>
          <Link href={"/shop"}>
            <div className="   bg-zinc-800 hover:bg-green-900   font-semibold text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded-full absolute  bottom-3    left-40 ">
              Shop Now
            </div>
          </Link>
        </div>
        <div className=" p-16  font-bold  text-4xl">
          {"Today's Best Daily Deals"}
        </div>
        <div className="  pt-20 grid  relative grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id}>
              <Image
                className="hover:grow hover:shadow-lg bg-zinc-100 "
                src={product.imageSrc}
                alt={""}
                width={303}
                height={303}
              />

              <div className="flex items-center text-gray-900font-sans pt-1   justify-between pr-16 ">
                <p className="">{product.name}</p>
                <p className=" text-gray-900">{`$${product.price}`}</p>
              </div>

              <p className="pt-1  text-gray-900 font-serif text-sm">{`${product.discription}`}</p>

              <div className="flex items-center">
                <ReactStars
                  count={5}
                  size={14}
                  color2={"#2cb978"}
                  edit={false}
                  color1={"#2cb978"}
                />
                {`(${product.review})`}
              </div>

              <div className="pt-2 ">
                <button
                  onClick={() => addToCartHandler(product)}
                  className="bg-transparent hover:bg-green-900  text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded-full "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" p-16  font-bold  text-4xl">
          Most Selling Products
          <p className=""></p>
        </div>

        <div className="  pt-20 grid  relative grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id}>
              <Image
                className="hover:grow hover:shadow-lg bg-zinc-100 "
                src={product.imageSrc}
                alt={""}
                width={303}
                height={303}
              />

              <div className="flex items-center text-gray-900font-sans pt-1 justify-between pr-16 ">
                <p className="">{product.name}</p>
                <p className=" text-gray-900">{`$${product.price}`}</p>
              </div>

              <p className="pt-1  text-gray-900 font-serif text-sm">{`${product.discription}`}</p>

              <div className="flex items-center">
                <ReactStars
                  count={5}
                  size={14}
                  color2={"#2cb978"}
                  edit={false}
                  color1={"#2cb978"}
                />
                {`(${product.review})`}
              </div>

              <div className="pt-2 ">
                <button className="bg-transparent hover:bg-green-900  text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded-full ">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { TfiMenu } from "react-icons/tfi";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export const TopNavigation = () => {
  const [search, SetSearch] = useState("");
  let [open, setOpen] = useState(false);

  return (
    <div className="  bo z-10 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link href={"/"}>
          <div className="flex items-center gap-1">
            <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={40}
              height={24}
              priority
            />
            <div>ShopCart</div>
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <TfiMenu />}
        </div>
        <div
          className={`sm:pl-1  text-base md:flex md:items-center   pt-3  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-1 transition-all duration-500 ease-in  
          ${open ? "" : "hidden"} `}
        >
          Home
        </div>
        <div
          className={`sm:pl-1 md:flex  text-base  md:items-center   pt-3  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-1 transition-all duration-500 ease-in  
        ${open ? "" : "hidden"} `}
        >
          Shop
        </div>
        <div
          className={`sm:pl-1 md:flex  text-base  md:items-center   pt-3  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-1 transition-all duration-500 ease-in  
        ${open ? "" : "hidden"} `}
        >
          Deals
        </div>

        <div className=" top-5 absolute md:static gap-2  items-center left-36  pt-1  ">
          <div className="flex w-full relative items-center  justify-end">
            <div className=" pr-4 rounded-tr-full rounded-br-full absolute pointer-events-none">
              <BiSearch size={20} />
            </div>
            <input
              placeholder="Search"
              value={search}
              onChange={(event) => SetSearch(event.target.value)}
              className="   text-black  border-zinc-700  placeholder:text-black bg-white border-[1px] 
            rounded-full pl-4  focus:outline-none focus:ring-[1px] focus:ring-sky-500 h-[32px]  lg:min-w-[420px]"
            />
          </div>
        </div>
        <div
          className={`flex  text-base  items-center gap-1  pt-4
         ${open ? "" : "hidden md:flex"}`}
        >
          <MdAccountCircle size={22} />
          <span>Account</span>
        </div>
        <div
          className={`flex  text-base  items-center gap-1  pt-4
         ${open ? "" : "hidden md:flex"}`}
        >
          <LuShoppingCart size={22} />
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const CartQuantity = () => {
  const cartItemQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
    <div className="relative">
      <Link href="/cart">
        <div className="relative flex items-center ltr:md:pl-6 rtl:md:pr-6 rtl:md:border-r-2 rtl:md:border-r-slate-300 ltr:md:border-l-2 ltr:md:border-l-slate-300 z-50">
          <GiShoppingCart size={22} />
          <span className="absolute -top-3 -right-[0.1rem] rtl:md:right-[1rem]  flex items-center justify-center w-5 h-5 rtl:pt-[0.1rem] rounded-full bg-palette-primary text-[0.75rem]  font-bold leading-3 text-red-700 shadow-lg">
            {cartItemQuantity}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CartQuantity;

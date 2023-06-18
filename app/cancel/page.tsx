import Link from "next/link";
import React from "react";
import { FcCancel } from "react-icons/fc";

export default function Page() {
  return (
    <div className="p-[80px]  bg-gray-100   h-screen">
      <main className="max-w-screen-lg  mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div>
            <div className="flex flex-col items-center space-y-2">
              <FcCancel size={60} />

              <h1 className=" text-2xl font-bold">Order cancelled</h1>
              <p>Sory your order has been canceled</p>
              <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <Link href={"/"}>
                  <span className="text-sm font-medium">Home</span>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

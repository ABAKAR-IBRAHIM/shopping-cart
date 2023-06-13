"use clinet";
import { signOut } from "next-auth/react";
import React from "react";

export default function DropDown({ dropdown = false }: { dropdown: boolean }) {
  /// var dropdown = false;
  return (
    <div className="relative ml-3 ">
      <div>
        <button
          type="button"
          className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src="/avatar.svg" alt="" />
        </button>
      </div>

      {/* <!--
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      --> */}
      <div
        onClick={() => signOut()}
        className={` bg-zinc-400 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg transition ease-${
          dropdown ? "out" : "in"
        } duration-${dropdown ? "100" : "75"} transform opacity-${
          dropdown ? "100" : "0"
        } scale-${dropdown ? "100" : "95"}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex={-1}
      >
        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}

        <button
          className="block px-4 py-2 text-sm text-white"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-2"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

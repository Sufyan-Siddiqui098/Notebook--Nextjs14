"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuClick, setIsMenuClick] = useState(false);
  return (
    <div className="w-full bg-[#121212] flex items-center justify-between  px-4 py-4 relative">

         <h2 className="text-[#63c34e] font-semibold text-lg">Notebook</h2>
      {/* Hamburger Icon */}
      <div onClick={() => setIsMenuClick((pre) => !pre)} 
        className={`absolte z-[2] right-1 flex ${isMenuClick ? "" : "flex-col gap-1" } sm:hidden [&>*]:sm:hidden`}>
        <span className={`h-0.5 w-4 bg-white transition ${isMenuClick ? "translate-x-4 rotate-45" : "rotate-0" }`}></span>
        <span className={`h-0.5 w-3 bg-white ${isMenuClick ? "hidden" : ""}`} ></span>
        <span className={`h-0.5 w-4 bg-white transition ${ isMenuClick ? "-rotate-45 origin-center" : "" }`} ></span>
      </div>
      {/* Overlay - bg-[#12121259]*/}
      <div
        onClick={() => setIsMenuClick((pre) => !pre)}
        className={`h-[100vh] w-full z-[1] top-0 left-0 right-0  bg-[#07070775]  absolute ${
          isMenuClick ? "" : "hidden"
        } sm:hidden`}
      ></div>

      {/* Menu - Mobile */}
      <div
        className={`flex flex-col items-center  gap-1 absolute top-full z-10 right-0 transition-[width] min-h-44  shadow-sm bg-[#222222] rounded mt-[1px] py-2 pb-4 ${
          isMenuClick ? "w-[70%]" : "invisible w-0 h-0 [&>*]:hidden"
        } sm:hidden`}
      >
        {/* username */}
        <h3 className="my-2 text-lg text-[#63c34e]">Hi, Adam</h3>
        <div className="flex flex-col gap-1 items-center justify-center">
            <Link href="/about">About</Link>
            <Link href="/profile">Profile</Link>
            <button className="border border-gray-500 text-sm py-1 px-2 rounded">Sign Out</button>
        </div>
      </div>

      {/* Desktop - Midium Screen */}
      <div className="hidden  gap-3 px-2 pr-4 sm:flex items-center">
        <Link className="hover:text-[#63c34e]" href="/about">About</Link>
        <Link className="hover:text-[#63c34e]" href="/profile">Profile</Link>
        <button className="bg-[#63c34e] border-transparent border hover:bg-transparent hover:text-white text-sm hover:border-white rounded text-black px-2 py-1">Sign Out</button>
      </div>

     
    </div>
  );
};

export default Header;

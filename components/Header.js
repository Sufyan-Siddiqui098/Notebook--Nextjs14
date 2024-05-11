"use client";
import { logoutUser } from "@/app/lib/auth/auth";
import { decodeToken } from "@/app/lib/decodeUser";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = ({ token, firstname }) => {
  const pathname = usePathname();
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const response = await logoutUser();
      console.log("logout ", response);
      if (response.success) {
        toast.success(response.message);

        router.push("/login")
        router.refresh();     //To run the middleware for route protection.
      }
    } catch (error) {
      console.log("logout error", error);
      toast.error(error.message);
    }
  };
  const nav = [
    {
      element: (
        <Link
          key={1}
          onClick={() => setIsMenuClick((pre) => !pre)}
          href="/about"
          className={`${
            pathname === "/about" ? "text-[#63c34e]" : ""
          } hover:text-[#63c34e]`}
        >
          About
        </Link>
      ),
    },
    {
      element: (
        <Link
          key={2}
          onClick={() => setIsMenuClick((pre) => !pre)}
          href="/profile"
          className={`${
            pathname === "/profile" ? "text-[#63c34e]" : ""
          } hover:text-[#63c34e]`}
        >
          Profile
        </Link>
      ),
    },
    {
      element: (
        <button
          onClick={logoutHandler}
          key={3}
          className="border bg-transparent text-white text-sm border-white
      rounded hover:text-black px-2 py-1 transition hover:bg-[#63c34e] 
      hover:border-transparent"
        >
          Sign Out
        </button>
      ),
    },
  ];

  const [isMenuClick, setIsMenuClick] = useState(false);
  return (
    <div className="w-full bg-[#121212] flex items-center justify-between  px-5 py-4 relative sm:px-7">
      <Link href="/">
        <h2 className="text-[#63c34e] font-semibold text-lg tracking-wide">
          Notebook
        </h2>
      </Link>
      {/* Hamburger Icon */}
      <div
        onClick={() => setIsMenuClick((pre) => !pre)}
        className={`absolte z-[2] right-1 flex ${
          isMenuClick ? "" : "flex-col gap-1"
        } sm:hidden [&>*]:sm:hidden`}
      >
        <span
          className={`h-0.5 w-4 bg-white transition ${
            isMenuClick ? "translate-x-4 rotate-45" : "rotate-0"
          }`}
        ></span>
        <span
          className={`h-0.5 w-3 bg-white ${isMenuClick ? "hidden" : ""}`}
        ></span>
        <span
          className={`h-0.5 w-4 bg-white transition ${
            isMenuClick ? "-rotate-45 origin-center" : ""
          }`}
        ></span>
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
        <h3 className="my-2 text-lg text-[#63c34e]">
          Hi, {firstname?.toUpperCase() || "USER"}
        </h3>
        <div className="flex flex-col gap-1 items-center justify-center">
          {/* If user logged in */}
          {token && nav.map((item, index) => item.element)}
          {/* User not logged in */}
          {!token && (
            <Link
              onClick={() => setIsMenuClick((pre) => !pre)}
              href="/login"
              className={`my-3 border bg-transparent tracking-wide text-white  border-white
              rounded hover:text-black px-2 py-1 transition hover:bg-[#63c34e] 
              hover:border-transparent`}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Desktop - Midium Screen */}
      <div className="hidden  gap-3 px-2 pr-4 sm:flex items-center">
        {/* If user logged in */}
        {token && nav.map((item) => item.element)}
        {/* User not logged in */}
        {!token && (
          <Link
            onClick={() => setIsMenuClick((pre) => !pre)}
            href="/login"
            className={`border bg-transparent text-white tracking-wide border-white
            rounded hover:text-black px-2 py-1 transition hover:bg-[#63c34e] 
            hover:border-transparent`}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

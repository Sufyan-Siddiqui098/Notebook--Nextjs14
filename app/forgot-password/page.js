"use client";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import React, { useState } from "react";
import { forgotPassword } from "../lib/auth/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    securityKey: "",
    newPassword: "",
  });
  const [pending, setPending] = useState(false);
  const router = useRouter()

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setPending(true);
      const response = await forgotPassword(credentials);
      if (response.success) {
        toast.success(response.message);
        router.push("/login")
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPending(false);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24 px-3">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center items-center gap-2 py-4 w-full max-w-md"
      >
        <h2 className='relative text-white text-2xl font-semibold my-2 mb-8 before:content-[""] before:w-7 before:h-[2.6px] before:bg-[#63c34e] before:absolute before:top-[110%] before:left-0 before:right-0 before:mx-auto before:my-1 before:rounded'>
          Forget Password
        </h2>

        <div className="flex flex-col gap-2 w-full px-2 text-black sm:px-4 ">
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            value={credentials.email}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-gray-700"
            type="email"
            required
            placeholder="Email"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, securityKey: e.target.value })
            }
            value={credentials.securityKey}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-gray-700"
            type="text"
            required
            placeholder="Forget Password Key"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, newPassword: e.target.value })
            }
            value={credentials.newPassword}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-gray-700"
            type="password"
            required
            placeholder="New Password"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-sm gap-[2px] sm:gap-1 mt-3 px-2">
          Remember Your Password ?
          <Link className=" font-semibold text-[#63c34e]" href="/login">
            Login
          </Link>
        </div>

        <SubmitButton text={"Submit"} pending={pending} />
      </form>
    </div>
  );
};

export default ForgotPassword;

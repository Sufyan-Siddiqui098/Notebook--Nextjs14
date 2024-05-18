"use client";
import { loginUser } from "@/app/lib/auth/auth";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [pending, setPending] = useState(false);
  const router = useRouter();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      const response = await loginUser(credentials);
      if (response.success) {
        toast.success(response.message);
        
        router.push('/')
        router.refresh() //refresh the page to activate middleware router protection
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
          Login
        </h2>

        <div className="flex flex-col gap-2 w-full px-2 text-black sm:px-4 ">
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            value={credentials.email}
            className="rounded w-full py-[12px] px-2 text-base"
            type="email"
            required
            placeholder="Email"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            value={credentials.password}
            className="rounded w-full py-[12px] px-2 text-base"
            type="password"
            required
            placeholder="Password"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-sm gap-[2px] sm:gap-1 mt-5 px-2">
          <Link className="hover:underline mr-1" href="/forgot-password">
            Forgot Your Password ?
          </Link>
          <Link className=" font-semibold text-[#63c34e]" href="/register">
            Sign up
          </Link>
        </div>

        <SubmitButton text={"login"} pending={pending}/>
      </form>
    </div>
  );
};

export default LoginPage;

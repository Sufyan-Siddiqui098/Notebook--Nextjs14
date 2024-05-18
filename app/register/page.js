"use client";
import { regisgerUser } from "@/app/lib/auth/auth";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    username: "",
    resetkey: "",
  });

  const [pending, setPending] = useState(false);
  const router = useRouter();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      const response = await regisgerUser(credentials);
      console.log("register handler response ", response);
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
          Sign Up
        </h2>

        <div className="flex flex-col gap-2 w-full px-2 text-black sm:px-4 placeholder:text-slate-950">
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, firstname: e.target.value })
            }
            value={credentials.firstname}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500"
            type="text"
            required
            placeholder="First Name"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, lastname: e.target.value })
            }
            value={credentials.lastname}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500"
            type="text"
            required
            placeholder="Last Name"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            value={credentials.username}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500"
            type="text"
            required
            placeholder="Username"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            value={credentials.email}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500"
            type="email"
            required
            placeholder="Email"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            value={credentials.password}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500"
            type="password"
            required
            placeholder="Password"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, resetkey: e.target.value })
            }
            value={credentials.resetkey}
            className="rounded w-full py-[12px] px-2 text-base placeholder:text-slate-500"
            type="text"
            required
            placeholder="Forget Password Key"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-sm gap-[2px] sm:gap-1 mt-5 px-2">
          Already have an account ?
          <Link className=" font-semibold text-[#63c34e]" href="/login">
            Login
          </Link>
        </div>
        
        <SubmitButton text={"Sign Up"} pending={pending} />
      </form>
    </div>
  );
};

export default LoginPage;

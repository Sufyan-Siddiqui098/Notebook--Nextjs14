"use client";
import React, { useEffect, useState } from "react";
import { fetchUserDetail, updateUserProfile } from "../lib/auth/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import FormLabel from "@/components/FormLabel";

const UserProfile = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });
  const [pending, setPending] = useState(false);
  const router = useRouter();

  // fetch user info initialy
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchUserDetail();
        if (response.success) {
          setCredentials(response.user);
        }
      } catch (error) {
        console.log("Error While Fetching User \n", error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("useEffect running for new Password");
    if (credentials.confirm_new_password !== credentials.new_password) {
      setPending(true);
    } else {
      setPending(false);
    }
  }, [credentials.confirm_new_password, credentials.new_password]);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setPending(true);
      const response = await updateUserProfile(credentials);
      if (response.success) {
        toast.success("Profile Updated Successfully");
        const { firstname, lastname, username, email } = response.user;
        setCredentials({ firstname, lastname, username, email });
        router.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-16 px-3">
      {/* User name first letter */}
      <div className="w-16 h-16 border flex justify-center uppercase font-semibold items-center rounded-full mb-3 bg-[#121212]">
        {credentials.firstname[0]}
      </div>
      <div className="text-gray-400 sm:text-lg mb-4">
        {credentials.username}
      </div>

      {/* Update  */}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center items-center gap-2 py-4 w-full max-w-md"
      >
        <h2 className='relative text-white text-2xl font-semibold my-2 mb-8 before:content-[""] before:w-7 before:h-[2.6px] before:bg-[#63c34e] before:absolute before:top-[110%] before:left-0 before:right-0 before:mx-auto before:my-1 before:rounded'>
          Update Profile
        </h2>

        <div className="flex flex-col gap-3 w-full px-2 text-black sm:px-4 ">
          {/* Email */}
          <div class="relative w-full">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              value={credentials.email}
              type="email"
              required
              placeholder="Email"
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <FormLabel text={"Email *"} />
          </div>
          {/* First name */}
          <div class="relative w-full">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, firstname: e.target.value })
              }
              value={credentials.firstname}
              type="text"
              required
              placeholder="First Name"
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <FormLabel text={" First Name *"} />
          </div>
          {/* Last name */}
          <div class="relative w-full">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, lastname: e.target.value })
              }
              value={credentials.lastname}
              type="text"
              required
              placeholder="Last Name"
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <FormLabel text={" Last Name *"} />
          </div>
          {/* Current Password   */}
          <div class="relative w-full ">
            <input
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  current_password: e.target.value,
                })
              }
              value={credentials.current_password}
              type="password"
              required
              placeholder="Current Password"
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <FormLabel text={" Current Password *"} />
          </div>

          {/* New password */}
          <div class="relative w-full">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, new_password: e.target.value })
              }
              value={credentials.new_password}
              type="password"
              placeholder="New Password"
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <FormLabel text={" New Password"} />
          </div>
          {/* Confirm new password */}
          <div class="relative w-full">
            <input
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  confirm_new_password: e.target.value,
                })
              }
              value={credentials.confirm_new_password}
              type="password"
              placeholder="Confirm New Password"
              class={`peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-gray-300 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 `}
            />
            <FormLabel
              text={" Confirm New Password "}
              className={
                credentials.confirm_new_password &&
                credentials.confirm_new_password !== credentials.new_password
                  ? " peer-focus:text-red-500 peer-placeholder-shown:text-red-500 text-red-500"
                  : ""
              }
            />
          </div>
        </div>

        <button
          disabled={pending}
          className="border my-3 mt-4 p-[8px_20px] bg-transparent text-white border-white rounded hover:bg-[#63c34e] hover:text-black hover:border-transparent focus:border-transparent focus:bg-[#63c34e] focus:text-black transition disabled:opacity-50"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

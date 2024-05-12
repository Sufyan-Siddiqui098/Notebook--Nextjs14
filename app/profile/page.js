"use client";
import React, { useEffect, useState } from "react";
import { fetchUserDetail, updateUserProfile } from "../lib/auth/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
    try{
        e.preventDefault();
        setPending(true)
        const response = await updateUserProfile(credentials);
        if(response.success){
            toast.success("Profile Updated Successfully")
            const {firstname, lastname, username, email} = response.user;
            setCredentials({firstname, lastname, username, email});
            router.push('/')
        }
    } catch (error){
        toast.error(error.message);
    } finally{
        setPending(false)
    }
  }

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
      <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center gap-2 py-4 w-full max-w-md">
        <h2 className='relative text-white text-2xl font-semibold my-2 mb-8 before:content-[""] before:w-7 before:h-[2.6px] before:bg-[#63c34e] before:absolute before:top-[110%] before:left-0 before:right-0 before:mx-auto before:my-1 before:rounded'>
          Update Profile
        </h2>

        <div className="flex flex-col gap-3 w-full px-2 text-black sm:px-4 ">
            {/* Email */}
          <div class="relative w-full h-10 sm:h-11">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              value={credentials.email}
              type="email"
              required
              placeholder="Email"
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-700"
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5px] peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px]  after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-gray-300 before:border-gray-200 peer-focus:before:!border-gray-700 after:border-gray-200 peer-focus:after:!border-gray-700 sm:-top-[3px] sm:after:mt-[5px] sm:before:mt-[4px]">
              Email *
            </label>
          </div>
              {/* First name */}
          <div class="relative w-full h-10 sm:h-11">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, firstname: e.target.value })
              }
              value={credentials.firstname}
              type="text"
              required
              placeholder="First Name"
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-700"
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5px] peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px]  after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-gray-300 before:border-gray-200 peer-focus:before:!border-gray-700 after:border-gray-200 peer-focus:after:!border-gray-700 sm:-top-[3px] sm:after:mt-[4px] sm:before:mt-[4px]">
              First Name *
            </label>
          </div>
              {/* Last name */}
          <div class="relative w-full h-10 sm:h-11">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, lastname: e.target.value })
              }
              value={credentials.lastname}
              type="text"
              required
              placeholder="Last Name"
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-700"
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5px] peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px]  after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-gray-300 before:border-gray-200 peer-focus:before:!border-gray-700 after:border-gray-200 peer-focus:after:!border-gray-700 sm:-top-[3px] sm:after:mt-[4px] sm:before:mt-[4px]">
              Last Name *
            </label>
          </div>
              {/* Current Password   */}
          <div class="relative w-full h-10 sm:h-11">
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
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-700"
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5px] peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px]  after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-gray-300 before:border-gray-200 peer-focus:before:!border-gray-700 after:border-gray-200 peer-focus:after:!border-gray-700 sm:-top-[3px] sm:after:mt-[4px] sm:before:mt-[4px]">
              Current Password *
            </label>
          </div>
              {/* New password */}
          <div class="relative w-full h-10 sm:h-11">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, new_password: e.target.value })
              }
              value={credentials.new_password}
              type="password"
              placeholder="New Password"
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-700"
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5px] peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px]  after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-gray-300 before:border-gray-200 peer-focus:before:!border-gray-700 after:border-gray-200 peer-focus:after:!border-gray-700 sm:-top-[3px] sm:after:mt-[4px] sm:before:mt-[4px]">
              New Password
            </label>
          </div>
              {/* Confirm new password */}
          <div class="relative w-full h-10 sm:h-11">
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
              class={`peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-700 `}
            />
            <label
              class={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-300 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-[5px] peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px]  after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-400 peer-focus:text-gray-300 before:border-gray-200 peer-focus:before:!border-gray-700 after:border-gray-200 peer-focus:after:!border-gray-700 sm:-top-[3px] sm:after:mt-[4px] sm:before:mt-[4px] ${
                credentials.confirm_new_password &&
                credentials.confirm_new_password !== credentials.new_password
                  ? " peer-focus:text-red-500 peer-placeholder-shown:text-red-500 text-red-500"
                  : ""
              }`}
            >
              Confirm New Password
            </label>
          </div>
          
        </div>

        <button
          disabled={pending}
          className="border my-3 mt-5 p-[8px_20px] bg-transparent text-white border-white rounded hover:bg-[#63c34e] hover:text-black hover:border-transparent focus:border-transparent focus:bg-[#63c34e] focus:text-black transition disabled:opacity-50"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen px-2 py-4  sm:flex flex-col items-center sm:px-10 sm:py-10">
      <h1 className='relative text-white text-2xl sm:text-3xl w-max font-semibold my-2 mb-10 '>
        About Us
      </h1>

      <section className="bg-[#121212] p-3 rounded max-w-[800px] ">
        <h2 className='relative text-lg tracking-wide font-semibold before:content-[""] w-max mb-3 before:w-full before:h-[2px] before:bg-[#91f07c] before:absolute before:top-[80%] before:left-0 before:right-0 before:my-1 before:rounded'>Introduction</h2>
        <p className="mt-1 text-white text-left text-balance sm:text-wrap leading-snug my-2">
          The Notebook website, developed by{" "}
          <a
            className="italic text-green-300 hover:underline focus:underline"
            href="https://github.com/sufyan-Siddiqui098/"
            target="_blank"
          >
            Sufyan Siddiqui
          </a>{" "}
          using Next.js 14 (App Router), is an advanced version of a previous
          project built with the MERN stack.
        </p>
        <h4>Technologies Used: </h4>
        <ul className="list-disc list-inside">
          {/* Nested list - Frontend */}
          <li>
            <strong>Frontend</strong>
            <ul className="list-disc list-inside ps-5 ">
              <li>Tailwind CSS</li>
              <li>React-toast</li>
            </ul>
          </li>
          {/* Nested list - backend */}
          <li>
            <strong>Backend</strong>
            <ul className="list-disc list-inside ps-5 ">
              <li>Mongo Database</li>
              <li>Mongoose</li>
              <li>Axios </li>
            </ul>
          </li>
        </ul>
        <p>
          For more details, you can visit the{" "}
          <a
            className="text-green-400 focus:underline hover:underline"
            href="https://github.com/Sufyan-Siddiqui098/Notebook--Nextjs14"
            target="_blank"
          >
            Github Page
          </a>
        </p>
      </section>
      <section className="p-3 mt-3 bg-[#121212] rounded w-full max-w-[800px]">
        <h2 className={`relative text-lg tracking-wide font-semibold before:content-[""] w-max mb-3 before:w-full before:h-[2px] before:bg-[#91f07c] before:absolute before:top-[82%] before:left-0 before:right-0 before:my-1 before:rounded`}>Functionality </h2>
        <ul className="mt-3 space-y-4 text-left text-gray-500 dark:text-gray-400 ">
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Store and manage notes or any text-form data.</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Access data securely by signing in with credentials.</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Edit and delete notes.</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>
              Update profile information (name, password, username, email).
            </span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>
              Recover forgotten passwords using a security key entered during
              registration or sign-up.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;

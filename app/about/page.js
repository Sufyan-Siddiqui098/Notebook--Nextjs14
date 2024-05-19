import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen px-2 py-4  sm:flex flex-col items-center sm:px-10 sm:py-10">
      <h1 className='relative text-white text-2xl  w-max font-semibold my-2 mb-8 before:content-[""] before:w-12 before:h-[2.6px] before:bg-[#63c34e] before:absolute before:top-[110%] before:left-1 before:right-0 before:mxauto before:my-1 before:rounded'>
        About Us
      </h1>

      <section className="bg-[#121212] p-3 rounded max-w-[800px] ">
        <h2 className="text-lg tracking-wide font-semibold">Introduction</h2>
        <p className="mt-1 text-white text-left text-balance sm:text-wrap  leding-tight my-2">
          The Notebook Website is developed by <a className="italic text-green-300 hover:underline focus:underline" href="https://github.com/sufyan-Siddiqui098/" target="_blank">Sufyan Siddiqui</a> in
          Nextjs 14 (App Route). I have developed this type of notebook before
          using "MERN Stack"{" "}
          <a className="text-green-300 hover:underline focus:underline" href="mern-inotebook.netlify.app">
            Click here to visit
          </a>{" "}
          then I decided to take a step and built it in the Next.js 14.
        </p>
        <li className="my-1">I have used Tailwind CSS, and React-toast for the frontend and for the Backend I have used MONGO-Database, Mongoose for schemas, and Axios for API calling. </li>
        <li className=" my-1">Want to see the code Visit the Github Page <a href="https://github.com/sufyan-Siddiqui098/" className=" text-green-300 hover:underline focus:underline">Link</a> </li>
      </section>
      <section className="p-3 mt-3 bg-[#121212] rounded max-w-[800px]">
        <h2 className="text-lg tracking-wide font-semibold">Functionality </h2>
        <ul className="mt-3 text-white list-disc leading-tight text-justify list-inside flex flex-col gap-2 ">
          <li className="">
            The Notebook is the website where you can keep your notes secure and
            can access it from anywhere just by login to the web.
          </li>
          <li>
            Moreover, You can edit your profile and change your password as
            well. If you have forgot your password it's not a big deal, you just
            have to enter the <em>Security Key</em> that you write when
            Registering/Signing-Up
          </li>
          <li>
            You can Update and Delete your notes. 
          </li>
          <li>
            No One can visit see your notes without Signing-in with your credentials.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;

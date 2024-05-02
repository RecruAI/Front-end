import React from "react";
import Image from "next/image";
import user from "./pngegg.png";
export default function Page() {
  return (
    <div className=" relative flex min-h-screen justify-center items-center bg-gray-900">
      <div
        aria-hidden="true"
        className="absolute inset-y-16 inset-x-0 w-24 rounded-full rotate-45 bg-gradient-to-b from-cyan-700 to-gray-600 blur-3xl mx-auto scale-y-150 scale-x-150 opacity-65"
      ></div>

      <div className=" absolute h-1/4 w-1/4 min-h-96 min-w-96 bg-gray-600 px-12 pt-24  rounded-xl opacity-80">
        <div className="block text-sm font-medium  text-gray-900">
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Username"
            className=" opacity-100 block w-full rounded-sm border-0 p-2 bg-slate-950 text-white shadow-sm  sm:leading-6"
          ></input>
          <input
            type="password"
            name="first-name"
            id="first-name"
            placeholder=" Password"
            className=" opacity-100 block w-full mt-4 rounded-sm border-0 p-2 bg-slate-950 text-white shadow-sm sm:leading-6"
          ></input>
          <div className="flex grid-cols-2 gap-28">
            <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mt-4 accent-red-600"
              ></input>
              <label
                for="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="mt-4 ms-2 text-sm font-medium text-gray-300">
              Forgot password
            </div>
          </div>
          <button className="block mt-6 mx-auto w-full py-4  bg-gray-300 font-semibold text-md rounded-sm">
            LOGIN
          </button>
          <button className="mt-2 block mx-auto py-2 bg-gray-300 font-semibold text-md rounded-sm w-1/2">
            Login to personal
          </button>
        </div>
      </div>
      <Image
        src={user}
        alt="aswokmd"
        height={92}
        width={92}
        className="justify-center flex mb-96 absolute opacity-60"
      ></Image>
    </div>
  );
}

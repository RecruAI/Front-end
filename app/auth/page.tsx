import React from "react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="flex place-content-center items-center h-screen">
      <div className="grid grid-cols-5 gap-28">
        <div className="grid col-span-2 p-6">
          <div className="font-bold text-4xl text-center mb-24">
            Welcome back!
          </div>
          <div className="mx-auto">
            <label className="block ml-1 text-xs font-bold text-gray-600 ">
              EMAIL OR LOGIN
            </label>
            <input
              type="text"
              id="login"
              className=" rounded-md border-2 py-2 px-1.5 w-96 mb-12"
            />
            <label className="block ml-1 text-xs font-bold text-gray-600 ">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="rounded-md border-2 py-2 px-1.5 w-96  "
            />
            <div className="ml-1 mt-1 text-xs font-bold text-blue-600">
              Forgot your password?
            </div>

            <button className="mx-auto mt-24 w-96 py-1.5 px-2 rounded-md font-bold text-white bg-blue-500">
              Log in
            </button>
            <div className="flex">
              <div className="ml-1 mt-1 text-xs font-bold text-black">
                Need an account?
              </div>
              <div className=" ml-1 mt-1 text-xs font-bold text-blue-600 ">
                Sign up
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <div className="bg-black w-1 h-full mx-auto "></div>
        </div>
        <div className="grid col-span-2 p-6 ">
          <div className="">
            <div>
              <div className="font-bold text-4xl text-center">
                Lorem ipsum, sit amet dolores.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

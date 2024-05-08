import React from "react";
import Input from "../components/Input";
import Image from "next/image";
import Button from "../components/Button";
export default function Page() {
  return (
    <div className="flex place-content-center items-center h-screen">
      <div className="grid grid-cols-5 gap-28">
        <div className="grid col-span-2 p-6">
          <div className="font-bold text-4xl text-center mb-24">
            Welcome back!
          </div>
          <div className="mx-auto">
            <Input label="EMAIL OR LOGIN" id="login" type="text"></Input>
            <Input label="PASSWORD" id="password" type="password"></Input>
            <div className="flex items-center mt-1">
              <input
                type="checkbox"
                className="w-4 h-4 border rounded-lg"
              ></input>
              <label className="mt-0.5 block ml-1 text-xs font-bold text-gray-600">
                Remember password
              </label>
            </div>
            <Button title="Log in" id="button"></Button>

            <div className="flex justify-between">
              <div className="ml-1 mt-1 text-xs font-bold text-black">
                Need an account? <span className="text-blue-600">Sign up</span>
              </div>

              <div className="ml-1 mt-1  text-xs font-bold text-blue-600">
                Forgot your password?
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

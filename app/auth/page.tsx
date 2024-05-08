import React from "react";
import Input from "./components/Input";
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
            <Input></Input>
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

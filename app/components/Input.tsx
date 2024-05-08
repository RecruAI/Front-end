import React from "react";

interface InputProps {
  label: string;
  id: string;
  type: "text" | "password" | "email" | "number" | "tel" | "url";
}

export default function Input({ label, id, type }: InputProps) {
  return (
    <>
      <label className="block ml-1 text-xs font-bold text-gray-600 mt-8">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className=" rounded-md border-2 py-2 px-1.5 w-96 "
      />
    </>
  );
}

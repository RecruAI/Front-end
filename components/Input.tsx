interface InputProps {
	label: string
	id: string
	type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
}

export default function Input({ label, id, type }: InputProps) {

  return (
    <>
      <label className="block ml-1 text-xs font-bold text-gray mt-4">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className=" rounded-md border-2 border-black py-2 px-1.5 w-96 "
      />
    </>
  );

}

interface InputProps {
	label: string
	id: string
	type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
}

export default function Input({ label, id, type }: InputProps) {

  return (
		<>
			<label className="text-lightText text-mainText ml-1 mt-4 block text-xs font-bold">{label}</label>
			<input type={type} id={id} className="border-mediumText w-96 rounded-md border-2 px-1.5 py-2 outline-none" />
		</>
  )

}

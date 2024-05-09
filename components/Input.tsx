interface InputProps {
	label: string
	id: string
	type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
}

export default function Input({ label, id, type }: InputProps) {
	return (
		<>
			<label className="ml-1 mt-4 block text-xs font-bold text-gray-600">{label}</label>
			<input type={type} id={id} className="w-96 rounded-md border-2 border-black px-3 py-2 outline-none" />
		</>
	)
}

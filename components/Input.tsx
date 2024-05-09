interface InputProps {
	label: string;
	id: string;
	type: "text" | "password" | "email" | "number" | "tel" | "url";
}

export default function Input({ label, id, type }: InputProps) {
	return (
		<>
			<label className="block ml-1 text-xs font-bold text-gray-600 mt-4">{label}</label>
			<input type={type} id={id} className="outline-none rounded-md border-2 border-black py-2 px-3 w-96" />
		</>
	);
}

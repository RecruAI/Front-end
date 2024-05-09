interface ButtonProps {
	title: string;
	id: string;
}

export default function Button({ title, id }: ButtonProps) {
	return (
		<>
			<button className="mx-auto mt-24 w-96 rounded-md bg-blue-500 px-2 py-1.5 font-bold text-white">{title}</button>
		</>
	)
}

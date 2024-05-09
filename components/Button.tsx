interface ButtonProps {
	title: string;
	id: string;
}

export default function Button({ title, id }: ButtonProps) {
	return (
		<>
			<button className="mx-auto mt-24 w-96 py-1.5 px-2 rounded-md font-bold text-white bg-blue-500">{title}</button>
		</>
	);
}

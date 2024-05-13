interface ButtonProps {
	title: string;
	id: string;
}

export default function Button({ title, id }: ButtonProps) {

  return (
		<>
			<button className="bg-mainColor mx-auto mt-24 w-96 rounded-md px-2 py-1.5 font-bold text-white focus:outline-blue">{title}</button>
		</>
  )

}

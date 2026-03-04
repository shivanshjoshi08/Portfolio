function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
<<<<<<< HEAD
				<span className="hover:text-accent dark:hover:text-accent ml-1 duration-300">
					Kamal
				</span>
				<span className="mx-1">·</span>
				<span className="text-gray-400 dark:text-gray-500 text-base">
					All rights reserved
				</span>
=======
				<a
					// href="https://github.com/realstoman/react-tailwindcss-portfolio"
					target="__blank"
					className=" hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Portfolio
				</a>
				.
				<a
					// href="https://stoman.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase  hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Kamal
				</a>
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
			</div>
		</div>
	);
}

export default AppFooterCopyright;

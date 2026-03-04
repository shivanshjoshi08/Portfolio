import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';

const selectOptions = [
<<<<<<< HEAD
	'Wedding Video',
	'Instagram Reels',
	'YouTube Video Editing',
	'Photo Editing',
	'Social Media Management',
=======
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
	'Branding',
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
];

const HireMeModal = ({ onClose, onRequest }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
<<<<<<< HEAD
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-xl relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className="text-primary-dark dark:text-primary-light text-xl">
								What project can I help you with?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light hover:text-accent"
=======
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								What project are you looking for?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="max-w-xl m-4 text-left"
							>
<<<<<<< HEAD
								<div>
									<input
										className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
=======
								<div className="">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
										id="name"
										name="name"
										type="text"
										required=""
										placeholder="Name"
										aria-label="Name"
									/>
								</div>
<<<<<<< HEAD
								<div className="mt-5">
									<input
										className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
=======
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
										id="email"
										name="email"
										type="text"
										required=""
										placeholder="Email"
										aria-label="Email"
									/>
								</div>
<<<<<<< HEAD
								<div className="mt-5">
									<select
										className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
=======
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
										id="subject"
										name="subject"
										type="text"
										required=""
										aria-label="Project Category"
									>
										{selectOptions.map((option) => (
<<<<<<< HEAD
											<option className="text-normal sm:text-md" key={option}>
=======
											<option
												className="text-normal sm:text-md"
												key={option}
											>
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
												{option}
											</option>
										))}
									</select>
								</div>

<<<<<<< HEAD
								<div className="mt-5">
									<textarea
										className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
=======
								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
<<<<<<< HEAD
										placeholder="Tell me about your project..."
=======
										placeholder="Project description"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
									></textarea>
								</div>

								<div className="mt-6 pb-4 sm:pb-1">
									<span
										onClick={onClose}
										type="submit"
<<<<<<< HEAD
										className="btn-accent px-6 py-2.5 rounded-lg cursor-pointer inline-block"
=======
										className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
										aria-label="Submit Request"
									>
										<Button title="Send Request" />
									</span>
								</div>
							</form>
						</div>
<<<<<<< HEAD
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border-t border-ternary-light dark:border-ternary-dark text-right">
							<span
								onClick={onClose}
								type="button"
								className="px-6 py-2 bg-gray-200 text-primary-dark hover:bg-gray-300 dark:bg-ternary-dark dark:text-secondary-light dark:hover:bg-secondary-dark rounded-lg cursor-pointer duration-300 inline-block"
=======
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
							<span
								onClick={onClose}
								type="button"
								className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
								aria-label="Close Modal"
							>
								<Button title="Close" />
							</span>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;

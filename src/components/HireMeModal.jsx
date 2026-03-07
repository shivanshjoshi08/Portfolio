import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';

const selectOptions = [
	'Wedding Video',
	'Instagram Reels',
	'YouTube Video Editing',
	'Photo Editing',
	'Social Media Management',
];

const HireMeModal = ({ onClose, onRequest }) => {
	// Close on ESC key
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClose]);

	// Prevent background scrolling while modal is open
	useEffect(() => {
		document.documentElement.classList.add('overflow-y-hidden');
		return () => document.documentElement.classList.remove('overflow-y-hidden');
	}, []);

	return createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-[100] flex items-center justify-center p-4"
		>
			{/* Modal Backdrop */}
			<div
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
				className="absolute inset-0 cursor-pointer"
				onMouseDown={onClose}
			></div>

			{/* Modal Content */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 20 }}
				transition={{ duration: 0.25, ease: 'easeOut' }}
				className="modal relative z-10 w-full max-w-md xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark shadow-lg flex flex-col rounded-xl overflow-hidden max-h-[90vh]"
			>
				<div className="modal-header shrink-0 flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
					<h5 className="text-primary-dark dark:text-primary-light text-xl">
						What project can I help you with?
					</h5>
					<button
						onClick={onClose}
						className="px-4 font-bold text-primary-dark dark:text-primary-light hover:text-accent"
					>
						<FiX className="text-3xl" />
					</button>
				</div>
				<div className="modal-body p-5 w-full overflow-y-auto">
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
						className="max-w-xl m-4 text-left"
					>
						<div>
							<input
								className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
								id="name"
								name="name"
								type="text"
								required=""
								placeholder="Name"
								aria-label="Name"
							/>
						</div>
						<div className="mt-5">
							<input
								className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
								id="email"
								name="email"
								type="text"
								required=""
								placeholder="Email"
								aria-label="Email"
							/>
						</div>
						<div className="mt-5">
							<select
								className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
								id="subject"
								name="subject"
								type="text"
								required=""
								aria-label="Project Category"
							>
								{selectOptions.map((option) => (
									<option className="text-normal sm:text-md" key={option}>
										{option}
									</option>
								))}
							</select>
						</div>

						<div className="mt-5">
							<textarea
								className="w-full px-5 py-2.5 border dark:border-secondary-dark rounded-lg text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
								id="message"
								name="message"
								cols="14"
								rows="6"
								aria-label="Details"
								placeholder="Tell me about your project..."
							></textarea>
						</div>

						<div className="mt-6 pb-4 sm:pb-1">
							<span
								onClick={onClose}
								type="submit"
								className="btn-accent px-6 py-2.5 rounded-lg cursor-pointer inline-block"
								aria-label="Submit Request"
							>
								<Button title="Send Request" />
							</span>
						</div>
					</form>
				</div>
				<div className="modal-footer shrink-0 mt-2 sm:mt-0 py-5 px-8 border-t border-ternary-light dark:border-ternary-dark text-right">
					<span
						onClick={onClose}
						type="button"
						className="px-6 py-2 bg-gray-200 text-primary-dark hover:bg-gray-300 dark:bg-ternary-dark dark:text-secondary-light dark:hover:bg-secondary-dark rounded-lg cursor-pointer duration-300 inline-block"
						aria-label="Close Modal"
					>
						<Button title="Close" />
					</span>
				</div>
			</motion.div>
		</motion.div>,
		document.body
	);
};

export default HireMeModal;

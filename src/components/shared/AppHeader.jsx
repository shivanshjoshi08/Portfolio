import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
=======
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
<<<<<<< HEAD
		setShowMenu(!showMenu);
=======
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
	}

	function showHireMeModal() {
		if (!showModal) {
<<<<<<< HEAD
			document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
=======
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
			setShowModal(false);
		}
	}

	return (
		<motion.nav
<<<<<<< HEAD
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			id="nav"
			className="sm:container sm:mx-auto glass-nav sticky top-0 z-50"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-5">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					{/* Logo — text-based for perfect theme matching */}
					<Link to="/" className="group">
						<span className="font-general-bold text-2xl text-primary-dark dark:text-gray-100 tracking-tight group-hover:text-accent duration-300">
							<span className="text-accent">K</span>amal
						</span>
					</Link>

					{/* Theme switcher + hamburger — small screen */}
					<div className="flex items-center gap-3 sm:hidden">
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="theme-toggle bg-ternary-light dark:bg-ternary-dark p-2.5 rounded-xl cursor-pointer"
						>
							{activeTheme === 'dark' ? (
								<FiMoon className="text-primary-dark dark:text-gray-300 text-xl" />
							) : (
								<FiSun className="text-gray-500 text-xl" />
							)}
						</div>

=======
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/">
							{activeTheme === 'dark' ? (
								<img
									src={logoDark}
									className="w-36"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logoLight}
									className="w-36"
									alt="Dark Logo"
								/>
							)}
						</Link>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
<<<<<<< HEAD
								className="h-7 w-7 fill-current text-primary-dark dark:text-gray-300"
=======
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
<<<<<<< HEAD
				<AnimatePresence>
					{showMenu && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="sm:hidden overflow-hidden"
						>
							<div className="m-0 mt-4 p-5 shadow-lg rounded-xl bg-secondary-light dark:bg-secondary-dark">
								<Link
									to="/projects"
									className="block text-left text-lg text-primary-dark dark:text-gray-300 hover:text-accent dark:hover:text-accent sm:mx-4 mb-2 py-2"
									aria-label="Projects"
									onClick={() => setShowMenu(false)}
								>
									Projects
								</Link>
								<Link
									to="/about"
									className="block text-left text-lg text-primary-dark dark:text-gray-300 hover:text-accent dark:hover:text-accent sm:mx-4 mb-2 py-2 border-t border-ternary-light dark:border-ternary-dark pt-3"
									aria-label="About Me"
									onClick={() => setShowMenu(false)}
								>
									About Me
								</Link>
								<Link
									to="/contact"
									className="block text-left text-lg text-primary-dark dark:text-gray-300 hover:text-accent dark:hover:text-accent sm:mx-4 mb-2 py-2 border-t border-ternary-light dark:border-ternary-dark pt-3"
									aria-label="Contact"
									onClick={() => setShowMenu(false)}
								>
									Contact
								</Link>
								<div className="border-t border-ternary-light dark:border-ternary-dark pt-3">
									<button
										onClick={() => {
											showHireMeModal();
											setShowMenu(false);
										}}
										className="hire-btn font-general-medium text-sm mt-2"
										aria-label="Hire Me Button"
									>
										Hire Me
									</button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center">
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-gray-300 hover:text-accent dark:hover:text-accent sm:mx-4 mb-2 sm:py-2"
=======
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
<<<<<<< HEAD
						className="block text-left text-lg text-primary-dark dark:text-gray-300 hover:text-accent dark:hover:text-accent sm:mx-4 mb-2 sm:py-2"
=======
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
<<<<<<< HEAD
						className="block text-left text-lg text-primary-dark dark:text-gray-300 hover:text-accent dark:hover:text-accent sm:mx-4 mb-2 sm:py-2"
=======
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<span
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
<<<<<<< HEAD
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row gap-4">
					<div className="hidden md:flex">
						<button
							onClick={showHireMeModal}
							className="hire-btn font-general-medium text-sm"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
=======
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
					</div>

					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
<<<<<<< HEAD
						className="theme-toggle bg-ternary-light dark:bg-ternary-dark p-3 rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-primary-dark dark:text-gray-300 text-xl" />
						) : (
							<FiSun className="text-gray-500 hover:text-gray-700 text-xl" />
=======
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						)}
					</div>
				</div>
			</div>
			{/* Hire me modal */}
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
<<<<<<< HEAD
=======
				{showModal ? showHireMeModal : null}
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
			</div>
		</motion.nav>
	);
};

export default AppHeader;

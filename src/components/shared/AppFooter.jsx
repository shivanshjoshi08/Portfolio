import {
	FiTwitter,
	FiLinkedin,
	FiYoutube,
	FiInstagram,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/kamaldeep_____/',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://x.com/Maharaj_29?t=cZyHx_0FfBcz8bbE2iga9A&s=09',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/realstoman',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://youtube.com/@kamal_deep29?si=gY9FtZfEpmd1KbCh',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-20">
					<p className="font-general-medium text-3xl sm:text-4xl text-gray-900 dark:text-primary-light mb-6 section-title-underline">
						Follow Me
					</p>
					<ul className="flex gap-4 sm:gap-6 mt-6">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								key={link.id}
								className="text-gray-400 hover:text-accent dark:hover:text-accent cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 dark:hover:bg-secondary-dark shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;

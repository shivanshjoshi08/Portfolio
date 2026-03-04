import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
<<<<<<< HEAD
					<p className="font-general-medium text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
=======
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						{singleProjectData.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
<<<<<<< HEAD
										<span className="font-general-medium text-accent">{info.title}: </span>
										<span>{info.details}</span>
=======
										<span>{info.title}: </span>
										<a
											href="https://stoman.me"
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website and Phone"
										>
											{info.details}
										</a>
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
<<<<<<< HEAD
					<p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light leading-relaxed">
=======
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						{singleProjectData.ProjectInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
<<<<<<< HEAD
					<p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<div className="flex flex-wrap gap-2 mt-2">
						{singleProjectData.ProjectInfo.Technologies[0].techs.map(
							(tech, index) => (
								<span
									key={index}
									className="px-3 py-1 text-sm font-general-medium rounded-full bg-accent-light dark:bg-ternary-dark text-accent dark:text-accent border border-accent border-opacity-30"
								>
									{tech}
								</span>
							)
						)}
					</div>
=======
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
				</div>

				{/* Single project social sharing */}
				<div>
<<<<<<< HEAD
					<p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-4">
=======
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						{singleProjectData.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
<<<<<<< HEAD
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-accent dark:hover:text-accent p-2.5 rounded-lg shadow-sm duration-300"
=======
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
<<<<<<< HEAD
				<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 section-title-underline inline-block">
=======
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
<<<<<<< HEAD
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light leading-relaxed"
=======
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;

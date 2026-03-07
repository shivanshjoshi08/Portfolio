import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const skills = [
	'Adobe Premiere Pro',
	'After Effects',
	'DaVinci Resolve',
	'Photoshop',
	'Lightroom',
	'CapCut',
	'Social Media Strategy',
	'Content Planning',
	'Color Grading',
	'Motion Graphics',
];

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-14 mt-10 sm:mt-16">
			{/* Profile Image */}
			<div className="w-full sm:w-1/3 mb-8 sm:mb-0 flex flex-col items-center sm:items-start">
				<img
					src={profileImage}
					className="profile-image w-64 sm:w-full max-w-xs"
					alt="Kamal"
				/>
			</div>

			{/* Bio + Skills */}
			<div className="w-full sm:w-2/3 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-primary-dark dark:text-gray-300 text-lg leading-relaxed font-general-regular"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}

				{/* Skills section */}
				<div className="mt-6">
					<h3 className="font-general-medium text-xl text-primary-dark dark:text-gray-200 mb-4">
						Skills & Tools
					</h3>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill, index) => (
							<span key={index} className="skill-chip font-general-medium">
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;

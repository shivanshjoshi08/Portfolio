// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	category: 'Wedding Reels',
	ProjectHeader: {
		title: 'Wedding Cinematic Teaser',
		publishDate: 'Jan 15, 2024',
		tags: 'Video Editing / Color Grading',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Wedding Teaser - Scene 1',
			img: Image1,
		},
		{
			id: 2,
			title: 'Wedding Teaser - Scene 2',
			img: Image2,
		},
		{
			id: 3,
			title: 'Wedding Teaser - Scene 3',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Private Client',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Cinematic Video Editing & Color Grading',
			},
			{
				id: 3,
				title: 'Category',
				details: 'Wedding Reels',
			},
			{
				id: 4,
				title: 'Duration',
				details: '2 min 30 sec',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Create a captivating cinematic teaser that captures the essence of the wedding day, highlighting key emotional moments with smooth transitions and professional color grading.',
		Technologies: [
			{
				title: 'Tools & Software',
				techs: [
					'Adobe Premiere Pro',
					'After Effects',
					'DaVinci Resolve',
					'Photoshop',
					'Lightroom',
					'CapCut',
				],
			},
		],
		ProjectDetailsHeading: 'Project Details',
		ProjectDetails: [
			{
				id: 1,
				details:
					'This cinematic wedding teaser was filmed across multiple locations over two days. The edit focuses on emotional storytelling through carefully selected moments, seamless transitions, and a custom color grade that brings warmth and cinematic depth to every frame.',
			},
			{
				id: 2,
				details:
					'The audio design combines the couples chosen song with ambient sound captured on-site, creating an immersive viewing experience that transports the audience right into the celebration.',
			},
			{
				id: 3,
				details:
					'Post-production involved speed ramping for dramatic effect, smooth slow-motion sequences, and custom motion graphics for the couples names and wedding date that complement the overall aesthetic.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://x.com/Maharaj_29?t=cZyHx_0FfBcz8bbE2iga9A&s=09',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/kamaldeep_____/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://youtube.com/@kamal_deep29?si=gY9FtZfEpmd1KbCh',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Instagram Reel Edit',
				img: Image4,
			},
			{
				id: 2,
				title: 'YouTube Long Edit',
				img: Image5,
			},
			{
				id: 3,
				title: 'Social Media Campaign',
				img: Image6,
			},
			{
				id: 4,
				title: 'Wedding Final Edit',
				img: Image3,
			},
		],
	},
};

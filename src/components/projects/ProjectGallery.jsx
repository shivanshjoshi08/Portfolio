import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
<<<<<<< HEAD
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-8 sm:mb-0 overflow-hidden rounded-xl" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 duration-300 w-full object-cover"
							alt={project.title}
=======
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={project.id}
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;

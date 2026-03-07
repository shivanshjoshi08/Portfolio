import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-medium text-gray-900 dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left section-title-underline inline-block">
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
				{singleProjectData.RelatedProject.Projects.map((project) => {
					return (
						<div className="overflow-hidden rounded-xl" key={project.id}>
							<img
								src={project.img}
								className="rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg duration-300 w-full object-cover"
								alt={project.title}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;

import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
<<<<<<< HEAD
				<p className="font-general-semibold text-2xl sm:text-4xl mb-2 text-ternary-dark dark:text-ternary-light section-title-underline">
					Projects Portfolio
				</p>
			</div>

			<div className="mt-12 sm:mt-16">
				<h3
					className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-4"
=======
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>  {/* Projects portfolio  */}

			<div className="mt-10 sm:mt-16">
				<h3
					className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
				>
					Search projects by title or filter by category
				</h3>
				<div
<<<<<<< HEAD
					className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3"
				>
					<div className="flex justify-between gap-2">
						<span
							className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
=======
					className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
<<<<<<< HEAD
							className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light focus:ring-1 focus:ring-accent focus:border-accent"
=======
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                                border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

<<<<<<< HEAD
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 sm:gap-8">
=======
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
				{selectProject
					? selectProjectsByCategory.map((project) => (
						<ProjectSingle
							title={project.title}
							category={project.category}
							image={project.img}
							key={project.id}
						/>
					))
					: searchProject
						? searchProjectsByTitle.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
						))
						: projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
							/>
<<<<<<< HEAD
						))
=======
						)
						)
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
				}
			</div>
		</section>
	);
};

export default ProjectsGrid;

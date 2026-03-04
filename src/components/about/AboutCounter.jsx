import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
<<<<<<< HEAD
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 2 });
	useCountUp({ ref: 'videosCounter', end: 150, duration: 2 });
	useCountUp({ ref: 'clientsCounter', end: 35, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 200, duration: 2 });
=======
	useCountUp({ ref: 'experienceCounter', end: 12, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
<<<<<<< HEAD
					measurement="+"
				/>

				<CounterItem
					title="Videos delivered"
					counter={<span id="videosCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Happy clients"
					counter={<span id="clientsCounter" />}
					measurement="+"
=======
					measurement=""
				/>

				<CounterItem
					title="Stars on GitHub"
					counter={<span id="githubStarsCounter" />}
					measurement="k+"
				/>

				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
<<<<<<< HEAD
					measurement="+"
=======
					measurement="%"
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
				/>
			</div>
		</div>
	);
};

export default AboutCounter;

import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
<<<<<<< HEAD
		name: 'India',
=======
		name: 'Your Address, Your City, Your Country',
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'kd946697@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+91-9717810901',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
<<<<<<< HEAD
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8 section-title-underline inline-block">
					Contact Details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex items-center mb-5" key={contact.id}>
							<i className="text-2xl text-accent mr-4">
								{contact.icon}
							</i>
							<span className="text-lg text-ternary-dark dark:text-ternary-light">
=======
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
>>>>>>> 78453c88569b0fc0b5f59c9b79cdbb389015178e
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;

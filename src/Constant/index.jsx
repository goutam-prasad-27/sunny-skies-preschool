import {
	studyTime,
	interactTime,
	blockTime,
	yogaTime,
	napTime,
	toyTime,
	artTime,
	playTime,
	firstDay,
	applyDay,
	tourDay,
	interviewDay,
	orientationDay,
	acceptanceDay,
	FaFacebook,
	FaInstagram,
	FaYoutube,
	MdMail,
} from "../Assets";

// navigation links and text
export const NavLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "admission",
		title: "Admission",
	},
	{
		id: "programs",
		title: "Programs",
	},
	{
		id: "gallery",
		title: "Gallery",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

// hero texts
export const HeroText = {
	heading: "Where Little Minds Grow.",
	subheading:
		"Sunny Skies Preschool nurtures curiosity, creativity, and a love for learning in a warm and welcoming environment.",
};

// about and staff members
export const AboutText = [
	"Welcome to Sunny Skies Preschool! Our mission is to create a vibrant, nurturing environment where young minds can flourish. We provide a safe, supportive space for children to explore and grow through engaging, hands-on activities. Our passionate educators foster curiosity, creativity, and a love for learning. Join us at Sunny Skies Preschool, where every day is an adventure, and every child shines bright!",
];
export const StaffInfo = [
	{
		name: "Ms. Emily Johnson",
		image: "https://randomuser.me/api/portraits/women/17.jpg",
		post: "Lead Teacher",
		info: "Ms. Emily has over 10 years of experience in early childhood education. She holds a degree in Early Childhood Development and is passionate about creating a nurturing and stimulating environment for young learners.",
	},
	{
		name: "Ms. Aisha Khan",
		image: "https://randomuser.me/api/portraits/women/26.jpg",
		post: "Art Teacher",
		info: "Ms. Aisha is an artist and educator who loves to inspire creativity in young minds. She encourages children to express themselves through various art forms, from painting to sculpture. Her classroom is always a hub of colorful activity.",
	},
	{
		name: "Mr. David Kim",
		image: "https://randomuser.me/api/portraits/men/26.jpg",
		post: "P.E. Teacher",
		info: "Mr. David is a certified physical education teacher who emphasizes the importance of physical activity for healthy development. He organizes fun and engaging activities that help children develop their motor skills and love for sports.",
	},
];
export const Philosophy = [
	"At Sunny Preschool, we nurture the whole child through play-based learning, fostering kindness, curiosity, and creativity in a safe environment.",
];

// enrollment and FAQ information
export const AdmissionText = [
	"At Sunny Preschool, we strive to make the admissions process as smooth and welcoming as possible. We invite you to explore our vibrant learning environment, meet our dedicated staff, and learn more about our unique programs. Our goal is to ensure every family feels confident and excited about joining the Sunny Preschool community. We look forward to welcoming your child to our family!",
];
export const Enrollment = [
	{
		topic: "Tour",
		about: "Schedule a visit to meet our staff and see our facilities.",
		image: tourDay,
	},
	{
		topic: "Apply",
		about: "Complete the application form and provide necessary documents.",
		image: applyDay,
	},
	{
		topic: "Interview",
		about: "Discuss your child’s needs with our Admissions Coordinator.",
		image: interviewDay,
	},
	{
		topic: "Acceptance",
		about: "Receive an offer letter and pay the enrollment fee.",
		image: acceptanceDay,
	},
	{
		topic: "Orientation",
		about: "Attend a session to help your child acclimate.",
		image: orientationDay,
	},
	{
		topic: "First Day",
		about: "Welcome to Sunny Skies Preschool!",
		image: firstDay,
	},
];
export const FAQ = [
	{
		question: "What are your school hours?",
		response:
			"Our school operates from 8:30 AM to 3:30 PM, Monday through Friday.",
	},
	{question: "How do I schedule a tour?",
	response:
		"You can schedule a tour by contacting us through our website or by calling our office directly.",
},
	{
		question: "What is the teacher-student ratio?",
		response:
			"We maintain a low teacher-student ratio of 1:10 to ensure personalized attention for each child.",
	},
	{
		question: "Do you provide meals?",
		response:
			"Yes, we provide healthy snacks and lunch daily. Menus are shared with parents at the start of each week.",
	},
];

// programs information
export const Programs = [
	{
		activity: "Reading",
		details: "Stories, letters, simple words.",
	},
	{
		activity: "Math & Science",
		details: "Counting, shapes, basic patterns, Nature walks, fun experiments.",
	},
	{
		activity: "Art",
		details: "Drawing, painting, crafts.",
	},
	{
		activity: "Music, Dance & Drama",
		details: "Singing, playing simple instruments, Fun dance sessions, Role-playing, storytelling.",
	},
	{
		activity: "Gardening",
		details: "Planting and caring for plants.",
	},
];

// images and text for gallery
export const Gallery = [];

// contact information
export const Contact = {
	email: ": info@sunnyskiespreschool.com",
	phone: "+91 98300 12345",
	address: "123 Rainbow Road, Kolkata, West Bengal, India",
};

// social links
export const Social = [
	{
		href: "https://github.com/goutam-prasad-27",
		icon: (
			<FaFacebook
				fontSize={30}
				className="hover:text-primary transition delay-100 ease-in"
			/>
		),
	},
	{
		href: "https://github.com/goutam-prasad-27",
		icon: (
			<FaInstagram
				fontSize={30}
				className="hover:text-primary transition delay-100 ease-in"
			/>
		),
	},
	{
		href: "https://github.com/goutam-prasad-27",
		icon: (
			<FaYoutube
				fontSize={30}
				className="hover:text-primary transition delay-100 ease-in"
			/>
		),
	},
	{
		href: "https://github.com/goutam-prasad-27",
		icon: (
			<MdMail
				fontSize={30}
				className="hover:text-primary transition delay-100 ease-in"
			/>
		),
	},
];

// copyright information
export const copyright = [
	~"© 2024 Sunny Skies Preschool.~ All rights reserved. Unauthorized duplication or publication of any materials from this site is strictly prohibited.",
];

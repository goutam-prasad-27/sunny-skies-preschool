import {
	studyTime,
	interactTime,
	blockTime,
	yogaTime,
	napTime,
	toyTime,
	artTime,
	playTime,
	craftTime,
	puzzleTime,
	ballTime,
	buildTime,
	restTime,
	philosophyTime,
	firstDay,
	applyDay,
	tourDay,
	interviewDay,
	orientationDay,
	acceptanceDay,
	readingActivity,
	danceActivity,
	artActivity,
	gardeningActivity,
	mathActivity,
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
		name: "Ms. Emily Baker",
		image: "https://randomuser.me/api/portraits/women/43.jpg",
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
		name: "Mr. David Evans",
		image: "https://randomuser.me/api/portraits/men/22.jpg",
		post: "P.E. Teacher",
		info: "Mr. David is a certified physical education teacher who emphasizes the importance of physical activity for healthy development. He organizes fun and engaging activities that help children develop their motor skills and love for sports.",
	},
];
export const Philosophy = [
	"At Sunny Preschool, we nurture the whole child with a play-based learning approach that covers intellectual, emotional, social, and physical growth. We foster kindness, curiosity, and creativity in a safe and supportive environment, encouraging children to explore, express themselves, and develop empathy and strong interpersonal skills.",
];

// enrollment and FAQ information
export const AdmissionText = [
	"At Sunny Preschool, we strive to make the admissions process as smooth and welcoming as possible. We invite you to explore our vibrant learning environment, meet our dedicated staff, and learn more about our unique programs. Our goal is to ensure every family feels confident and excited about joining the Sunny Preschool community. We look forward to welcoming your child to our family!",
];
export const Enrollment = [
	{
		topic: "Schedule a Tour",
		about: "Book a visit to meet our amazing staff and explore our wonderful facilities. Let's start this exciting journey together!",
		image: tourDay,
	},
	{
		topic: "Submit an Application",
		about: "Complete the application form and send us the necessary documents. We're excited to welcome you!",
		image: applyDay,
	},
	{
		topic: "Admissions Interview",
		about: "Chat with our Admissions Coordinator about your child’s needs. We can't wait to learn more about your family!",
		image: interviewDay,
	},
	{
		topic: "Acceptance Offer",
		about: "Receive your offer letter and secure your spot by paying the enrollment fee. Welcome to our family!",
		image: acceptanceDay,
	},
	{
		topic: "Orientation Session",
		about: "Join us for a fun orientation session to help your child feel at home. We’re excited to start this journey with you!",
		image: orientationDay,
	},
	{
		topic: "First School Day",
		about: "Welcome to Sunny Skies Preschool! We can't wait to embark on this adventure with you and your child!",
		image: firstDay,
	},
];
export const FAQ = [
	{
		question: "What are your school hours?",
		response:
			"Our school operates from 8:30 AM to 3:30 PM, Monday through Friday.",
	},
	{
		question: "How do I schedule a tour?",
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
export const ActivityText = [
	"At Sunny Preschool, we offer a variety of engaging programs designed to foster curiosity and development in young children. From STEM activities that spark early interest in science and math to creative arts, outdoor adventures, and language skills, our diverse curriculum ensures a well-rounded and enriching experience for every child. Our goal is to create a fun, nurturing environment where each child can explore, learn, and grow.",
];
export const ProgramActivity = [
	{
		activity: "Reading",
		details: "Engaging stories that spark imagination, recognizing and understanding letters, and practicing reading simple words to build early literacy skills.",
		image: readingActivity,
	},
	{
		activity: "Math & Science",
		details: "Early mathematical skills development through counting numbers, shapes, and patterns, while exploring nature through walks, observations, and experiments ignites curiosity and understanding of the natural world.",
		image: mathActivity,
	},
	{
		activity: "Arts & Crafts",
		details: "Engaging children in creative activities like drawing, painting, and crafting helps develop fine motor skills, hand-eye coordination, and appreciation for art in various forms.",
		image: artActivity,
	},
	{
		activity: "Music, Dance & Drama",
		details: "The program promotes music, dance, and drama, fostering children's imagination, communication skills, and confidence through singing, nursery rhymes, playing simple instruments, and engaging in role-playing and storytelling.",
		image: danceActivity,
	},
	{
		activity: "Gardening",
		details: "Teaching children gardening basics through hands-on activities fosters responsibility, patience, and environmental understanding. It teaches plant types, growth cycles, and nurturing, promoting environmental stewardship.",
		image: gardeningActivity,
	},
];

// images and text for gallery
export const GalleryText = [
	"Dive into the colorful world of Sunny Skies Preschool! Our gallery brims with vibrant moments, creative bursts, and joyful adventures. See the magic unfold in art, play, and learning!",
];
export const GalleryImages = [
	{ id: "1", src: studyTime },
	{ id: "2", src: interactTime },
	{ id: "3", src: napTime },
	{ id: "4", src: yogaTime },
	{ id: "5", src: playTime },
	{ id: "6", src: artTime },
	{ id: "7", src: toyTime },
	{ id: "8", src: firstDay },
	{ id: "9", src: puzzleTime },
	{ id: "10", src: acceptanceDay },
	{ id: "11", src: orientationDay },
	{ id: "12", src: blockTime },
	{ id: "13", src: applyDay },
	{ id: "14", src: interviewDay },
	{ id: "15", src: craftTime },
	{ id: "16", src: tourDay },
	{ id: "17", src: mathActivity },
	{ id: "18", src: artActivity },
	{ id: "19", src: ballTime },
	{ id: "20", src: danceActivity },
	{ id: "21", src: readingActivity },
	{ id: "22", src: buildTime },
	{ id: "23", src: restTime },
	{ id: "24", src: gardeningActivity },
	{ id: "25", src: philosophyTime },
];

// contact information
export const ContactInfo = {
	email: "info@sunnyskiespreschool.com",
	phone: "+1 555-123-4567",
	address: "123 Sunshine Avenue, Los Angeles, CA, USA",
};

// social links
export const Social = [
	{
		href: "https://www.youtube.com/",
		icon: (
			<FaYoutube
				fontSize={35}
				className="text-lightAccent hover:text-mainAccent hover:scale-[1.2] transition delay-200 ease-in-out"
			/>
		),
	},
	{
		href: "https://www.instagram.com/",
		icon: (
			<FaInstagram
				fontSize={35}
				className="text-lightAccent hover:text-mainAccent hover:scale-[1.2] transition delay-200 ease-in-out"
			/>
		),
	},
	{
		href: "https://www.facebook.com/",
		icon: (
			<FaFacebook
				fontSize={30}
				className="text-lightAccent hover:text-mainAccent hover:scale-[1.2] transition delay-200 ease-in-out"
			/>
		),
	},
];

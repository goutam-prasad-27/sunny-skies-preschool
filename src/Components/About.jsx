import React from "react";
import { SectionWrapper } from "../HOC/index";
import { styles } from "../styles";
import { AboutText, Philosophy, StaffInfo } from "../Constant";
import { philosophyTime } from "../Assets";

// Staff component to display individual staff member information
const Staff = ({ image, name, post, info }) => (
	<div className="h-[350px] aboutGradient w-[300px] rounded-xl border-2 border-darkAccent flex flex-col shadow-card">
		<img
			src={image}
			alt={name}
			className="rounded-full h-14 m-5 absolute border-2 border-lightAccent"
		/>
		<div className="flex flex-col text-center">
			<h2 className="pt-7 pl-9 font-bold uppercase tracking-widest aboutTextGradient">
				{name}
			</h2>
			<h3 className="font-semibold tracking-wider">{post}</h3>
			<p className="w-[270px] font-medium text-center self-center pt-8">{info}</p>
		</div>
	</div>
);

// About component for the "About Us" section
function About() {
	return (
		<section>
			{/* About Us heading and text */}
			<div>
				<h1 className={styles.sectionHeading}>About Us.</h1>
				<p className={styles.sectionSubText}>{AboutText}</p>
			</div>
			{/* Divider */}
			<div className="my-5 h-[2px] bg-lightAccent" />
			{/* Staff information section */}
			<div className="flex justify-center flex-wrap gap-5">
				{StaffInfo.map((staff, idx) => (
					<Staff key={staff.name} index={idx} {...staff} />
				))}
			</div>
			{/* Divider */}
			<div className="my-5 h-[2px] bg-lightAccent" />

			{/* Philosophy section */}
			<div className="flex items-center justify-center">
				<div className="bg-background/80 sm:h-[501px] sm:w-[1101px] w-[320px] h-[500px] absolute rounded-3xl border border-lightAccent shadow-card" />
				<img
					src={philosophyTime}
					alt="Philosophy"
					className="sm:h-[500px] sm:w-[1100px] w-[320px] h-[500px] object-cover rounded-3xl "
				/>
				<div className="absolute text-center">
					<h2 className={styles.sectionSubHeading}>
						Our Philosophy.
					</h2>
					<p
						className={`${styles.sectionSubText} sm:w-[700px] w-[290px] text-xs sm:text-lg`}
					>
						{Philosophy}
					</p>
				</div>
			</div>
		</section>
	);
}

// Wrap the About component with SectionWrapper HOC
export default SectionWrapper(About, "about");

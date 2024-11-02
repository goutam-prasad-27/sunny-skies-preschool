import React from "react";
import { styles } from "../styles";
import { HeroText } from "../Constant";

// Hero component for the landing page
function Hero() {
	return (
		// Main section with full height and width
		<section className="h-screen mx-auto relative w-full">
			{/* Dark overlay for background image */}
			<div className="bg-black opacity-50 h-screen w-full" />

			{/* Content container */}
			<div className={`${styles.padding} absolute inset-0 top-[95px]`}>
				{/* Main heading */}
				<h1 className="text-3xl sm:text-5xl font-bold uppercase">
					{HeroText.heading}
				</h1>
				{/* Subheading */}
				<p className="text-[16px] font-semibold">
					{HeroText.subheading}
				</p>

				{/* Call-to-action buttons */}
				<div className="gap-4 flex pt-8 pl-6">
					{/* Enroll Now button */}
					<button
						className={`${styles.heroButton} bg-background`}
					>
						Enroll Now
					</button>
					{/* Schedule a Visit button */}
					<button
						className={` ${styles.heroButton} border-background`}
					>
						Schedule a Visit
					</button>
				</div>

				{/* Placeholder for future event slider */}
				{/*//! might add something like a event slider later */}
			</div>
		</section>
	);
}

export default Hero;

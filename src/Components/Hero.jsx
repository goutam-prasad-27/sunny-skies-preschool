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
			<div className="text-center absolute inset-0 top-[170px]">
				{/* Main heading */}
				<h1 className="text-3xl sm:text-5xl font-bold uppercase pb-3 tracking-wide">
					{HeroText.heading}
				</h1>
				{/* Subheading */}
				<p className="text-[16px] font-semibold tracking-wider">
					{HeroText.subheading}
				</p>

				{/* Call-to-action buttons */}
				<div className="gap-10 flex justify-center sm:pt-8 sm:flex-row flex-col p-5">
					{/* Enroll Now button */}
					<button className={styles.heroButton}>
						Enroll Now
					</button>
					{/* Schedule a Visit button */}
					<button className={`${styles.heroButton} bg-background`}>Schedule a Visit</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;

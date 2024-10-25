import React from "react";
import { styles } from "../styles";
import { HeroText } from "../Constant";

function Hero() {
	return (
		<section className="h-screen mx-auto relative w-full">
			<div className="bg-black opacity-50 h-screen w-full" />

			<div className={`${styles.padding} absolute inset-0 top-[95px]`}>
				<h1 className="text-3xl sm:text-5xl font-bold uppercase">
					{HeroText.heading}
				</h1>
				<p className="text-[16px] font-semibold">
					{HeroText.subheading}
				</p>

				<div className="gap-4 flex pt-8 pl-6">
					<button
						className={`${styles.heroButton} bg-background`}
					>
						Enroll Now
					</button>
					<button
						className={` ${styles.heroButton} border-background`}
					>
						Schedule a Visit
					</button>
				</div>

				{/*//! might add something like a event slider later */}
			</div>
		</section>
	);
}

export default Hero;

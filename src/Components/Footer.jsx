import React from "react";
import { Social } from "../Constant";

// Footer component for the website
function Footer() {
	return (
		<section>
			{/* Social media icons container */}
			<div className="flex gap-12 items-center justify-center">
				{/* Map through social media links and render icons */}
				{Social.map((social, idx) => (
					<a
						className="bg-black-200 p-2 rounded-xl"
						key={idx}
						href={social.href}
						rel="noopener noreferrer"
					>
						{social.icon}
					</a>
				))}
			</div>

			{/* Horizontal line separator */}
			<div className="my-5 h-[2px] bg-white" />

			{/* Copyright and legal information */}
			<div className="flex justify-center items-center h-16">
				<p className="text-gray-400">
					{/* Copyright notice */}
					~© 2024 Sunny Skies Preschool.~ All rights reserved.{" "}
					{/* Additional legal text, hidden on smaller screens */}
					<span className="hidden sm:inline-block">
						Unauthorized duplication or publication of any
						materials from this site is strictly prohibited.
					</span>
				</p>
			</div>
		</section>
	);
}

// Export the Footer component
export default Footer;

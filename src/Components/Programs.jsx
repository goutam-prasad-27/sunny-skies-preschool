import React from "react";
import { SectionWrapper } from "../HOC";
import { ActivityText, ProgramActivity } from "../Constant";
import { styles } from "../styles";

// Activity component to display individual program activities
const Activity = ({ activity, details, image }) => (
	<div>
		<div className="flex flex-col md:flex-row gap-5">
			{/* Image container */}
			<div className="pl-0 sm:pl-8">
				<img
					src={image}
					alt={activity}
					className="sm:max-w-[350px] rounded-2xl drop-shadow-md"
				/>
			</div>
			{/* Activity details container */}
			<div className="pl-2 flex flex-col items-start">
				<h3 className={`${styles.sectionBoldText}`}>
					<span className="text-xl">▸</span>
					{activity}.
				</h3>
				<p className={`${styles.sectionSubText} ml-5 mt-2`}>
					{details}
				</p>
			</div>
		</div>
		{/* Divider */}
		<div className="my-5 h-[1px] bg-white" />
	</div>
);

// Main Programs component
function Programs() {
	return (
		<section>
			{/* Programs header */}
			<h1 className={styles.sectionHeading}>Programs.</h1>
			<p className={styles.sectionSubText}>{ActivityText}</p>

			{/* Divider */}
			<div className="my-5 h-[2px] bg-white" />

			{/* Daily Activities section */}
			<div>
				<h2 className={styles.sectionSubHeading}>
					Daily Activity.
				</h2>
				{/* Map through program activities and render Activity components */}
				{ProgramActivity.map((activity, idx) => (
					<Activity
						key={activity.activity}
						index={idx}
						{...activity}
					/>
				))}
			</div>
		</section>
	);
}

// Wrap the Programs component with SectionWrapper HOC
export default SectionWrapper(Programs, "programs");

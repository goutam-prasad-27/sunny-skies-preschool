import React from "react";
import { SectionWrapper } from "../HOC";
import { styles } from "../styles";
import { AdmissionText, Enrollment, FAQ } from "../Constant";

// Component to render individual FAQ questions and answers
const Questions = ({ question, response }) => (
	<div>
		<h3 className={`${styles.sectionBoldText}`}>
			{" "}
			<span className="text-[18px]">Q.</span> {question}
		</h3>
		<p className={`${styles.sectionSubText} ml-5 mb-2`}>
			<span className="text-[14px]">A. </span>
			{response}
		</p>
		<div className="my-5 h-[1px] bg-lightAccent" />
	</div>
);

// Main Admission component
function Admission() {
	return (
		<section>
			{/* Admission Introduction */}
			<div>
				<h1 className={styles.sectionHeading}>Admission.</h1>
				<p className={`${styles.sectionSubText} pb-5`}>
					{AdmissionText}
				</p>
				<div className="my-5 h-[2px] bg-lightAccent" />

				{/* Enrollment Process Section */}
				<h2 className={styles.sectionSubHeading}>
					Enrollment Process.
				</h2>

				<div className="flex justify-center items-center flex-wrap gap-12">
					{/* Map through enrollment steps */}
					{Enrollment.map((enroll) => (
						<div key={enroll.topic}>
							<h3 className={`${styles.sectionBoldText}`}>
								{enroll.topic} :
							</h3>
							<p
								className={`${styles.sectionSubText} max-w-[500px] pb-5`}
							>
								{enroll.about}
							</p>

							

							<img
								src={enroll.image}
								alt={enroll.topic}
								className="sm:max-w-[500px] sm:max-h-[300px] object-cover rounded-3xl shadow-card w-[500px] h-[300px]"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="my-5 h-[2px] bg-lightAccent" />

			{/* FAQ Section */}
			<div>
				<h2 className={styles.sectionSubHeading}>FAQ's.</h2>
				{/* Map through FAQ questions */}
				{FAQ.map((faq, idx) => (
					<Questions key={faq.question} index={idx} {...faq} />
				))}
			</div>
		</section>
	);
}

// Wrap the Admission component with SectionWrapper HOC
export default SectionWrapper(Admission, "admission");

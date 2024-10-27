import React from "react";
import { SectionWrapper } from "../HOC";
import { styles } from "../styles";
import { AdmissionText, Enrollment, FAQ } from "../Constant";

const Questions = ({ question, response }) => (
	<div>
		<h3 className={`${styles.sectionSubText} underline underline-offset-2 text-xl`}>
			<span>Q. </span>
			{question}
		</h3>
		<p className="pl-10 pb-2 font-medium tracking-wide">
			<span>A. </span>
			{response}
		</p>
	</div>
);
function Admission() {
	return (
		<section>
			<div>
				<h1 className={styles.sectionHeading}>Admission.</h1>
				<p className={`${styles.sectionSubText} pb-5`}>
					{AdmissionText}
				</p>
				<div className="my-5 h-[2px] bg-white" />

				<h2 className={styles.sectionSubHeading}>
					Enrollment Process.
				</h2>
				<div className="pl-2 flex flex-wrap gap-5 items-center justify-center">
					{Enrollment.map((enroll) => (
						<div key={enroll.topic} className="py-2">
							<p className="font-bold text-xl tracking-wide uppercase underline underline-offset-2">
								{enroll.topic}{" "}
								<span className="no-underline">:</span>
							</p>
							<p className="pl-2 font-semibold tracking-wider">
								{enroll.about}
							</p>
							<img
								src={enroll.image}
								alt={enroll.topic}
								className="sm:h-[250px] sm:w-[500px] sm:object-cover object-cover rounded-3xl drop-shadow-xl h[200px] w-[300px]"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="my-5 h-[2px] bg-white" />

			<div>
				<h2 className={styles.sectionSubHeading}>FAQ's.</h2>
				{FAQ.map((faq, idx) => (
					<Questions key={faq.question} index={idx} {...faq} />
				))}
			</div>
		</section>
	);
}

export default SectionWrapper(Admission, "admission");

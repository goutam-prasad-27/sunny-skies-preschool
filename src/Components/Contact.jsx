import React from "react";
import { SectionWrapper } from "../HOC";
import { styles } from "../styles";
import { ContactInfo } from "../Constant";

// Contact component for handling user inquiries
function Contact() {
	return (
		<section>
			{/* Contact form header */}
			<div>
				<h1 className={styles.sectionHeading}>Contact Us.</h1>
			</div>

			{/* Contact information display */}
			<div className="sm:flex gap-5 flex:col">
				{/* Phone number */}
				<span>
					<h3 className="boldGradient font-bold text-2xl">Phone No. :</h3>
					<p className="font-medium">{ContactInfo.phone}</p>
				</span>
				{/* Vertical separator */}
				<div className="h-14 bg-lightAccent w-[1px]" />
				{/* Email address */}
				<span>
					<h3 className="boldGradient font-bold text-2xl">Email :</h3>
					<p className="font-medium">{ContactInfo.email}</p>
				</span>
				{/* Vertical separator */}
				<div className="h-14 bg-lightAccent w-[1px]" />
				{/* Physical address */}
				<span>
					<h3 className="boldGradient font-bold text-2xl">Address :</h3>
					<p className="font-medium">{ContactInfo.address}</p>
				</span>
			</div>

			{/* Horizontal separator */}
			<div className="my-5 h-[2px] bg-lightAccent" />

			{/* Contact form container */}
			<div className="flex justify-center items-center">
				{/* Contact form */}
				<form className="flex flex-col contactGradient p-5 rounded-3xl sm:w-[700px] w-[330px] border-2 border-darkAccent shadow-card">
					{/* Name input field */}
					<div className="form-control">
						<input type="text" required />
						<label>
							<span style={{ transitionDelay: "0ms" }}>
								N
							</span>
							<span style={{ transitionDelay: "50ms" }}>
								a
							</span>
							<span style={{ transitionDelay: "100ms" }}>
								m
							</span>
							<span style={{ transitionDelay: "150ms" }}>
								e
							</span>
							<span style={{ transitionDelay: "200ms" }}>
								.
							</span>
						</label>
					</div>
					{/* Phone input field with input validation */}
					<div className="form-control">
						<input type="text" required />
						<label>
							<span style={{ transitionDelay: "0ms" }}>
								P
							</span>
							<span style={{ transitionDelay: "50ms" }}>
								h
							</span>
							<span style={{ transitionDelay: "100ms" }}>
								o
							</span>
							<span style={{ transitionDelay: "150ms" }}>
								n
							</span>
							<span style={{ transitionDelay: "200ms" }}>
								e
							</span>
							<span style={{ transitionDelay: "200ms" }}>
								.
							</span>
						</label>
					</div>
					{/* Email input field */}
					<div className="form-control">
						<input type="text" required />
						<label>
							<span style={{ transitionDelay: "0ms" }}>
								E
							</span>
							<span style={{ transitionDelay: "50ms" }}>
								m
							</span>
							<span style={{ transitionDelay: "100ms" }}>
								a
							</span>
							<span style={{ transitionDelay: "150ms" }}>
								i
							</span>
							<span style={{ transitionDelay: "200ms" }}>
								l
							</span>
							<span style={{ transitionDelay: "200ms" }}>
								.
							</span>
						</label>
					</div>

					{/* Preferred contact method selection */}
					<label className={styles.formLabel}>
						<span className="pb-1">
							Preferred Contact Method.
						</span>

						<div className="radio-buttons-container">
							<div className="radio-button">
								<input
									name="contactMethod"
									id="phone"
									className="radio-button__input"
									type="radio"
								/>
								<label
									htmlFor="phone"
									className="radio-button__label"
								>
									<span className="radio-button__custom"></span>
									Phone
								</label>
							</div>

							<div className="radio-button">
								<input
									name="contactMethod"
									id="email"
									className="radio-button__input"
									type="radio"
								/>
								<label
									htmlFor="email"
									className="radio-button__label"
								>
									<span className="radio-button__custom"></span>
									Email
								</label>
							</div>
						</div>
					</label>
					
					{/* Reason for contact selection */}
					<label className={styles.formLabel}>
						<span className="pb-1">Reason for Contact.</span>

						<div className="radio-buttons-container flex flex-wrap">
							<div className="radio-button">
								<input
									name="contactReason"
									id="inquiry"
									className="radio-button__input"
									type="radio"
								/>
								<label
									htmlFor="inquiry"
									className="radio-button__label"
								>
									<span className="radio-button__custom"></span>
									General Inquiry
								</label>
							</div>

							<div className="radio-button">
								<input
									name="contactReason"
									id="enrollment"
									className="radio-button__input"
									type="radio"
								/>
								<label
									htmlFor="enrollment"
									className="radio-button__label"
								>
									<span className="radio-button__custom"></span>
									Enrollment
								</label>
							</div>

							<div className="radio-button">
								<input
									name="contactReason"
									id="feedback"
									className="radio-button__input"
									type="radio"
								/>
								<label
									htmlFor="feedback"
									className="radio-button__label"
								>
									<span className="radio-button__custom"></span>
									Feedback
								</label>
							</div>

							<div className="radio-button">
								<input
									name="contactReason"
									id="other"
									className="radio-button__input"
									type="radio"
								/>
								<label
									htmlFor="other"
									className="radio-button__label"
								>
									<span className="radio-button__custom"></span>
									Other
								</label>
							</div>
						</div>
					</label>
					{/* Message textarea for user's detailed inquiry */}
					<label className={styles.formLabel}>
						<span className="pb-2">Your Message.</span>
						<textarea
							name="text"
							rows="5"
							placeholder="Enter Your Message"
							className={`${styles.formInput} resize-none outline-none`}
						></textarea>
					</label>
					{/* Submit button to send the form */}
					<span className="flex justify-center items-center">
						<button className={`${styles.heroButton}`}>
							Submit
						</button>
					</span>
				</form>
			</div>
		</section>
	);
}

// Wrap the Contact component with SectionWrapper HOC for consistent styling and layout
export default SectionWrapper(Contact, "contact");

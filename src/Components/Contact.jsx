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
					<h3 className="font-bold text-2xl">Phone No. :</h3>
					<p className="font-medium">{ContactInfo.phone}</p>
				</span>
				{/* Vertical separator */}
				<span className="h-14 bg-white w-[1px]" />
				{/* Email address */}
				<span>
					<h3 className="font-bold text-2xl">Email :</h3>
					<p className="font-medium">{ContactInfo.email}</p>
				</span>
				{/* Vertical separator */}
				<span className="h-14 bg-white w-[1px]" />
				{/* Physical address */}
				<span>
					<h3 className="font-bold text-2xl">Address :</h3>
					<p className="font-medium">{ContactInfo.address}</p>
				</span>
			</div>

			{/* Horizontal separator */}
			<div className="my-5 h-[2px] bg-white" />

			{/* Contact form container */}
			<div className="flex justify-center items-center">
				{/* Contact form */}
				<form className="flex flex-col bg-black p-5 rounded-3xl sm:w-[700px] w-[330px]">
					{/* Name input field */}
					<label className={styles.formLabel}>
						<span className="pb-2">Name.</span>
						<input
							type="text"
							name="name"
							placeholder="Enter Your Name"
							className={styles.formInput}
						/>
					</label>

					{/* Phone input field with input validation */}
					<label className={styles.formLabel}>
						<span className="pb-2">Phone.</span>
						<input
							type="tel"
							name="phone"
							placeholder="+1 XXX-XXX-XXX"
							className={styles.formInput}
						/>
					</label>

					{/* Email input field */}
					<label className={styles.formLabel}>
						<span className="pb-2">Email.</span>
						<input
							type="email"
							name="email"
							placeholder="Enter Your Email"
							className={styles.formInput}
						/>
					</label>

					{/* Preferred contact method selection */}
					<label className={styles.formLabel}>
						<span className="pb-1">
							Preferred Contact Method.
						</span>
						<div className="space-x-2 pl-2">
							<input type="radio" name="option" />
							<span className="pb-2">Phone</span>
							<input type="radio" name="option" />
							<span className="pb-2">Email</span>
						</div>
					</label>

					{/* Reason for contact selection */}
					<label className={styles.formLabel}>
						<span className="pb-1">Reason for Contact.</span>
						<div className="space-x-5 sm:space-x-2 pl-2">
							<input type="radio" name="option" />
							<span className="pb-2">General Inquiry</span>
							<input type="radio" name="option" />
							<span className="pb-2">Enrollment</span>
							<input type="radio" name="option" />
							<span className="pb-2">Feedback</span>
							<input type="radio" name="option" />
							<span className="pb-2">Other</span>
						</div>
					</label>

					{/* Message textarea for user's detailed inquiry */}
					<label className={styles.formLabel}>
						<span className="pb-2">Your Message.</span>
						<textarea
							name="text"
							rows="5"
							placeholder="Enter Your Message"
							className={`${styles.formInput} resize-none`}
						></textarea>
					</label>

					{/* Submit button to send the form */}
					<span className="flex justify-center items-center">
						<button className="w-full bg-slate-600 p-3 rounded-lg">
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

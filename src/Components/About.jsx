import React from "react";
import { SectionWrapper } from "../HOC/index";
import { styles } from "../styles";
import { AboutText, Philosophy, StaffInfo } from "../Constant";

const Staff = ({ image, name, post, info }) => (
	<div className="h-[350px] w-[320px] bg-slate-500 flex flex-wrap rounded-3xl"> {/*//! add gradient bg */}
		<img
			src={image}
			alt={name}
			className="h-12 rounded-full ml-6 mt-7 border"
		/>
		<h2 className="text-2xl pl-5 py-7 font-bold  underline underline-offset-2">
			{name}
		</h2>
		<p className="pl-[110px] -mt-[100px] font-semibold uppercase text-[12px] tracking-widest">
			{post}
		</p>
		<p className="p-5 font-medium -mt-[160px]">{info}</p>
	</div>
);

function About() {
	return (
		<section>
			<div>
				<h1 className={styles.sectionHeading}>About Us.</h1>
				<p className={styles.sectionSubText}>{AboutText}</p>
			</div>
			<div className="my-5 h-[2px] bg-white" />

			<div className="flex justify-center flex-wrap gap-5">
				{StaffInfo.map((staff, idx) => (
					<Staff key={staff.name} index={idx} {...staff} />
				))}
			</div>

			<div className="my-5 h-[2px] bg-white" />
			<div>
				<h2 className={styles.sectionSubHeading}>
					Our Philosophy.
				</h2>
				<p className={styles.sectionSubText}>{Philosophy}</p>
			</div>
		</section>
	);
}

export default SectionWrapper(About, "about");

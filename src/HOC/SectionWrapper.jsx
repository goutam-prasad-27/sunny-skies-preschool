import React from "react";

const SectionWrapper = (Component, idName) =>
	function HOC() {
		return (
			<section className="">
				<span className="" id={idName}></span>
				<Component />
			</section>
		);
	};

export default SectionWrapper;

import React from "react";
import { SectionWrapper } from "../HOC";
import { styles } from "../styles";
import { GalleryText, GalleryImages } from "../Constant";

const GalleryCollection = ({ id, src }) => {
	const isVideo = src.endsWith(".mp4");
	return (
		<div>
			{isVideo ? (
				<video
					className="sm:h-[200px] h-[150px] rounded-2xl shadow-card"
					autoPlay
					muted
					loop
				>
					<source src={src} type="video/mp4" autoPlay />
				</video>
			) : (
				<img
					src={src}
					alt={`Image ${id}`}
					className="sm:h-[200px] rounded-2xl h-[150px] shadow-card"
				/>
			)}
		</div>
	);
};

function Gallery() {
	return (
		<section>
			<div>
				<h1 className={`${styles.sectionHeading}`}>Gallery.</h1>
				<p className={`${styles.sectionSubText}`}>{GalleryText}</p>
			</div>
			<div className="my-5 h-[2px] bg-lightAccent" />
			<div className="flex flex-wrap gap-3 items-center justify-center">
				{GalleryImages.map((gallery, idx) => (
					<GalleryCollection
						key={gallery.id}
						index={idx}
						{...gallery}
					/>
				))}
			</div>
		</section>
	);
}

export default SectionWrapper(Gallery, "gallery");

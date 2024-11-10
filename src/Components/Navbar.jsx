// Import necessary libraries and components
import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../Assets/";
import { NavLinks } from "../Constant";

// Define the Navbar component
function Navbar() {
	// State variables for active link and toggle menu
	const [active, setActive] = useState(""); // 'active' tracks the currently selected navigation link
	const [toggle, setToggle] = useState(false); // 'toggle' controls the visibility of the mobile menu

	return (
		<section className="flex justify-center items-center">
			<nav
				// Apply styles to the navigation bar
				className={`${styles.paddingX} fixed sm:w-[950px] w-full flex items-center py-2 sm:top-5 top-0 z-20 bg-background shadow-card sm:rounded-[30px] rounded-none`}
			>
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					<Link
						// Link to the home page
						to="/"
						className="flex items-center gap-2 "
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<img
							// Logo image
							src={logo}
							alt="logo"
							className="w-10 h-10 object-contain"
						/>
						<p className="text-[16px] flex font-semiBold tracking-wide uppercase sm:text-[20px]">
							Sunny Skies
							<span className="sm:block hidden">
								&#160;Preschool
							</span>
						</p>
					</Link>

					<ul className="hidden sm:flex flex-row gap-6 list-none">
						{NavLinks.map((links) => (
							<li
								// Navigation link item
								key={links.id}
								className={`${
									active === links.title
										? "text-extraAccent"
										: "text-mainAccent"
								} text-[14px] cursor-pointer font-bold tracking-wider hover:underline hover:underline-offset-2`}
								onClick={() => setActive(links.title)}
							>
								<a href={`#${links.id}`}>
									{links.title}
								</a>
							</li>
						))}
					</ul>

					<div className="sm:hidden flex flex-1 justify-end items-center">
						<img
							// Menu toggle button
							src={toggle ? close : menu}
							alt="menu close"
							className="w-[25px] h-[25px] object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>
						<div
							// Mobile menu
							className={`${
								!toggle ? "hidden" : "flex"
							} p-5 absolute top-10 right-0 mx-5 my-1 min-w[140px] z-10 rounded-2xl navGradient`}
						>
							<ul className="list-none flex justify-end items-start flex-col gap-3">
								{NavLinks.map((links) => (
									<li
										// Mobile menu link item
										key={links.id}
										className={`${
											active === links.title
												? "text-darkAccent"
												: "text-mainAccent"
										} text-[14px] font-bold tracking-wider cursor-pointer`}
										onClick={() => {
											setToggle(!toggle);
											setActive(links.title);
										}}
									>
										<a href={`#${links.id}`}>
											{links.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</section>
	);
}

// Export the Navbar component
export default Navbar;

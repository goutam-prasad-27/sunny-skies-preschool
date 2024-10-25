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
		<nav
			// Apply styles to the navigation bar
			className={`${styles.paddingX} fixed w-full flex items-center py-2 top-0 z-20 bg-background`} //! bg-might change here
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
									? "text-white"
									: "text-red"
							} text-[14px] cursor-pointer font-bold tracking-wider hover:underline hover:underline-offset-2`}
							onClick={() => setActive(links.title)}
						>
							<a href={`#${links.id}`}>{links.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						// Menu toggle button
						src={toggle ? close : menu} //! icons will change here
						alt=""
						className="w-[20px] h-[20px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						// Mobile menu
						className={`${
							!toggle ? "hidden" : "flex"
						} p-5 absolute top-10 right-0 mx-5 my-1 min-w[140px] z-10 rounded-2xl bg-black`} //! bg-will change here
					>
						<ul className="list-none flex justify-end items-start flex-col gap-3">
							{NavLinks.map((links) => (
								<li
									// Mobile menu link item
									key={links.id}
									className={`${
										active === links.title
											? "text-white"
											: "text-red"
									} text-[14px] font-bold tracking-wider cursor-pointer hover:underline hover:underline-offset-2`}
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
	);
}

// Export the Navbar component
export default Navbar;

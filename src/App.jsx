import { BrowserRouter } from "react-router-dom";

import {
	Navbar,
	Hero,
	About,
	Admission,
	Programs,
	Gallery,
	Contact,
	Footer,
} from "./Components";

function App() {
	return (
		<BrowserRouter>
			<div className="z-0 relative bg-background text-mainAccent">
				<div className="bg-hero-background bg-cover bg-no-repeat bg-center"> {/*//! will change the hero image*/}
					<Navbar />
					<Hero />
				</div>

				<About />
				<Admission />
				<Programs />
				<Gallery />
				<Contact />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;

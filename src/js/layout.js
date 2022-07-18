import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Demo } from "./views/demo.js";
import { Single } from "./views/single.js";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PeopleDetails from "./views/PeopleDetails";
import PlanetsDetails from "./views/PlanetsDetails";
import VehiclesDetails from "./views/VehiclesDetails";
import { Hero } from "/src/js/component/hero";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar/>
					<div className="heroHeight">
						<Hero />
					</div>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>

						<Route exact path="/single/:theid">
							<Single />
						</Route>

						<Route exact path="/people/:theid"><PeopleDetails /></Route>
						<Route exact path="/planets/:theid"><PlanetsDetails /></Route>
						<Route exact path="/vehicles/:theid"><VehiclesDetails /></Route>

						<Route>
							<h1 className="align-center" >Not found!</h1>
						</Route>

					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

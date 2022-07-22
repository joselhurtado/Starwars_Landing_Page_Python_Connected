import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { NavBar } from "./component/NavBar";
import { Footer } from "./component/footer";
import CharacterDetails from "/src/js/component/CharacterDetails";
import PlanetDetails from "/src/js/component/PlanetDetails";
import VehicleDetails from "/src/js/component/VehicleDetails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
			<ScrollToTop>
					<NavBar/>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						
						<Route exact path="/character/:theid"><CharacterDetails /></Route>
						<Route exact path="/planet/:theid"><PlanetDetails /></Route>
						<Route exact path="/vehicle/:theid"><VehicleDetails /></Route>

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

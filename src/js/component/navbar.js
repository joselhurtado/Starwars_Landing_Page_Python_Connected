import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/star-wars-logo.png"

export const Navbar = () => {
	return (
		<div className="navbar navbar-dark bg-dark p-3 navbar-fixed">
			<div className="container">
				<Link to="/">
					<img className="NavLogo" src={NavLogo} alt="Starwars Logo"/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-warning">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

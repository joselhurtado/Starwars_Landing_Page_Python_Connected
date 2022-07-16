import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/star-wars-logo.png"

export const Navbar = () => {
	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="NavLogo" src={NavLogo} />
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">Check the Context in action</button>
				</Link>
			</div>
		</nav>
		</div>
	);
};

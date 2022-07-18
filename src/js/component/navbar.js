import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/star-wars-logo.png"

export const Navbar = () => {
	return (
		<div className="navbar p-3 fixed-top">
			<div className="container">
				<Link to="/">
					<img className="NavLogo" src={NavLogo} alt="Starwars Logo"/>
				</Link>
				<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favorites
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
						</div>
				</div>
			</div>
		</div>
	);
};

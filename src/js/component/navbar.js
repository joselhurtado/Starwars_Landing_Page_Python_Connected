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
				<button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
    			<spam className="fa fa-heart"/> Favorites </button>
						<div className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">Item 1</a>
							<li><hr className="dropdown-divider" /></li>
							<a className="dropdown-item" href="#">Item 2</a>
							<li><hr className="dropdown-divider" /></li>
							<a className="dropdown-item" href="#">Item 3</a>
						</div>
				</div>
			</div>
		</div>
	);
};

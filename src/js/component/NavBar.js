import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/star-wars-logo.png"

export const NavBar = () => {
	const {store, actions} = useContext(Context); //Const to call store data from Flux (Actions is not used yet)

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
							{store.favorites.map((item, index) => {
								return(
									<div key={index}>
										<a className="align-middle dropdown-item">{item.name}
										<spam className="fa fa-trash"></spam></a>
										<li><hr className="dropdown-divider" /></li>
									</div>
								)
							})}
						</div>
				</div>
			</div>
		</div>
	);
};

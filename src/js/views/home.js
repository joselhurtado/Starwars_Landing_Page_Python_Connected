import React from "react";
import NavLogo from "/src/img/star-wars-logo.png"
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>I'm your Father Page</h1>
		<br />
		<img src={ NavLogo } />
	<br />
		<div>
		<h2>Card People</h2>
		</div>
	</div>
);

import React from "react";
import NavLogo from "/src/img/star-wars-logo.png"
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>I'm your Father Page</h1>
		<p>
			<img src={ NavLogo } />
		</p>
		<a href="#" className="btn btn-warning">
			If you see this green button, bootstrap is working
		</a>
	</div>
);

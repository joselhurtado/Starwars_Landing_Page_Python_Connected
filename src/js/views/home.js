import React, { useState, useEffect } from "react";
import "../../styles/home.css";

import CharacterCard from "/src/js/component/CharacterCard";

export const Home = () => {
	const [characters, setCharacters] = useState([{name: "Luke Skywalker"}, {name: "C-3PO"}, {name: "R2-D2"}, {name: "Darth Vader"}, {name: "Leia Organa"}]);

	return (
	<div className="container-fluid mt-5">
		
		<div>
			<h1>Characters Group</h1>
			<div>
			<CharacterCard />
			</div>
		</div>	

	</div>
);
};

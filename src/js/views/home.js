import React from "react";
import "../../styles/home.css";
import CharacterCard from "/src/js/component/CharacterCard";
import PlanetCard from "/src/js/component/PlanetCard";

export const Home = () => {
	return (
		<div className="container text-center">
			<div>
				<hr />
				<h1>Characters</h1>
				<hr />
				<div>
				<CharacterCard />
				</div>
			</div>	

			<div>
				<hr />
				<h1>Planets</h1>
				<hr />
				<div>
				<PlanetCard />
				</div>
			</div>
			
		</div>
)
}

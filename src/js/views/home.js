import React from "react";
import "../../styles/home.css";
import CharacterCard from "/src/js/component/CharacterCard";
import PlanetCard from "/src/js/component/PlanetCard";
import VehicleCard from "/src/js/component/VehicleCard";
import { Hero } from "/src/js/component/hero";
import { Search } from "/src/js/component/search";

export const Home = () => {
	return (
		<div className="container">
			<div>
				<Hero />
			</div>
			<div>
				<Search/>
			</div>
			<div>
				<h1 className="text-start titles text-warning">Characters</h1>
				<hr />
				<div>
				<CharacterCard />
				</div>
			</div>	

			<div>
			<br />
				<h1 className="text-start titles text-warning">Planets</h1>
				<hr />
				<div>
				<PlanetCard />
				</div>
			</div>

			<div>
				<br />
				<h1 className="text-start titles text-warning">Starships</h1>
				<hr />
				<div>
				<VehicleCard />
				</div>
			</div>

		</div>
)
}

import React from "react";
import "../../styles/home.css";
import CharacterCard from "/src/js/component/CharacterCard";
import PlanetCard from "/src/js/component/PlanetCard";
import VehicleCard from "/src/js/component/VehicleCard";

export const Home = () => {
	return (
		<div className="container">
			<div>
				<hr />
				<h1 className="text-center">Characters</h1>
				<hr />
				<div>
				<CharacterCard />
				</div>
			</div>	

			<div>
				<hr />
				<h1 className="text-center">Planets</h1>
				<hr />
				<div>
				<PlanetCard />
				</div>
			</div>

			<div>
				<hr />
				<h1 className="text-center">Vehicles</h1>
				<hr />
				<div>
				<VehicleCard />
				</div>
			</div>

		</div>
)
}

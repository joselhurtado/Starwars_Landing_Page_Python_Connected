import React from "react";
import "../../styles/home.css";
import CharacterGroup from "/src/js/component/CharactersGroup";
import PlanetsGroup from "/src/js/component/PlanetsGroup";
import VehiclesGroup from "/src/js/component/VehiclesGroup";


export const Home = () => {
	return (
		<div className="container text-center">
			<div>
				<h1 className="mt-4 characterTitle">Characters</h1>
				<hr />
				<div className="d-flex">
				<CharacterGroup />
				</div>
			</div>	

			<div>
				<h1 className="mt-4">Planets</h1>
				<hr />

				<div className="d-flex">
				<PlanetsGroup />
				</div>
			</div>

			<div>
				<h1 className="mt-4">Vehicles</h1>
				<hr />
				<div className="d-flex">
				<VehiclesGroup />
				</div>
			</div>
		</div>
)
}

import React from "react";
import "../../styles/home.css";
import PlanetCard from "/src/js/component/PlanetCard";

const PlanetsGroup = () => {
	return (
		<div className="d-flex overflow-auto m-4">
            <div>
			<PlanetCard />
		    </div>

            <div>
			<PlanetCard />
		    </div>

            <div>
			<PlanetCard />
		    </div>

            <div>
			<PlanetCard />
		    </div>

            <div>
			<PlanetCard />
		    </div>

            <div>
			<PlanetCard />
		    </div>
        </div>
)
}

export default PlanetsGroup

import React from "react";
import "../../styles/home.css";
import VehicleCard from "/src/js/component/VehicleCard";

const VehiclesGroup = () => {
	return (
		<div className="d-flex overflow-auto m-4">
            <div>
			<VehicleCard />
		    </div>

            <div>
			<VehicleCard />
		    </div>

            <div>
			<VehicleCard />
		    </div>

            <div>
			<VehicleCard />
		    </div>

			<div>
			<VehicleCard />
		    </div>

			<div>
			<VehicleCard />
		    </div>
        </div>
)
}

export default VehiclesGroup

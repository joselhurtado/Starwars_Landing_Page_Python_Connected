import React, { useState, useEffect } from "react";
import { getAllVehicles } from "./API";
import Vehicles_0 from "/src/img/vehicles/Vehicles_0.jpeg";

export default function VehicleCard() {
    const [vehicles, setVehicles] = useState([]); //UseEffect run the function from Vehicles (API)

    useEffect(() => {
        const fn = async () =>{
            const apiVehicles = await getAllVehicles();

            return setVehicles(apiVehicles);
        }; 
        fn();
    },[]);

    return (
        <div className="d-flex overflow-auto">{vehicles.map((x,i) => 
            <div key={i} className="card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={Vehicles_0} className="card-img-top shapeImageTop" alt="card Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">Model: {x.model}</p>  
                        <p className="card-text">Passengers: {x.passengers}</p>  
                        <p className="card-text">Class: {x.vehicle_class}</p>
                        <br />                  
                        <div className="d-flex justify-content-between">
                        <a href={x.url} className="btn btn-warning" target="_blank">URL Wiki Link</a>
                        <a href="#" className="btn btn-outline-warning fa fa-heart" />
                        </div>
                    </div>
            </div>

        ) }</div>
    );
}

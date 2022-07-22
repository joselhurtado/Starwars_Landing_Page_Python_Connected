import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Vehicles_0 from "/src/img/vehicles/Vehicles_0.jpeg";
import { Link } from "react-router-dom";

export default function VehicleDetails() {
    const {store} = useContext(Context);
    const params = useParams();
    const [vehicle, setVehicle] = useState({});
    
    useEffect(() => {
        const data = store.vehicleData.find(item => {
            if(item.url[item.url.length-2] == params.theid){
                return item;
            }
        })
        setVehicle(data);
    },[store.vehicleData])

  return (
    <div className="container">
        <br />
        <h1>{vehicle?.name}</h1>
        <hr />
        <div className="card mb-3 cardShapeSingle">
            <div className="row g-0">
                <div className="col-md-6 fillImage">
                <img src={Vehicles_0} className="img-fluid shapeImageTopSingle" alt="vehicles Image" />
                </div>
                <div className="col-md-6">
                <div className="card-body text-light">
                    <h5 className="card-title text-light">{vehicle?.name} Details</h5>
                    <p className="card-text">Model: <strong>{vehicle?.model}</strong></p>
                    <p className="card-text">Manufacturer: <strong>{vehicle?.manufacturer}</strong></p>
                    <p className="card-text">Cost: <strong>{vehicle?.cost_in_credits}</strong></p>
                    <p className="card-text">Length: <strong>{vehicle?.length}</strong></p>
                    <p className="card-text">Max Speed: <strong>{vehicle?.max_atmosphering_speed}</strong></p>
                    <p className="card-text">Crew: <strong>{vehicle?.crew}</strong></p>
                    <p className="card-text">Passengers: <strong>{vehicle?.passengers}</strong></p>
                    <p className="card-text">Cargo Capacity: <strong>{vehicle?.cargo_capacity}</strong></p> 
                    <p className="card-text">Consumables: <strong>{vehicle?.consumables}</strong></p>                
                    <p className="card-text">Hyperdrive Rating: <strong>{vehicle?.hyperdrive_rating}</strong></p>                
                    <p className="card-text">Starship Class: <strong>{vehicle?.starship_class}</strong></p>                

                    <br />
            </div>
            </div>
        </div>
        </div>
        <div className="d-flex justify-content-between p-2">
                <Link to="/">
                <div className="btn btn-warning">
                    <spam className="fa fa-home"></spam>
                    <spam>Back to Home</spam></div>
				</Link>
            </div>
    </div>
);
}
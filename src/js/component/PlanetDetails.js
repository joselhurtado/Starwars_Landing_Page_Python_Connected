import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Planets_0 from "/src/img/planets/Planets_0.jpeg";
import { Link } from "react-router-dom";

export default function PlanetDetails() {
    const {store} = useContext(Context);
    const params = useParams();
    const [planet, setPlanet] = useState({});
    
    useEffect(() => {
        const data = store.planetData.find(item => {
            if(item.url[item.url.length-2] == params.theid){
                return item;
            }
        })
        setPlanet(data);
    },[store.planetData])

    return (
        <div className="container">
            <br />
            <h1>{planet?.name}</h1>
            <hr />
            <div className="card mb-3 cardShapeSingle">
            <div className="row g-0">
                <div className="col-md-6 fillImage">
                <img src={Planets_0} className="img-fluid shapeImageTopSingle" alt="planets Image" />
                </div>
                <div className="col-md-6">
                <div className="card-body text-light">
                    <h5 className="card-title text-light">{planet?.name} Details</h5>
                    <p className="card-text">Rotation Period: <strong>{planet?.rotation_period}</strong></p>
                    <p className="card-text">Orbital Period: <strong>{planet?.orbital_period}</strong></p>
                    <p className="card-text">Diameter: <strong>{planet?.diameter}</strong></p>
                    <p className="card-text">Climate: <strong>{planet?.climate}</strong></p>
                    <p className="card-text">Gravity: <strong>{planet?.gravity}</strong></p>
                    <p className="card-text">Terrain: <strong>{planet?.terrain}</strong></p>
                    <p className="card-text">Surface Water: <strong>{planet?.surface_water}</strong></p>
                    <p className="card-text">Population: <strong>{planet?.population}</strong></p>                
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
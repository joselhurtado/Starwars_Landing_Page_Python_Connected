import React, { useState, useEffect } from "react";
import { getAllPlanets } from "./API";
import Planets_0 from "/src/img/planets/Planets_0.jpeg";
import { Link } from "react-router-dom";


export default function PlanetCard() {
    const [planets, setPlanets] = useState([]); //UseEffect run the function from Planets (API)

    useEffect(() => {
        const fn = async () =>{
            const apiPlanets = await getAllPlanets();

            return setPlanets(apiPlanets);
        }; 
        fn();
    },[]);

    return (
        <div className="d-flex overflow-auto">{planets.map((x,i) => 
            <div key={i} className="card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={Planets_0} className="card-img-top shapeImageTop" alt="card Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">Diameter: {x.diameter}</p>  
                        <p className="card-text">Gravity: {x.gravity}</p>  
                        <p className="card-text">Population: {x.population}</p>
                        <br />                  
                        <div className="d-flex justify-content-between">
                        <Link to={`/planet/${x.id}`} className="btn btn-warning">
                        Read More
                        </Link>
                        <a href="#" className="btn btn-outline-warning fa fa-heart" />
                        </div>
                    </div>
            </div>

        ) }</div>
    );
}

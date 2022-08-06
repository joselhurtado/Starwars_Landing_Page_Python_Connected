import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function PlanetCard() {
    const {store, actions} = useContext(Context); //Const to call store data from Flux (Actions is not called yet)
    const [planet, setplanets] = useState([]); //UseState run the function from planets (API)
    const [planetpy, setplanetpy] = useState([]); //UseState run the function from planets (Python API)


    useEffect(() => {
        setplanets(store.planetData)
    }, [store.planetData] // In Here we call out again to keep stored the data on re-load the page
    )

    useEffect(() => {
        setplanetpy(store.planetPython)
    }, [store.planetPython] // In Here we call out again to keep stored the data on re-load the page suing Python API
    )

    return (
        <div className="d-flex overflow-auto">{planet.length > 0 && planet.map((x,i) =>  
            <div key={i} className="card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={require(`/src/img/planets/Planets_${x.name}.webp`).default} className="card-img-top shapeImageTop" alt="Planet Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">Diameter: {x.diameter}</p>  
                        <p className="card-text">Gravity: {x.gravity}</p>
                    
                        <div>{planetpy.map((x,i) => <div style={{color: "white"}} key={i}>Test{x.name}</div> 
                        )}</div>  

                        {/* <p className="card-text">Population: {x.population}</p> */}
                        <br />                  
                        <div className="d-flex justify-content-between">
                        <Link to={`/planet/${x.url[x.url.length-2]}`} className="btn btn-warning">
                        Read More
                        </Link>
                        <a onClick={() => actions.addFavorites(x)} className="btn btn-outline-warning fa fa-heart" />
                        </div>
                    </div>
            </div>

        ) }</div>
    );
}

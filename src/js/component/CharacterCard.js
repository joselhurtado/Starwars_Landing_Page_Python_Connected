import React, { useState, useEffect } from "react";
import { getAllCharacters } from "./API";
import { Link } from "react-router-dom";

export default function CharacterCard() {
    const [characters, setCharacters] = useState([]); //UseState run the function from characters (API)

    useEffect(() => {
        const fn = async () =>{
            const apiCharacters = await getAllCharacters();

            return setCharacters(apiCharacters);
        }; 
        fn();
    },[]);


    return (
        <div className="d-flex overflow-auto">{characters.map((x,i) => 
            <div key={i} className="card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={x.image} className="card-img-top shapeImageTop" alt="Character Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">Height: {x.height}</p>  
                        <p className="card-text">Born: {x.born}</p>  
                        <p className="card-text">Species: {x.species}</p>
                        <div className="d-flex justify-content-between">
                        <Link to={`/people/${x.id}`} className="btn btn-warning">
                        Read More
                        </Link>
                        </div>
                    </div>
            </div>
        ) }</div>
    );
}
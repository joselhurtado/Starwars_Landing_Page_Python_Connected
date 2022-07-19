import React, { useState, useEffect } from "react";
import { getAllCharacters } from "./API";
import People_0 from "/src/img/characters/Character_0.jpeg";

export default function CharacterCard() {
    const [characters, setCharacters] = useState([]); //UseEffect run the function from characters (API)

    useEffect(() => {
        const fn = async () =>{
            const apiCharacters = await getAllCharacters();

            return setCharacters(apiCharacters);
        }; 
        fn();
    },[]);


    return (
        <div className="d-flex overflow-auto">{characters.map((x,i) => 
            <div key={i} className="card m-2" style={{minWidth: "18rem"}}>
                <img src={x.image} className="card-img-top characterImageTop" alt="card Image" />
                    <div className="card-body text-left">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">Height: {x.height}</p>  
                        <p className="card-text">Born: {x.born}</p>  
                        <p className="card-text">Species: {x.species}</p>
                        <div className="d-flex justify-content-between">
                            <a href={x.url} className="btn btn-outline-dark" target="_blank">URL Link</a>
                            <a href="#" className="btn btn-outline-dark fa fa-heart" />
                        </div>
                    </div>
            </div>

        ) }</div>
    );
}
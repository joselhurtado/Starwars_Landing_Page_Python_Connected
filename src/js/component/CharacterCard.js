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
        <div>{characters.map((x,i) => 

            <div key={i} className="card m-2" style={{minWidth: "16rem"}}>
                <img src={People_0} className="card-img-top" alt="card Image" />
                    <div className="card-body">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">{x.url}</p>                
                        <div className="d-flex justify-content-between">
                            <a href="#" className="btn btn-outline-dark">Go somewhere</a>
                            <a href="#" className="btn btn-outline-dark fa fa-heart" />
                        </div>
                    </div>
            </div>

        ) }</div>
    );
}

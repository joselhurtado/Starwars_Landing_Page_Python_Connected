import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function CharacterCard() {
    const {store} = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
    const [characters, setCharacters] = useState([]); //UseState run the function from characters (API)

    useEffect(() => {
        setCharacters(store.characterData)
    }, [store.characterData] // In Here we call out again to keep stored the data on re-load the page
    )

    return (
        <div className="d-flex overflow-auto">{characters.length > 0 && characters.map((x,i) => 
            <div key={i} className="card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={x.image} className="card-img-top shapeImageTop" alt="Character Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title">{x.name}</h4>
                        <p className="card-text">Height: {x.height}</p>  
                        <p className="card-text">Born: {x.born}</p>  
                        <p className="card-text">Species: {x.species}</p>
                        <div className="d-flex justify-content-between">
                        <Link to={`/character/${x.id}`} className="btn btn-warning">
                        Read More
                        </Link>
                        <a href={"#"} className="btn btn-outline-warning fa fa-heart" />
                        </div>
                    </div>
            </div>
        ) }</div>
    );
}
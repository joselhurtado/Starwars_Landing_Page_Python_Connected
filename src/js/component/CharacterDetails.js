import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleCharacterCard() {
    const {store} = useContext(Context);
    const params = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        const data = store.characterData.find(item => {
            if(item.id == params.theid){
                return item;
            }
        })
        setCharacter(data);
    },[store.characterData])

    return (
        <div className="container">
            <br />
            <h1>{character?.name}</h1>
            <hr />
            <div className="card mb-3 cardShapeSingle">
            <div className="row g-0">
                <div className="col-md-6 fillImage">
                <img src={character.image} className="img-fluid shapeImageTopSingle" alt="..." />
                </div>
                <div className="col-md-6">
                <div className="card-body text-light">
                    <h5 className="card-title text-light">{character?.name} Details</h5>
                    <p className="card-text">Height: <strong>{character?.height}</strong></p>
                    <p className="card-text">Mass: <strong>{character?.mass}</strong></p>
                    <p className="card-text">gender: <strong>{character?.gender}</strong></p>
                    <p className="card-text">Homeworld: <strong>{character?.homeworld}</strong></p>
                    <p className="card-text">Born: <strong>{character?.born}</strong></p>
                    <p className="card-text">Born Location: <strong>{character?.bornLocation}</strong></p>
                    <p className="card-text">Died: <strong>{character?.died}</strong></p>
                    <p className="card-text">Died Location: <strong>{character?.diedLocation}</strong></p>
                    <p className="card-text">Species: <strong>{character?.species}</strong></p>
                    <p className="card-text">Hair Color: <strong>{character?.hairColor}</strong></p>
                    <p className="card-text">Eye Color: <strong>{character?.eyeColor}</strong></p>
                    <p className="card-text">Skin Color: <strong>{character?.skinColor}</strong></p>
                    <p className="card-text">Cybernetics: <strong>{character?.cybernetics}</strong></p>
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
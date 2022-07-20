import React, { useState, useEffect } from "react";
import Character_0 from "/src/img/characters/Character_0.jpeg";
import { getSingleCharacters } from "./API";
import { Link } from "react-router-dom";


export default function SingleCharacterCard() {
    
    return (
        <div className="container">
            <br />
            <h1>Single Character</h1>
            <hr />
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 fillImage">
                <img src={Character_0} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-dark">Card title</h5>
                    <p className="card-text">height: 1.72</p>
                    <p className="card-text">mass: 73</p>
                    <p className="card-text">gender: male</p>
                    <p className="card-text">homeworld: tatooine</p>
                    <p className="card-text">born: -19</p>
                    <p className="card-text">bornLocation: polis massa</p>
                    <p className="card-text">died: 34</p>
                    <p className="card-text">diedLocation: ahch-to</p>
                    <p className="card-text">species: human</p>
                    <p className="card-text">hairColor: blond</p>
                    <p className="card-text">eyeColor: blue</p>
                    <p className="card-text">skinColor: light</p>
                    <p className="card-text">cybernetics: Prosthetic right hand</p>
                </div>
                </div>
            </div>
            </div>
            <div className="d-flex justify-content-between p-2">
                <div className="btn btn-outline-warning">
					<Spam className="fa fa-caret-left"></Spam>
                    <Spam>Previous</Spam>
				</div>
                <div className="btn btn-warning">
					Back to Home
				</div>
                <div className="btn btn-outline-warning">
                    <Spam>Next</Spam>
					<Spam className="fa fa-caret-right"></Spam>
				</div>
            </div>
        </div>
    );
}
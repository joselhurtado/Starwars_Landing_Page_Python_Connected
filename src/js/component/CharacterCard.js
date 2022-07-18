import React, { useState, useEffect } from "react";
import People_0 from "/src/img/characters/Character_0.jpeg";

export default function CharacterCard() {
    return (
        <div className="card m-2" style={{minWidth: "16rem"}}>
            <img src={People_0} className="card-img-top" alt="card Image" />
                <div className="card-body">
                    <h5 className="card-title">Title Characters</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-outline-dark">Go somewhere</a>
                        <a href="#" className="btn btn-outline-dark fa fa-heart" />
                    </div>
                </div>
        </div>
    );
}

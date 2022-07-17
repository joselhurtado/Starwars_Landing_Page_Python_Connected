import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import People_0 from "/src/img/people/People_0.jpeg";

export default function CharacterCard(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={People_0} className="card-img-top" alt="card Image" />
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}

CharacterCard.propTypes = {
	character: PropTypes.object
};

CharacterCard.propTypes = {
	index: PropTypes.number
};

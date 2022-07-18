import React from "react";
import "../../styles/home.css";
import CharacterCard from "/src/js/component/CharacterCard";

const CharactersGroup = () => {
	return (
		<div className="d-flex overflow-auto cardsGroup m-4">
            <div>
			<CharacterCard />
		    </div>

            <div>
			<CharacterCard />
		    </div>

            <div>
			<CharacterCard />
		    </div>

            <div>
			<CharacterCard />
		    </div>

            <div>
			<CharacterCard />
		    </div>

            <div>
			<CharacterCard />
		    </div>
        </div>
)
}

export default CharactersGroup

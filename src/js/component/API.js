//Fetch All Characters
export async function getAllCharacters() {
    const response = await fetch(
        "https://www.swapi.tech/api/people"
    );
    const payload = await response.json();

    return payload.results
}

//Fetch All Planets
export async function getAllPlanets() {
    const response = await fetch(
        "https://www.swapi.tech/api/planets"
    );
    const payload = await response.json();

    return payload.results
}

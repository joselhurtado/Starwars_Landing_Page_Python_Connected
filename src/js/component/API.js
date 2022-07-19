//Fetch All Characters
export async function getAllCharacters() {
    const response = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json"
    );
    const payload = await response.json();

    return payload
}

//Fetch Single Characters
export async function getSingleCharacters(i) {
    const response = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json"
    );
    const payload = await response.json();

    return payload.character
}

//Fetch All Planets
export async function getAllPlanets() {
    const response = await fetch(
        "https://swapi.py4e.com/api/planets"
    );
    const payload = await response.json();

    return payload.results
}

//Fetch All Vehicles
export async function getAllVehicles() {
    const response = await fetch(
        "https://swapi.py4e.com/api/vehicles"
    );
    const payload = await response.json();

    return payload.results
}

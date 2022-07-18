export async function getAllCharacters() {
    const response = await fetch(
        "https://www.swapi.tech/api/people"
    );
    const payload = await response.json();

    return payload.results
}

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				characterData: [],
				characterQuery: 'https://akabab.github.io/starwars-api/api/all.json?name=${query}',
				planetData: [],
				planetQuery: 'https://swapi.py4e.com/api/planets?name=${query}',
				vehicleData: [],
				vehiclesQuery: 'https://swapi.py4e.com/api/starships?name=${query}',
				favorites: [],
		},
		actions: {
			getAllCharacters: async () => { 				//New Function to Call Characters
				const response = await fetch(
					'https://akabab.github.io/starwars-api/api/all.json'
				);
				const payload = await response.json();
				setStore({characterData:payload})
			},

			getAllPlanets: async () => { 					//New Function to Call Planets
				const response = await fetch(
					'https://swapi.py4e.com/api/planets'
				);
				const payload = await response.json();
				setStore({planetData:payload.results})
			},

			getAllVehicles: async () => { 					//New Function to Call Vehicles
				const response = await fetch(
					'https://swapi.py4e.com/api/starships'
				);
				const payload = await response.json();
				setStore({vehicleData:payload.results})
			},

			addFavorites: (item) => {   			//Favorites Function
				const store = getStore();			//Access to the Store
				store.favorites.push(item)			//Push Item
				setStore(store)						//Save the Changes under Store (Update the State)
			},

			removeFavorites: index => {   			//Remove Favorites Function
				const store = getStore();
				let updatedList = store.favorites.filter(
					(item, i) => index != i
				);
				setStore({favorites:updatedList})	
			},					
			
		}	
	};
};

//* ABOVE THIS LINE LIVES THE NEW API ACTIONS CALLING OBJECTS *//

export default getState;
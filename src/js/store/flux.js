const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				characterData: [],
				planetData: [],
				vehicleData: [],
		},
		actions: {
			getAllCharacters: async () => { //New Function to Call Characters
				const response = await fetch(
					"https://akabab.github.io/starwars-api/api/all.json"
				);
				const payload = await response.json();
				setStore({characterData:payload})
			},

			// Use getActions to call a function within a fuction (EXAMPLE)
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

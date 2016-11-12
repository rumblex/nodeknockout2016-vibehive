export var categoriesReducer = (state = [], action) => {
	console.log("CAT REDUCER: " + action);
	switch (action.type) {
		
		/* REVIEW
		* A reducer is handed only the piece of state it controls
		* Hence the categories reducer only works on categories
		* then all the reducers and their little statedoms are combined
		* See app/store/configureStore.jsx
		* We can simply use the object stpread operator ...
		* to add an object the the reviews
		*/
	   case 'LOAD_ALL_CATEGORIES':
	      return [
					...state,
					action.categories
				]
       default:
          return state
		  }
}
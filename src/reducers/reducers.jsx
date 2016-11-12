export var categoriesReducer = (state = [], action) => {
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
					...action.categories
				]
       default:
          return state
		  }
}

export var activitiesReducer = (state = [], action) => {
	switch(action.type) {
		case 'LOAD_ACTIVITIES':
			return [
				...state,
				action.activities
			];
		case 'ADD_ACTIVITY':
		return [
			...state,
			action.activity
			];
		case 'REMOVE_ACTIVITY'
			return state.filter((activity) => {
				return activity.id !== action.id;
			});
		default:
				return state;
	}
}

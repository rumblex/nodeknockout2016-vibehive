export var categoriesReducer = (state = [], action) => {
	switch (action.type) {
	   	case 'LOAD_ALL_CATEGORIES':
	      return [
					...state,
					...action.categories
				]
       	default:
          return state
		  }
}

export var activeCategoriesReducer = (state = [], action) => {
	switch (action.type) {
	   	case 'ADD_ACTIVE_CATEGORY':
	      return [
					...state,
					action.category
				];
		case 'REMOVE_ACTIVE_CATEGORY':
			return state.filter((category) => {
				return action.category !== category;
			});
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
		case 'REMOVE_ACTIVITY':
			return state.filter((activity) => {
				return activity.id !== action.id;
			});
		default:
				return state;
	}
}

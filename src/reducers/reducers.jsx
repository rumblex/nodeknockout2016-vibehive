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

export var authReducer = (state = {}, action) => {
	switch(action.type) {
		case 'AWAITING_LOGIN':
			return {
				...action
			};
		case 'LOGIN':
			return action.user;
		case 'LOGOUT':
			return {
				uid: null,
				fbKey: null
			};
		default:
			return state;
	};
}

export var vibesReducer = (state = [], action) => {
	switch(action.type) {
		case 'LOAD_VIBES':
			return [
				...state,
				action.activities
			];
		case 'ADD_VIBE':
		return [
			...state,
			action.activity
			];
		case 'REMOVE_VIBE':
			return state.filter((activity) => {
				return activity.id !== action.id;
			});
		case 'UPDATE_VIBE':
			return state;
		default:
				return state;
	}
}

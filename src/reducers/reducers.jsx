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

export var preLoadedReducer = ( state = 'NOT_LOADED', action) => {
	console.log("preloaded")
	switch (action.type) {
		case 'CONFIRM_PRELOADED':
			return action.isPreloaded
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
				...action.user
			};
		case 'LOGIN':
			return action.user;
		case 'LOGOUT':
			return {
				uid: null,
				fbKey: null
			};
		case 'ADD_USER_VIBE':
			return [
				...state.vibes,
				action.vibeID
			];
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

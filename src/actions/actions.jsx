//importing firebase we can avoid the filename since its called index :)
import firebase, {firebaseRef, geoFire, googleProvider, facebookProvider, githubProvider,twitterProvider, storageRef} from 'src/firebase/';

//start an asychronous call to load categories from firebase, then add to local state upon request return
export var startLoadCategories = () => {
	return (dispatch, getState) => {


    firebaseRef.child('categories').once('value').then((snapshot) =>  {
	  console.log(snapshot.val());
	  //add categories to local store
	  dispatch(loadAllCategories(snapshot.val()));
	});


  }
}
//add active category locally when user taps vibe icon
export var addActiveCategory = (category) => {
	return {
	    type: 'ADD_ACTIVE_CATEGORY',
	    category
	}
}

//remove active category locally when user taps active vibe icon
export var removeActiveCategory = (category) => {
	return {
	    type: 'REMOVE_ACTIVE_CATEGORY',
	    category
	}
}


export var loadAllCategories = (categories) => {
	return {
	    type: 'LOAD_ALL_CATEGORIES',
	    categories
	}
}

export var loadVibes = (activities) => {
	return {
		type:  'LOAD_VIBES',
		activities
	};
}

export var StartLoadVibes= () => {
	//get list of user activities


	//get activities that are close enough

	//that are in the user activities

	return (dispatch, getState) => {
		firebaseRef.child('vibes').once('value').then((snapshot) => {
			dispatch(loadActivities(snapshot.val()));
		});
	};
}

export var addVibe = (vibe) => {
	return {
		type: 'ADD_VIBE',
		vibe
	};
}

export var startAddVibe = (name, location, time, image) => {
	return(dispatch, getState) => {
		var vibe = {
			name,
			location,
			time
		}

		var vibeRef = firebaseRef.child('vibes').push(vibe);

		return vibeRef.then(()=> {
			dispatch(addVibe({
				...vibe,
				id: vibeRef.key
			}));
			//TODO trigger image upload here
			var uploadTask = storageRef.child(`${vibeRef.key}.png`).put(image);
		})
	}
}


export var login = (uid) => {
	return {
		type: 'LOGIN',
		uid
	};
}

export var startLogin = (provider) => {
	return(dispatch, state) => {
		var getProvider = (provider) => {
			switch (provider) {
				case 'google':
					return googleProvider;
				case 'twitter':
					return twitterProvider;
				case 'facebook':
					return facebookProvider;
				case 'github':
					return githubProvider;
				default:
					return facebookProvider;
			}
		}

		return firebase.auth().signInWithPopup(getProvider(provider)).then((result) => {
			console.log('auth worked', result);
			dispatch(login(result.user.uid));
		}, (error) => {
			console.log('auth failed', error);
		});
	};
}


export var logout  = () => {
	return {
		type: 'LOGOUT'
	};
}

export var startLogout = () => {
	return(dispatch, state) => {
		return firebase.auth().signOut().then(() => {
			console.log('Logged Out');
			dispatch(logout());
		})

	}
}

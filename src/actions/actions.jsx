//importing firebase we can avoid the filename since its called index :)
import firebase, {firebaseRef, geoFire, googleProvider, facebookProvider, githubProvider,twitterProvider, storageRef} from 'src/firebase/';
import { hashHistory } from 'react-router'
import api from 'src/api/HiveApi'
//start an asychronous call to load categories from firebase, then add to local state upon request return
export var startLoadCategories = () => {
	return (dispatch, getState) => {
    firebaseRef.child('categories').once('value').then((snapshot) =>  {
	  console.log(snapshot.val());
	  //add categories to local store
	  dispatch(loadAllCategories(snapshot.val()));
	  dispatch(confirmPreloaded("LOADED"));
	});


  }
}

//trigger this activity when all data that needs to be loaded on app launch is loaded
export var confirmPreloaded = (isPreloaded) => {
	console.log("returning isproloaded action" + isPreloaded);
	return {
		type: 'CONFIRM_PRELOADED',
		isPreloaded
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

//add tag to temp state locally when user is tagging their vibe
export var addTag = (category) => {
	return {
	    type: 'ADD_TAG',
	    category
	}
}

//remove active category locally when user taps active vibe icon
export var removeTag = (category) => {
	return {
	    type: 'REMOVE_TAG',
	    category
	}
}


export var loadAllCategories = (categories) => {
	return {
	    type: 'LOAD_ALL_CATEGORIES',
	    categories
	}
}

export var loadVibes = (vibes) => {
	return {
		type:  'LOAD_VIBES',
		vibes
	};
}

export var startLoadVibes = (userLocattion) => {
	return (dispatch, getState) => {

		//get list of user categories
		var userCategories = getState.activeCategories;
		//get activities that are close enough
		var closeVibes = [];
		//get activities close enough
		var results = api.getCloseVibes(getState.auth.uid, getState.userLocation);
		results.on('key_entered', (key, location) => {
			//get vibe data
			console.log('close vibe key', key);
			closeVibes.push(key);
		},
		(error) => console.log(error)),
		{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

		if(closeVibes.length !== 0) {
			closeVibes.forEach((key) => {
				//that are in the user activities
				firebaseRef.child(`vibes/${key}`).once('value').then((snapshot) => {
					console.log(snapshot.val());
				});
			})
		}

	};
}

export var addVibe = (vibe) => {
	return {
		type: 'ADD_VIBE',
		vibe
	};
}

export var deleteVibe = (vibeKey) => {
	return {
		type:'DELETE_VIBE',
		vibeKey
	}
}

export var startDeleteVibeKey = (vibeKey) => {
	return(dispatch, getState) => {
		var updates = {};
		getState.vibes.forEach(() => {

		})
	}
}

export var startAddVibe = (name, location, locArr, time, image, tags = []) => {
	return(dispatch, getState) => {
		//since we need a user ID
		var user = getState().auth;
		var vibe = {
			name,
			time,
			location
		}
		var vibeKey = firebaseRef.child('vibes').push().key;



		var vibeFanout = {};

		vibeFanout[`/vibes/${vibeKey}`] = vibe;
		vibeFanout[`/user-vibes/${user.uid}/${vibeKey}`] = vibeKey;

		tags.forEach((cat) => {
			vibeFanout[`/tag-vibes/${cat}/${vibeKey}`] = vibeKey;
		})

		//STORE
		//TODO trigger image upload here
 		var uploadTask = storageRef.child(`${vibeKey}.png`).put(image);
		uploadTask.then(() => {
			console.log('file uploaded');
		})
		//STORE LOCATION
		geoFire.set(vibeKey, location).then(
			() => {
				console.log('save geo');
			}
		);

		//run fanout
		return firebaseRef.update(vibeFanout).then(() => {
			dispatch(addVibe({
				...vibe,
				vibeKey
			}));
		})



	}
}


export var login = (user) => {
	return {
		type: 'LOGIN',
		user
	};
}

export var addUserVibe = (vibeID) => {
	return {
		type: 'ADD_USER_VIBE',
		vibeID
	}
}


export var awaitLogin = (user) => {
	return {
		type: 'AWAITING_LOGIN',
		user
	};
}


export var startAuth = () => {
	return(dispatch, getState) => {
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
				console.log('user', user);
				//add user to firebase
				var userRef = firebaseRef.child('users').push({
					uid: user.uid,
					isAnon: user.isAnonymous
				});
				userRef.then(() => {
					dispatch(awaitLogin({
						...user,
						fbKey: userRef.key
					}));
				});
		  } else {
		    // User is signed out.
		    // ...
				dispatch(logout());
		  }
		  // ...
		});
	}
}

export var startLogin = (provider) => {
	return(dispatch, getState) => {
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
			var user = getState.auth;
				dispatch(login({
					...user,
					...result
				}));


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

//chat actions

//add a chat message to the vibe's chatroom
export var startAddChatMessage = (messageText, timestamp, vibe) => {
	return(dispatch, getState) => {
		//since we need a user ID
		var user = getState().auth;
		var message = {
			user: user.uid,
			messageText: messageText,
			timestamp: timestamp,
		}
		chatRef = firebaseRef.child(`/chats/${vibe.id}`).push(message);
		chatRef.then(() => {
			//add the message to local state
		 dispatch(addChatMessage({
	        ...message,
	        id: chatRef.key
	      }));
		});

	}
}

//add the chat message locally
export var addChatMessage = (message) => {
    return {
        type: 'ADD_MESSAGE',
        message
      }
}

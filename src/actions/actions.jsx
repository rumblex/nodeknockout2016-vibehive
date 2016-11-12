//importing firebase we can avoid the filename since its called index :)
import firebase, {firebaseRef, geoFire} from 'src/firebase/';

//start an asychronous call to load categories from firebase, then add to local state upon request return
export var startLoadCategories = () => {
	return (dispatch, getState) => {

    firebaseRef.child('categories').once('value').then(function(snapshot) {
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
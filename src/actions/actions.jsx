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

export var loadAllCategories = (categories) => {
	return {
	    type: 'LOAD_ALL_CATEGORIES',
	    categories
	}
}
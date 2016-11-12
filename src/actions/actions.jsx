//importing firebase we can avoid the filename since its called index :)
import firebase, {firebaseRef, geoFire, storageRef} from 'src/firebase/';

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

export var loadAllCategories = (categories) => {
	return {
	    type: 'LOAD_ALL_CATEGORIES',
	    categories
	}
}

export var loadActivities = (activities) => {
	return {
		type:  'LOAD_ACTIVITIES',
		activities
	};
}

export var StartLoadActivities = () => {
	//get list of user activities

	//get activities that are close enough

	//that are in the user activities

	return (dispatch, getState) => {
		firebaseRef.child('activities').once('value'.then((snapshot) => {
			dispatch(loadActivities(snapshot.val()))
		});
	}
}

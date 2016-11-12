//set up firebase
import firebase from 'firebase'
import GeoFire from 'geofire'

//configure firebase
try {
  // Initialize Firebase
var config = {
  apiKey: "AIzaSyAszawFKGNUFg5-OTrxh5hGw9YkEOZuVA8",
  authDomain: "vibehive-9a55c.firebaseapp.com",
  databaseURL: "https://vibehive-9a55c.firebaseio.com",
  storageBucket: "vibehive-9a55c.appspot.com",
  messagingSenderId: "159539366706"
};
firebase.initializeApp(config);
} catch (e) {
  console.log(e)
}

//get root ref
export var firebaseRef = firebase.database().ref();
export var storageRef = firebase.storage().ref();
//init GeoFire to store locations
var locationRef = firebaseRef.child('activitylocations');
export var geoFire = new GeoFire(locationRef);
export default firebase;

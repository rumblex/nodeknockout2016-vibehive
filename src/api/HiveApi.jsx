import firebase,{firebaseRef, storageRef} from 'src/firebase/'
 //export funcs
 module.exports = {
   getActiveCategories: (userID)=> {

   },
   getCloseActivities:  (userID, userLocation)=> {

   },
   uploadActivityImage:(image, activityID)=> {
     // Create a root reference
      var storageRef = firebase.storage().ref();

      // Create a reference to 'mountains.jpg'
      var activityImageRef = storageRef.child(`${activityID}.png`);

      // Create a reference to 'images/mountains.jpg'
      var activityImagesRef = storageRef.child(`images/${activityID}.png`);

      // While the file names are the same, the references point to different files
      activityRef.name === activityImagesRef.name            // true
      activityRef.fullPath === activityImagesRef.fullPath    // false

   }
 };

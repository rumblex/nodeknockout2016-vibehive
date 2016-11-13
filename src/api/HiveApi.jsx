import firebase,{firebaseRef, storageRef, geoFire} from 'src/firebase/'
 //export funcs
 module.exports = {
   getActiveCategories: (userID)=> {

   },
   getCloseVibes:  (userID, userLocation)=> {
      var bootStrapGeoQuery = geoFire.query({
        center: userLocation,
        radius: 4000000
      })
      return bootStrapGeoQuery;
   },
 };

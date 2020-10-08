import* as firebase from 'firebase' 
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyALmsVVCgZ-t_of6ZRhQdt1AjU211491LU",
    authDomain: "my---app-e4e77.firebaseapp.com",
    databaseURL: "https://my---app-e4e77.firebaseio.com",
    projectId: "my---app-e4e77",
    storageBucket: "my---app-e4e77.appspot.com",
    messagingSenderId: "212673973386",
    appId: "1:212673973386:web:502c97559448215cca7173",
    measurementId: "G-06CPW2CLYB"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()
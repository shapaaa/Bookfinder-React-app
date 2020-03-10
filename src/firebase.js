import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAr2nZ7eCA4RFDptYgm0EJoh9Cb3n6B93E",
    authDomain: "bookstore-app-cd2ff.firebaseapp.com",
    databaseURL: "https://bookstore-app-cd2ff.firebaseio.com",
    projectId: "bookstore-app-cd2ff",
    storageBucket: "bookstore-app-cd2ff.appspot.com",
    messagingSenderId: "134203535580",
    appId: "1:134203535580:web:8f117d3e89b9886f7bc419",
    measurementId: "G-3JN5QWD9HB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;
export const database=firebase.database();
export const auth=firebase.auth();
export const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
export const storage=firebase.storage();
 
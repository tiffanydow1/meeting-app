import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDx8pNyPsvXQNjnvOhYsozStpdur78IOBU",
    authDomain: "meetings-app-123.firebaseapp.com",
    databaseURL: "https://meetings-app-123.firebaseio.com",
    projectId: "meetings-app-123",
    storageBucket: "meetings-app-123.appspot.com",
    messagingSenderId: "644923112112"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;
import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCLLxcznl-7CQF0I-P42eZlD6RNemWgUug",
    authDomain: "kposter-585c1.firebaseapp.com",
    databaseURL: "https://kposter-585c1.firebaseio.com",
    projectId: "kposter-585c1",
    storageBucket: "",
    messagingSenderId: "550433777292"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref("posts/");
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBEYzyG5nQ0pFC69HQgcGKuYb68IRF1ozM",
  authDomain: "iforget-1f6c0.firebaseapp.com",
  databaseURL:
    "https://iforget-1f6c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iforget-1f6c0",
  storageBucket: "iforget-1f6c0.appspot.com",
  messagingSenderId: "771951215144",
  appId: "1:771951215144:web:bf19e78dfac568ffdfeb1d",
};
// Initialize Firebase
var firedb = firebase.initializeApp(firebaseConfig);
export default firedb.database().ref();

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAToY7wyvKtL8BXZMmrXja_xk3m-yqcUDo",
  authDomain: "react-blog-1954d.firebaseapp.com",
  databaseURL: "https://react-blog-1954d.firebaseio.com",
  projectId: "react-blog-1954d",
  storageBucket: "react-blog-1954d.appspot.com",
  messagingSenderId: "446854419241",
  appId: "1:446854419241:web:d2a683522cf6d8f44add38",
  measurementId: "G-HCYRP60H5F",
};
firebase.initializeApp(config);
export default firebase;

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
var config = {
  apiKey: "AIzaSyDXCSghVd55mgDqWOzgHLnVvHXOVC9voAU",
  authDomain: "aquepoliticotepareces.firebaseapp.com",
  databaseURL: "https://aquepoliticotepareces.firebaseio.com",
  projectId: "aquepoliticotepareces",
  storageBucket: "aquepoliticotepareces.appspot.com",
  messagingSenderId: "348690162895",
  appId: "1:348690162895:web:2267173e2b0f7004"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Email:  firebase.auth.EmailAuthProvider.PROVIDER_ID,
  Phone:  firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  Facebook:  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
};
export const auth = firebase.auth();
export const db = firebase.database();
export const store = firebase.firestore();
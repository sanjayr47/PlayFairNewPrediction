import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyBiQ0KxNabzlbWdFKDj8tc87-uGfyVCVsQ",
    authDomain: "playfairbets.firebaseapp.com",
    projectId: "playfairbets",
    storageBucket: "playfairbets.appspot.com",
    messagingSenderId: "986386688697",
    appId: "1:986386688697:web:5cf47341654b5868e74968",
    measurementId: "G-NS4EKXZBDL"
  };
var fire = "";
try {
  fire = initializeApp(firebaseConfig);
  //firebase.analytics();
  

} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}


export default fire;
import firebase from 'firebase/app';
import 'firebase/firestore';
// import { useState, useEffect } from 'react';

var config = {
    apiKey: "AIzaSyDDxZnt_C0WcKrVAzZ-bzBDhwE3Uhtm5-M",
    authDomain: "insta-story-9d914.firebaseapp.com",
    databaseURL: "https://insta-story-9d914.firebaseio.com",
    projectId: "insta-story-9d914",
    storageBucket: "insta-story-9d914.appspot.com",
    messagingSenderId: "1076258825841",
    appId: "1:1076258825841:web:818017640b0f6ef6bfddd0"
};

firebase.initializeApp(config);

export default firebase.firestore();



// export const useFirebase = () => {
//     let [state, setState] = useState({firebase});

//     useEffect(() => {
//         let app;
//         if (!firebase.apps.length) {
//             firebase.initializeApp(config);
//         }
//         let firestore = firebase.firestore();
//         setState({app, firebase, firestore});
//     },[])

//     return state;
// };
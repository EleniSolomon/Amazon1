// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBiHhG3d4txEhLz27e5XL5GdGMK5UoWec0",
//   authDomain: "my-2f4fe.firebaseapp.com",
//   projectId: "my-2f4fe",
//   storageBucket: "my-2f4fe.appspot.com",
//   messagingSenderId: "775346084373",
//   appId: "1:775346084373:web:19ddc05e75ef75d41a8c1c",
//   measurementId: "G-90G5KZ2M24"
// };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyACLlZ0g1NkJ8M2-utm6oCiSkOhnwzWKeM",
//     authDomain: "elu-41740.firebaseapp.com",
//     projectId: "elu-41740",
//     storageBucket: "elu-41740.appspot.com",
//     messagingSenderId: "946404361674",
//     appId: "1:946404361674:web:dc228eb3e520fe74183b33",
//     measurementId: "G-5M5ZKK8WE3"
//   };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBiHhG3d4txEhLz27e5XL5GdGMK5UoWec0",
//   authDomain: "my-2f4fe.firebaseapp.com",
//   projectId: "my-2f4fe",
//   storageBucket: "my-2f4fe.appspot.com",
//   messagingSenderId: "775346084373",
//   appId: "1:775346084373:web:19ddc05e75ef75d41a8c1c",
//   measurementId: "G-90G5KZ2M24"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "eleni-c4ff8.firebaseapp.com",
  projectId: "eleni-c4ff8",
  storageBucket: "eleni-c4ff8.appspot.com",
  messagingSenderId: "129407530316",
  appId: "1:129407530316:web:ba5ec691d47bf6dd8b8be9",
  measurementId: "G-99RVSK8LMP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Capacitor PWA Camera Plugin
ReactDOM.render(<App />, document.getElementById('root'));

// Call the element loader after theapp has been rendered the first time
defineCustomElements(window);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



//Commented out for debugging purposes

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//   apiKey: "AIzaSyBpQx2iQSi__7D-HV8pHgEzrgUr7Cc-U4Y",
//   authDomain: "swen3252021a3.firebaseapp.com",
//   projectId: "swen3252021a3",
//   storageBucket: "swen3252021a3.appspot.com",
//   messagingSenderId: "458304910670",
//   appId: "1:458304910670:web:94bfc464325278eb6e1a1f",
//   measurementId: "G-PSDTF0TMR2"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);



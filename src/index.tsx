import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
    apiKey: "AIzaSyA2MFwBa1qMp5T31_FExTFGofhUc3x4fYI",
    authDomain: "reenbit-cartoon-characters.firebaseapp.com",
    projectId: "reenbit-cartoon-characters",
    storageBucket: "reenbit-cartoon-characters.appspot.com",
    messagingSenderId: "223316520018",
    appId: "1:223316520018:web:ccd975b713f6ba56f8038b",
    measurementId: "G-CP9F2G2NH6",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const Context = createContext<{
    firebase: typeof firebase;
    auth: firebase.auth.Auth;
} | null>(null);

root.render(
    <React.StrictMode>
        <Context.Provider value={{ firebase, auth }}>
            <BrowserRouter basename="/reenbit-list-cartoon-characters">
                <App />
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);

reportWebVitals();

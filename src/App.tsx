import "./App.css";
import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import { useContext } from "react";
import { Context } from "./index";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import rickMortyMob from "./assets/images/rick-morty-mobile.png";
import rickMortyDes from "./assets/images/rick-morty-desktop.png";

function App() {
    const base = useContext(Context);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const user = base ? useAuthState(base.auth as any) : "";

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const userCredential = await base?.auth.signInWithPopup(provider);
        console.log(userCredential?.user);
    };

    const logout = () => {
        base?.auth.signOut();
    };

    return (
        <>
            <div className="header">
                {!user[0] ? (
                    <button onClick={login} className="button">
                        Log in
                    </button>
                ) : (
                    <button onClick={logout} className="button">
                        Log out
                    </button>
                )}
            </div>
            {user[0] ? (
                <Routes>
                    <Route>
                        <Route path="/" element={<Characters />} />
                        <Route
                            path="details/:id"
                            element={<CharacterDetails />}
                        ></Route>
                    </Route>
                </Routes>
            ) : (
                <>
                    <img
                        className="logo"
                        src={rickMortyMob}
                        srcSet={`${rickMortyMob} 360w, ${rickMortyDes} 600w`}
                        alt="Logo"
                    />
                    <h1 className="text">Log in Please!</h1>
                </>
            )}
        </>
    );
}

export default App;

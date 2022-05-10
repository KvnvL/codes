import React from 'react'

import HeaderMenu from "./views/HeaderMenu";
import HomeLite from "./viewsLite/HomeLite"
import Welcome from "./views/Welcome";
import LogIn from "./views/LogInPage";
import RegisterUser from "./views/RegisterUser";
import Wizard from "./views/Wizard";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase-auth";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from '@firebase/firestore';
import { db } from "./firebase-config";

const App = () => {
    const [homeType, setHomeType] = useState(true)
    const [userState, setUserState] = useState({})

    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            setUserState(false)
        } else {
            setUserState(true)
            const uid = user.uid;
            const docRef = doc(db, "Users", uid);
            const docSnap = await getDoc(docRef)

            // TO-DO: voorkeur.vegetarisch aan passen naar versie boolean
            if (docSnap.data().lite === false) {
                setHomeType(false)
            } else if (docSnap.data().lite === true) {
                setHomeType(true)
            }
        }
    })

    const homeTypeSwitch = (homeType) => {
        if (homeType) {
            return (
                <HomeLite />
            )
        } else {
            return (
                <HeaderMenu />
            )
        }
    }

    return (
        <Router basename="/easyscan">
            <Route path="/" exact render={() => userState ? homeTypeSwitch(homeType) : <Welcome />} />
            <Route path="/logIn" exact render={(name) => <LogIn />} />
            <Route path="/registerUser" exact render={(name) => <RegisterUser />} />
            <Route path="/wizard" exact render={(name) => <Wizard />} />
            <Route path="/homelite" exact render={(name) => <HomeLite />} />
        </Router>
    )
}

export default App

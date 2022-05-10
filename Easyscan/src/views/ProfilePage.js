import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase-auth'
import { useHistory } from 'react-router';
import { getAuth } from "firebase/auth";
import { doc, deleteDoc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from "react";

import { db } from "../firebase-config";
import SwitchCompAllergie from '../components/SwitchCompAllergie';
import SwitchCompVoorkeuren from '../components/SwitchCompVoorkeur';

const ProfilePage = () => {
    const [activeUser, setActiveUser] = useState([])
    const [allergieen, setAllergieen] = useState([])
    const [voorkeuren, setVoorkeuren] = useState([])
    const [userId, setUserId] = useState([])

    useEffect(async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            setUserId(user.uid)
            const docRef = doc(db, 'Users', user.uid);
            const docSnap = await getDoc(docRef);
            let data = docSnap.data()
            setActiveUser(data)
            setAllergieen({ data: data.allergie })
            setVoorkeuren({ data: data.voorkeuren })
        }
    }, [activeUser, allergieen, voorkeuren, userId])

    let history = useHistory();

    const logOut = async (e) => {
        e.preventDefault();

        if (window.confirm('Are you sure you want to log out?')) {
            await signOut(auth)
            history.push("/")
        } else {
            return
        }
    }

    // const [image, setImage] = useState(null)

    const setNewImg = (e) => {
        // if(e.target.files[0]){
        //     setImage(e.target.files[0]);

        // }
    }

    if (allergieen.data != undefined && voorkeuren.data != undefined && userId != undefined) {
        return (
            <div>
                <h1>Profiel pagina</h1>
                <div className="profile-wrapper">
                    <div className="profile-item-wrapper image-wrapper">
                        <label htmlFor="uploadPicture">
                            <img src={activeUser.profilePicture} alt="profiel foto" />
                            <div className="editPF"><i className="fas fa-pencil-alt" /></div>
                        </label>
                        <input type="file" id="uploadPicture" onChange={setNewImg} />
                    </div>

                    <div className="profile-item-wrapper">
                        <h2>Naam:</h2>
                        <h2 >{activeUser.firstname} {activeUser.lastname}</h2>
                        <span></span>
                    </div>
                    <div className="profile-item-wrapper">
                        <h2>E-mail:</h2>
                        <h2 >{activeUser.email}</h2>
                        <span></span>
                    </div>
                    <div className="profile-item-wrapper">
                        <h2>Geboorte datum:</h2>
                        <h2 >{activeUser.birthday}</h2>
                        <span></span>
                    </div>
                    <div className="profile-item-wrapper-small">
                        <div className="profile-item-wrapper profile-item-small">
                            <h2>Lengte:</h2>
                            <h2 >{activeUser.height}m</h2>
                            <span></span>
                        </div>
                        <div className="profile-item-wrapper profile-item-small">
                            <h2>Gewicht:</h2>
                            <h2 >{activeUser.weight}kg</h2>
                            <span></span>
                        </div>
                    </div>
                    <div className="switches allergie">
                        <h2>Allergieën:</h2>
                        <div className="switch-wrapper" >
                            <h3>Gluten:</h3> <SwitchCompAllergie user={userId} allergie={"gluten"} state={allergieen.data.gluten} />
                        </div>
                        <div className="switch-wrapper" >
                            <h3>Koemelk:</h3> <SwitchCompAllergie user={userId} allergie={"koemelk"} state={allergieen.data.gluten} />
                        </div>
                        <div className="switch-wrapper" >
                            <h3>Noten:</h3> <SwitchCompAllergie user={userId} allergie={"noten"} state={allergieen.data.gluten} />
                        </div>
                        <div className="switch-wrapper" >
                            <h3>Pinda's:</h3> <SwitchCompAllergie user={userId} allergie={"pindas"} state={allergieen.data.gluten} />
                        </div>
                        <div className="switch-wrapper">
                            <h3>Anders:</h3> <h3>{allergieen.data.anders}</h3>
                        </div>
                    </div>
                    <div className="switches voorkeuren">
                        <h2>Voorkeuren:</h2>
                        <div className="switch-wrapper" >
                            <h3>Geen suiker:</h3> <SwitchCompVoorkeuren user={userId} voorkeur={"geenSuiker"} state={voorkeuren.data.geenSuiker} />
                        </div>
                        <div className="switch-wrapper" >
                            <h3>Kalorie arm:</h3> <SwitchCompVoorkeuren user={userId} voorkeur={"kalorieArm"} state={voorkeuren.data.kalorieArm} />
                        </div>
                        <div className="switch-wrapper" >
                            <h3>Veganistisch:</h3> <SwitchCompVoorkeuren user={userId} voorkeur={"veganistisch"} state={voorkeuren.data.veganistisch} />
                        </div>
                        <div className="switch-wrapper" >
                            <h3>Vegetarisch:</h3> <SwitchCompVoorkeuren user={userId} voorkeur={"vegetarisch"} state={voorkeuren.data.vegetarisch} />
                        </div>
                    </div>
                </div>
                {/* <div className="switch-wrapper" >
                <h3>Gluten:</h3> <SwitchComp state={.gluten} />
            </div> */}

                <div className="bottom-profile-page">
                    <button onClick={logOut}>Log Out</button>
                </div>
            </div>
        )
    } else {
        return (
            <>...Loading</>
        )
    }

}

export default ProfilePage


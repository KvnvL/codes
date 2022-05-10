import React from 'react'

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot, doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

import loyaltypoint from "../img/loyaltyPoint.png"
import loyaltypoint2 from "../img/loyaltyPoint2.png"

const SavingsCard = () => {

    const [activeUser, setActiveUser] = useState([])

    useEffect (async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if(user){
            const docRef = doc(db, 'Users', user.uid);
            const docSnap = await getDoc(docRef);
            let data = docSnap.data()
            setActiveUser(data)
        }
      },[])

      let loyaltyPoints = '';
      loyaltyPoints = activeUser.loyaltyPoints;
      
      let loyaltyPointsNeeded = 20 - loyaltyPoints;
      


      var loyaltyPointsEarned = [];
        for (var i = 0; i<  loyaltyPoints; i++) {
            loyaltyPointsEarned.push(<h2><img src={loyaltypoint} alt="" key={i} /></h2>);
}

var loyaltyPointsNeed = [];
for (var b = 0; b<  loyaltyPointsNeeded; b++) {
    loyaltyPointsNeed.push(<h2><img src={loyaltypoint2} alt="" key={i}/></h2>);
}



    return (
        <div className="spaarkaart">
            <h1>Spaarkaart</h1>
            <div className="loyaltyPoint">
                {loyaltyPointsEarned}
                {loyaltyPointsNeed}
            
            </div>
            <p id="loyaltyCardPrice">Bij elke €10,- aan boodschappen ontvang je een zegel!</p>
            <h2 id="loyaltyCardNeeded">Nog {loyaltyPointsNeeded} punten nodig voor een doosvol boodschappen t.w.v. €50,-!</h2>
        </div>
    )
}

export default SavingsCard

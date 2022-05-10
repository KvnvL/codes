import { getDoc, doc, updateDoc } from "@firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../firebase-config"

function SwitchCompVoorkeuren(state) {
    const [innerClass, setInnerClass] = useState('innerSwitch')
    const [outerClass, setOuterClass] = useState('outerSwitch')
    const [voorkeurenState, setvoorkeurenState] = useState([])
    const voorkeurenRef = "voorkeuren." + state.voorkeur

    //Als we de data uit db gebruiken
    useEffect(() => {
        const docRef = doc(db, "Users", state.user)
        const asyncSnap = async () => {
            const docSnap = await getDoc(docRef)
            const docSnapData = docSnap.data().voorkeuren[state.voorkeur]
            setvoorkeurenState(docSnapData)
        }

        asyncSnap()
        switchUpdate()

        // console.log(state.state)
    }, [voorkeurenState])

    const docUpdate = async () => {
        const docRef = doc(db, "Users", state.user)
        const docSnap = await getDoc(docRef);
        setvoorkeurenState(docSnap.data().voorkeuren[state.voorkeur]);
        console.log(voorkeurenState)

        if (voorkeurenState === false) {
            setInnerClass('innerSwitch innerSwitchTrue')
            setOuterClass('outerSwitch switchTrue')

            await updateDoc(docRef, {
                [voorkeurenRef]: true
            })
            console.log("true")
        } else {
            setInnerClass('innerSwitch')
            setOuterClass('outerSwitch')

            await updateDoc(docRef, {
                [voorkeurenRef]: false
            })
            console.log("false")
        }
    }

    const switchUpdate = () => {
        console.log(voorkeurenState)
        if (voorkeurenState === true) {
            setInnerClass('innerSwitch innerSwitchTrue')
            setOuterClass('outerSwitch switchTrue')
        } else {
            setInnerClass('innerSwitch')
            setOuterClass('outerSwitch')
        }
    }

    return (
        <div className="switch" onClick={docUpdate}>
            <div className={innerClass}></div>
            <div className={outerClass}></div>
        </div>
    )
}

export default SwitchCompVoorkeuren

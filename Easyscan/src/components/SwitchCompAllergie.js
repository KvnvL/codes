import { getDoc, onSnapshot, doc, updateDoc } from "@firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../firebase-config"

function SwitchCompAllergie(state) {
    const [innerClass, setInnerClass] = useState('innerSwitch')
    const [outerClass, setOuterClass] = useState('outerSwitch')
    const [allergieState, setAllergieState] = useState([])
    const allergieRef = "allergie." + state.allergie

    //Als we de data uit db gebruiken
    useEffect(() => {
        const docRef = doc(db, "Users", state.user)
        const asyncSnap = async () => {
            const docSnap = await getDoc(docRef)
            const docSnapData = docSnap.data().allergie[state.allergie]
            setAllergieState(docSnapData)
        }

        asyncSnap()
        switchUpdate()

        // console.log(state.state)
    }, [allergieState])

    const docUpdate = async () => {
        const docRef = doc(db, "Users", state.user,)
        const docSnap = await getDoc(docRef);
        setAllergieState(docSnap.data().allergie[state.allergie]);
        console.log(allergieState)

        if (allergieState === false) {
            setInnerClass('innerSwitch innerSwitchTrue')
            setOuterClass('outerSwitch switchTrue')

            await updateDoc(docRef, {
                [allergieRef]: true
            })
            console.log("true")
        } else {
            setInnerClass('innerSwitch')
            setOuterClass('outerSwitch')

            await updateDoc(docRef, {
                [allergieRef]: false
            })
            console.log("false")
        }
    }

    const switchUpdate = () => {
        console.log(allergieState)
        if (allergieState === true) {
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

export default SwitchCompAllergie

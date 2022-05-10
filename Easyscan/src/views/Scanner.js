// import React, { useState } from 'react'
import BarcodeScanner from '../components/BarcodeScanner.js'

const Scanner = () => {
    // snel genereren van een unieke productnaam
    // Voor nu niet meer nodig. Handig om te laten staan als we ergens anders nog een id generator nodig hebben.
    // function makeid(length) {
    //     var result = '';
    //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     var charactersLength = characters.length;
    //     for (var i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() *
    //             charactersLength));
    //     }
    //     return result;
    // }

    // async function addGrocery() {
    //     const id = makeid(5)
    //     await setDoc(doc(db, "Winkelwagen", id), {
    //         productName: id,
    //         timeStamp: Math.floor(Date.now() / 1000)
    //     });
    // }

    return (
        <div>
            <BarcodeScanner />
            {/* <button onClick={addGrocery}>voeg product toe</button> */}
        </div>
    )
}

export default Scanner

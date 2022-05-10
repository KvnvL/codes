import { Link } from "react-router-dom";
import { collection, onSnapshot, doc, increment, updateDoc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../firebase-config";

const Payment = () => {
    const [data, setData] = useState([]);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        // TO-DO over zetten naar persoonlijke data
        const data = collection(db, "Users", user.uid, "Winkelwagen-Data");
        const unsub = onSnapshot(data, (querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ ...doc.data(), id: doc.id });
            });
            setData(dataArray);
        });
        return () => unsub();
    }, []);

    const payClear = () => {
        data.map((data) => {
            deleteDoc(doc(db, "Winkelwagen-Data", data.id));
        })
    }

    return (
        <div className="payment">
            <h1>Betalen</h1>
            <div className="payment-details">
                <div className="cart-card-top">
                    <div className="card-top-left">
                        <h3>Totaal: </h3>
                        {data.map((data) => (
                            <h3 key={data.id}>€{data.totaalprijs}</h3>
                        ))}
                    </div>
                    <div className="card-top-right">
                        <h3>Producten: </h3>
                        {data.map((data) => (
                            <h3 key={data.id}>{data.totaalproducten}</h3>
                        ))}
                    </div>
                </div>
                <div className="cart-card-bottom">
                    <select name="methods" id="choseMethod">
                        <option value="ideal">iDeal</option>
                        <option value="paypal">PayPal</option>
                        <option value="contant">Contant</option>
                    </select>
                    <Link to="/uitchecken"><button onClick={payClear}><i className="fas fa-credit-card"></i> Betalen</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Payment

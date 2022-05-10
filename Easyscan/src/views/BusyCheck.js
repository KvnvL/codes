import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import Searchbar from "../components/Searchbar";

function BusyCheck() {

  const [overlayState, setoverlayState] = useState(false);
  const overlayToggle = () => {
    setoverlayState(!overlayState);
  };

  const [busy, setbusy] = useState([]);

  useEffect(() => {
    const data = query(collection(db,"Drukte"), orderBy("afstand", "asc"))
    const unsub = onSnapshot(data, (querySnapshot) => {
      let busyArray = [];
      querySnapshot.forEach((doc) => {
        busyArray.push({ ...doc.data(), id: doc.id });
      });
      setbusy(busyArray);
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <Searchbar search="winkel" />
      <div id="busy">
        {busy.map((busy) => {
          return (
            <div className="busyWrapper" key={busy.naam} onClick={overlayToggle}>
              {" "}
              <h2 className="busy-name">{busy.naam}</h2>
              <div className="busy-img">
              <img src={busy.img} alt="" />
              </div>
              <h3 className="busy-distance">{busy.afstand}km</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default BusyCheck

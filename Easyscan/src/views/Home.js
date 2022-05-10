import Searchbar from "../components/Searchbar";
import CarouselAanbiedingen from "../components/CarouselAanbiedingen";
import CarouselRecepten from "../components/CarouselRecepten";
import CarouselReceptenVega from "../components/CarouselReceptenVega";
import CarouselFavorietenRecepten from "../components/CarouselFavorietenRecepten";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";

import { useState, useEffect } from "react";
import { doc, getDoc, onSnapshot, collection } from "firebase/firestore";
import { useHistory } from "react-router";


import { db } from "../firebase-config";
import { getAuth } from "@firebase/auth";
import spaarActie from "../img/spaarActie.png";

const Home = () => {
  const [users, setUsers] = useState([])
  const [userState, setUserState] = useState({})
  const [activeUser, setActiveUser] = useState([])
  const [receptState, setReceptState] = useState([])

  const auth = getAuth();
  const userId = auth.currentUser.uid;

  onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) {
      setUserState(false)
    } else {
      setUserState(true)

      users.map((user) => {
        if (auth.currentUser.uid === user.id) {
          setActiveUser(user)
        }
      })
    }
  })

  const history = useHistory();

  useEffect(() => {
    const data = collection(db, 'Users')
    const unsub = onSnapshot(data, (querySnapshot) => {
      let usersArray = []
      querySnapshot.forEach((doc) => {
        usersArray.push({ ...doc.data(), id: doc.id })
      })
      setUsers(usersArray)
    })

    const docRef = doc(db, "Users", userId)
    const asyncSnap = async () => {
      const docSnap = await getDoc(docRef)
      const docSnapData = docSnap.data().voorkeuren.vegetarisch
      setReceptState(docSnapData)
    }

    return () => unsub(), asyncSnap();

  }, [])

  const navSparen = () => {
    history.push("/spaarkaart")
  }

  function ReceptVoorkeur() {
    if (receptState) {
      return (
        <>
          <CarouselReceptenVega />
        </>
      )
    } else {
      return (
        <>
          <CarouselRecepten />
          <Link to="/recepten"><button className="button">Bekijk meer recepten &nbsp;<i className="fas fa-long-arrow-alt-right"></i></button></Link>
        </>
      )
    }

  }

  return (
    <div>
      <h1 key="greeting" id="homeGreeting">Hallo {activeUser.firstname}!</h1>
      <Searchbar search="product" />
      <img id="homeSpaaractie" src={spaarActie} alt="" onClick={navSparen} />
      <h2 className="homepage-title">Aanbiedingen</h2>
      <CarouselAanbiedingen />
      <Link to="/aanbiedingen"><button className="button">Bekijk meer aanbiedingen &nbsp;<i className="fas fa-long-arrow-alt-right"></i></button></Link>

      <h2 className="homepage-title">Aanbevolen Recepten</h2>

      <ReceptVoorkeur />

      <h2 className="homepage-title">Favoriete Recepten</h2>
      <CarouselFavorietenRecepten />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { addDoc, collection } from "firebase/firestore"
import { onSnapshot } from "firebase/firestore";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useHistory } from "react-router";

import { db } from '../firebase-config'
import { auth } from "../firebase-auth"
import undraw from "../img/login undraw.svg";

function LogIn() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMes, setErrorMes] = useState('');
  const [users, setUsers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const data = collection(db, 'Users')
    const unsub = onSnapshot(data, (querySnapshot) => {
      let usersArray = []
      querySnapshot.forEach((doc) => {
        usersArray.push({ ...doc.data() })
      })
      setUsers(usersArray)
      console.log(usersArray)
    })
    return () => unsub();
  }, [])

  const logIn = async (e) => {
    e.preventDefault();
    try {
      users.forEach((user) => {
        if (user.email === loginEmail) {
          console.log('User exists in db!')
          signInWithEmailAndPassword(auth, loginEmail, loginPassword);
          
          setLoginEmail('')
          setLoginPassword('')

          history.push("/")
        }
        else {
          setErrorMes("Inloggen mislukt. Probeer opnieuw")
          setLoginEmail('')
          setLoginPassword('')
        }
      })
    } catch (error) {
      setErrorMes(error.message);
      return
    }

  }

  return (
    <div className="login-user">
      <h1 id="loginh1">Log in</h1>
      <form onSubmit={logIn}>
        <div className="input-wrapper">
          <h3>E-mail:</h3>
          <input type="text" value={loginEmail} onChange={(event) => { setLoginEmail(event.target.value) }} />
        </div>
        <div className="input-wrapper">
          <h3>Wachtwoord:</h3>
          <input type="password" value={loginPassword} onChange={(event) => { setLoginPassword(event.target.value) }} />
        </div>
        <input type="submit" value="Log in"></input>
        <p id="loginText">Nieuw hier? <Link to="/registerUser">klik hier</Link> om een account aan te maken!</p>
        <p>{errorMes}</p>
        <img src={undraw} className="undrawlogin" alt="" />
      </form>
    </div>
  )
}

export default LogIn

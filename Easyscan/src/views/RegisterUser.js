import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, doc, collection, onSnapshot } from "firebase/firestore";
import { useHistory } from 'react-router';
import { auth } from '../firebase-auth'
import { db } from '../firebase-config'

function RegisterUser() {
  const [registerFirstName, setRegisterFirstName] = useState('')
  const [registerLastName, setRegisterLastName] = useState('')
  const [registerBirthday, setRegisterBirthday] = useState('')
  const [registerGender, setRegisterGender] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [errorMes, setErrorMes] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const data = collection(db, 'Users')
    const unsub = onSnapshot(data, (querySnapshot) => {
      let usersArray = []
      querySnapshot.forEach((doc) => {
        usersArray.push({ ...doc.data() })
      })
      setUsers(usersArray)
    })
    return () => unsub();
  }, [])

  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(async function (userCredential) {
        var userData = userCredential.user
        const docRef = await setDoc(doc(db, 'Users', userData.uid), {
          email: registerEmail,
          firstname: registerFirstName,
          lastname: registerLastName,
          uid: auth.currentUser.uid,
          allergie: {
            noten: false,
            gluten: false,
            pindas: false,
            koemelk: false,
            anders: '',
          },
          voorkeuren: {
            kalorieArm: false,
            geenSuiker: false,
            vegetarisch: false,
            veganistisch: false,
          },
          lite: false,
          loyaltyPoints: 0,
          profilePicture: "https://firebasestorage.googleapis.com/v0/b/budgetmart-f72ad.appspot.com/o/addProfilePhoto.png?alt=media&token=ede6bb56-4c06-4f3d-9398-4c2479396c84",
          birthday: registerBirthday,
          gender: registerGender,
          height: 0,
          weight: 0,
          boodschappenLijst: []
        })
      })
    } catch (error) {
      setErrorMes(error.message);
      return;
    }

    setRegisterEmail('')
    setRegisterPassword('')
    setRegisterFirstName('')
    setRegisterLastName('')
    setRegisterBirthday('')
    setRegisterGender('')

    history.push("/wizard")
  };

  return (
    <div className="register-user">
      <h1 id="createacc">Creëer Account</h1>
      <form onSubmit={register}>
        <div className="input-wrapper">
          <h3>Voornaam:</h3>
          <input type="text" placeholder="John" value={registerFirstName} onChange={(event) => { setRegisterFirstName(event.target.value) }} />
        </div>
        <div className="input-wrapper">
          <h3>Achternaam:</h3>
          <input type="text" placeholder="Doe" value={registerLastName} onChange={(event) => { setRegisterLastName(event.target.value) }} />
        </div>
        <div className="input-wrapper">
          <h3>Geboorte datum:</h3>
          <input type="date" placeholder="DD-MM-JJJJ" value={registerBirthday} onChange={(event) => { setRegisterBirthday(event.target.value) }} />
        </div>
        <div className="input-wrapper">
          <h3>E-mail:</h3>
          <input type="text" placeholder="johndoe@example.com" value={registerEmail} onChange={(event) => { setRegisterEmail(event.target.value) }} />
        </div>
        <div className="input-wrapper">
          <h3>Wachtwoord:</h3>
          <input type="password" value={registerPassword} onChange={(event) => { setRegisterPassword(event.target.value) }} />
        </div>
        <input type="submit" value="Creëren"></input>
        <p>{errorMes}</p>
      </form>
    </div>
  )
}

export default RegisterUser

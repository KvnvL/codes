import { applyActionCode } from "@firebase/auth"
import { Link } from "react-router-dom"
import '../component style/welcome.css'
import undrawWelkom from "../img/welkom undraw.svg"

function Welcome() {
    return (
        <div>
            <h1 className='welkomHeader'>Welkom!</h1>
            <p className='welkomBericht'>Om deze app volledig te gebruiken willen wij u vragen om <Link to="/logIn" className="welcome-page-link">in te loggen</Link> of als u nog geen account heeft er <Link to="/registerUser" className="welcome-page-link">een aan te maken</Link>!</p>
            <img src= {undrawWelkom} className="undrawWelkom" alt="" />
        </div>
    )
}

export default Welcome

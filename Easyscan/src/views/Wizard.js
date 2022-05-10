import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScannerLite from "../viewsLite/ScannerLite"
import HomeLite from "../viewsLite/HomeLite"
import HeaderMenu from "../views/HeaderMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../component style/wizzard.css";
// ...


const Wizard1 = () => {
  const [toggleAllergie, setToggleAllergie] = useState(false)
  const [q1, setq1] = useState(false)
  const [q2, setq2] = useState(false)
  const [q3, setq3] = useState(false)
  const [q4, setq4] = useState(false)
  const [q5, setq5] = useState(false)
  const [q6, setq6] = useState(false)
  const [q7, setq7] = useState(false)

  return (
    <Router basename="/easyscan">
      <Route path="/homelite" exact render={(name) => <HomeLite />} />
      <Route path="/" exact render={(name) => <HeaderMenu />} />
      <div id="wizzard">
        <div id="questions">
          <p>Heb je moeite met het zoeken van recepten?</p>
          <button onClick={() => { setq1(true) }} className={q1 ? "buttons ja active" : "buttons ja"}>Ja</button>
          <button onClick={() => { setq1(false) }} className={q1 ? "buttons nee" : "buttons nee active"}>nee</button>

          <p>Ontvang je graag suggesties op basis van je gescande producten?</p>
          <button onClick={() => { setq2(true) }} className={q2 ? "buttons ja active" : "buttons ja"}>Ja</button>
          <button onClick={() => { setq2(false) }} className={q2 ? "buttons nee" : "buttons nee active"}>nee</button>

          <p>Heb je allergieën?</p>
          <button onClick={() => { setq3(true);setToggleAllergie(true) }} className={q3 ? "buttons ja active" : "buttons ja"}>Ja</button>
          <button onClick={() => { setq3(false);setToggleAllergie(false) }} className={q3 ? "buttons nee" : "buttons nee active"}>nee</button>

          <div id="allergieenWrap" className={toggleAllergie ? "allergieToggle" : ""}>
            <input type="checkbox" name="vehicle1" value="noten" />
            <label for="vehicle1"> Noten allergie</label>
            <input type="checkbox" name="vehicle2" value="Bike" />
            <label for="vehicle1"> Lactose allergie</label>
            <input type="checkbox" name="vehicle3" value="Bike" />
            <label for="vehicle1"> Gluten allergie</label>
            <input type="checkbox" name="vehicle4" value="Bike" />
            <label for="vehicle1"> Vis en schaaldieren allergie</label>
            <input type="checkbox" name="vehicle4" value="Bike" />
            <input type="text" id="lname" name="lname" class="input" />
          </div>

          <p>Wil je graag weten in welke supermarkt het het minst druk is?</p>
          <button onClick={() => { setq4(true) }} className={q4 ? "buttons ja active" : "buttons ja"}>Ja</button>
          <button onClick={() => { setq4(false) }} className={q4 ? "buttons nee" : "buttons nee active"}>nee</button>

          <p>Ontdek je graag nieuwe en lekkere recepten?</p>
          <button onClick={() => { setq5(true) }} className={q5 ? "buttons ja active" : "buttons ja"}>Ja</button>
          <button onClick={() => { setq5(false) }} className={q5 ? "buttons nee" : "buttons nee active"}>nee</button>

          <p>Heb je dieet wensen?</p>
          <button onClick={() => { setq6(true) }} className={q6 ? "buttons ja active" : "buttons ja"}>Ja</button>
          <button onClick={() => { setq6(false) }} className={q6 ? "buttons nee" : "buttons nee active"}>nee</button>

          <p>Kun je jezelf wegwijs maken in de supermarkt?</p>
          <button onClick={() => { setq7(true) }} className={q7 ? "buttons ja active" : "buttons ja"}>Ja</button>
          <button onClick={() => { setq7(false) }} className={q7 ? "buttons nee" : "buttons nee active"}>nee</button>
        </div>

        <Link
          to="/"
          onClick={() => {
            let wizzard = document.getElementById("wizzard");
            wizzard.classList.add("gone");
          }}
        >
          <button class="buttons full">Full versie</button>
        </Link>
        <Link
          to="/homelite"
          onClick={() => {
            let wizzard = document.getElementById("wizzard");
            wizzard.classList.add("gone");
          }}
        >
          <button class="buttons lite">Lite versie</button>
        </Link>

        <button class="buttons verder">Verder</button>

      </div>
      <Route path="/scannerLite" exact render={(name) => <ScannerLite />} />
    </Router>
  );
};

export default Wizard1;

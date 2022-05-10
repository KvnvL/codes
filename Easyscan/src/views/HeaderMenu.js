import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-auth";
import { onAuthStateChanged } from "firebase/auth";

import scan from "../img/scan.png";
import cart from "../img/shopping-cart.png";

import Home from "./Home"
import ProductPage from "./ProductPage";
import ShoppingCart from "./ShoppingCart";
import Scanner from "./Scanner";
import ShoppingList from "./ShoppingList";
import ProfilePage from "./ProfilePage";
import BusyCheck from "./BusyCheck";
import Receipts from "./Receipts";
import RoutePlanner from "./RoutePlanner";
import SavingsCard from "./SavingsCard";
import Recipes from "./Recipes";
import RecipePage from "./RecipePage";
import SalePage from "./SalePage";
import Wizard from "./Wizard";
import homeLite from "../viewsLite/HomeLite"
import Payment from "./Payment";
import Paid from "./Paid";

const HeaderMenu = () => {
  const [menuToggleState, setMenuToggleState] = useState(false);
  const menuToggle = () => {
    setMenuToggleState(!menuToggleState);
  };

  const [userState, setUserState] = useState({})

  onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) {
      setUserState(false)
    } else {
      setUserState(true)
    }
  })

  return (
    <Router basename="/easyscan">
      <div className="Home">
        <div id="header">
          <div id="logoWrapper">
            <Link to="/">
              <h1 id="logo">EasyScan</h1>
            </Link>
          </div>
          <div id="shoppingCartWrapper">
            <Link to="/winkelwagen">
              <img src={userState ? cart : ""} alt="shopping cart" />
            </Link>
          </div>
          <div id="profielFotoWrapper">
            <Link to={userState ? "/profielPagina" : "/logIn"}>
              <i className="far fa-user"></i>
            </Link>
          </div>
        </div>

        <div id={userState ? "nav" : "no-display"}>
          <div id="homeButtonWrapper">
            <Link to="/">
              <i className="fa-solid fa-home"></i>
            </Link>
          </div>
          <Link to="/scanner">
            <div id="scanButtonWrapper">
              <img src={scan} id="scan" alt="" />
            </div>
          </Link>
          <div id="burgerWrapper">
            <div
              id="nav-icon3"
              className={menuToggleState ? "open" : ""}
              onClick={menuToggle}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div
          id={userState ? "navOverlay" : "no-display"}
          className={menuToggleState ? "menuToggle" : ""}
          onClick={menuToggle}
        >
          <div id="navOverlayGrid">
            <Link to="/drukteCheck" id="menuItem1">
              <div className="menuItem">
                <div className="menuItemIcon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="menuItemName">
                  <h4>Drukte check</h4>
                </div>
              </div>
            </Link>
            <Link to="/boodschappenlijst" id="menuItem2">
              <div className="menuItem">
                <div className="menuItemIcon">
                  <i className="fas fa-list-alt"></i>
                </div>
                <div className="menuItemName">
                  <h4>Boodschappenlijst</h4>
                </div>
              </div>
            </Link>
            <Link to="/routePlanner" id="menuItem3">
              <div className="menuItem">
                <div className="menuItemIcon">
                  <i className="fas fa-route"></i>
                </div>
                <div className="menuItemName">
                  <h4>Route planner</h4>
                </div>
              </div>
            </Link>
            <Link to="/spaarkaart" id="menuItem4">
              <div className="menuItem">
                <div className="menuItemIcon">
                  <i className="fas fa-stamp"></i>
                </div>
                <div className="menuItemName">
                  <h4>Spaarkaart</h4>
                </div>
              </div>
            </Link>
            <Link to="/recepten" id="menuItem5">
              <div className="menuItem">
                <div className="menuItemIcon">
                  <i className="fas fa-utensils"></i>
                </div>
                <div className="menuItemName">
                  <h4>Recepten</h4>
                </div>
              </div>
            </Link>
            <Link to="/bonnetjes" id="menuItem6">
              <div className="menuItem">
                <div className="menuItemIcon">
                  <i className="fas fa-receipt"></i>
                </div>
                <div className="menuItemName">
                  <h4>Bonnetjes</h4>
                </div>
              </div>
            </Link>
            <Link to="/aanbiedingen" id="menuItem7">
              <div className="menuItem">
                <div className="menuItemIcon">
                  <i className="fas fa-tag"></i>
                </div>
                <div className="menuItemName">
                  <h4>Aanbiedingen</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div id="content">
          <Route path="/" exact render={(name) => <Home />} />
          <Route path="/calvePindakaas" exact render={(name) => <ProductPage />} />
          <Route path="/buismansCappuccino" exact render={(name) => <ProductPage />} />
          <Route path="/choviallioli" exact render={(name) => <ProductPage />} />
          <Route path="/nakdfruitreep" exact render={(name) => <ProductPage />} />
          <Route path="/benandjerryijs" exact render={(name) => <ProductPage />} />
          <Route path="/neleman" exact render={(name) => <ProductPage />} />
          <Route path="/spekblokjes" exact render={(name) => <ProductPage />} />
          <Route path="/hakbonen" exact render={(name) => <ProductPage />} />
          <Route path="/scanner" exact render={(name) => <div id="fullScanner"> <Scanner /> </div>} />
          <Route path="/winkelwagen" exact render={(name) => <ShoppingCart />} />
          <Route path="/druktecheck" exact render={(name) => <BusyCheck />} />
          <Route path="/bonnetjes" exact render={(name) => <Receipts />} />
          <Route path="/routePlanner" exact render={(name) => <RoutePlanner />} />
          <Route path="/boodschappenlijst" exact render={(name) => <ShoppingList />} />
          <Route path="/spaarkaart" exact render={(name) => <SavingsCard />} />
          <Route path="/recepten" exact render={(name) => <Recipes />} />
          <Route path="/receptPagina" exact render={(name) => <RecipePage />} />
          <Route path="/profielpagina" exact render={(name) => <ProfilePage />} />
          <Route path="/volkorenpasta" exact render={(name) => <RecipePage />} />
          <Route path="/lasagne" exact render={(name) => <RecipePage />} />
          <Route path="/aanbiedingen" exact render={(name) => <SalePage />} />
          <Route path="/wizard" exact render={(name) => <Wizard />} />
          <Route path="/homelite" exact render={(name) => <homeLite />} />
          <Route path="/betalen" exact render={(name) => <Payment />} />
          <Route path="/uitchecken" exact render={(name) => <Paid />} />


        </div>
      </div>
    </Router>
  );
};

export default HeaderMenu;

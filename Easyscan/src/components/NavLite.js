import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../component style/navLite.css";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import SalePage from "../views/SalePage";
import ScannerLite from "../viewsLite/ScannerLite";
import BusyCheck from "../views/BusyCheck";
import RoutePlanner from "../views/RoutePlanner";
import ShoppingList from "../views/ShoppingList";
import ProfilePage from "../views/ProfilePage";
import ShoppingCart from "../views/ShoppingCart"

const NavLite = () => {
  const [profileActive, setProfileActive] = useState(false);
  const [cartActive, setCartActive] = useState(false)
  const [index, setIndex] = useState(2);

  const handleStepChange = (step) => {
    setIndex(step);
  };

  return (
    <Router basename="/easyscan">
    <div>
      <div className="headerLite">
        
        <h1>EasyScan</h1>
        <div>
         <Link to="/winkelwagen"> <i
            onClick={() => {
              
              setProfileActive(false);
              setCartActive(!cartActive);
              setIndex(10);
            }}
            className={cartActive ? "fas fa-shopping-cart liteActive" : "fas fa-shopping-cart"}
          ></i></Link>
          <Link to="/profielpagina"><i
            onClick={() => {
              setProfileActive(!profileActive);
              setCartActive(false);
              setIndex(10);
            }}
            className={profileActive ? "fas fa-user liteActive" : "fas fa-user"} 
          ></i></Link>
        </div>       
      </div>


      <nav className="navLite">
        <i
          className={index === 0 ? "fas fa-users liteActive" : "fas fa-users"}
          onClick={() => {
            setIndex(0);
            setProfileActive(false);
            setCartActive(false);
          }}
        ></i>
        <i
          className={
            index === 1 ? "fas fa-list-alt liteActive" : "fas fa-list-alt"
          }
          onClick={() => {
            setIndex(1);
            setProfileActive(false);
            setCartActive(false);
          }}
        ></i>
        <i
          className={index === 2 ? "fas fa-home liteActive" : "fas fa-home"}
          onClick={() => {
            setIndex(2);
            setProfileActive(false);
            setCartActive(false);
          }}
        ></i>
        <i
          className={index === 3 ? "fas fa-tag liteActive" : "fas fa-tag"}
          onClick={() => {
            setIndex(3);
            setProfileActive(false);
            setCartActive(false);
          }}
        ></i>
        <i
          className={index === 4 ? "fas fa-route liteActive" : "fas fa-route"}
          onClick={() => {
            setIndex(4);
            setProfileActive(false);
            setCartActive(false);
          }}
        ></i>
      </nav>

        <div className="content">
          <SwipeableViews className={profileActive ? "ProfileActive":"" + (cartActive ? "ProfileActive":"")} index={index} onChangeIndex={handleStepChange}>
            <div className="slide slide1">
              {" "}
              <div className="liteContent">
                <BusyCheck />
              </div>{" "}
            </div>
            <div className="slide slide2">
              {" "}
              <div className="liteContent">
                <ShoppingList />
              </div>{" "}
            </div>
            <div className="slide slide3">
              {" "}
              <ScannerLite />
            </div>
            <div className="slide slide4">
              {" "}
              <div className="liteContent">
                <SalePage />
              </div>{" "}
            </div>
            <div className="slide slide5">
              <div className="liteContent">
                <RoutePlanner />
              </div>
            </div>
          </SwipeableViews>
          <div id="liteProfile" className={profileActive ? "liteContent": "liteContent ProfileActive"}>
          <Route path="/profielpagina" exact render={(name) => <ProfilePage />} />
          </div>
          <div className={cartActive ? "liteContent": "liteContent ProfileActive"}>
          <Route path="/winkelwagen" exact render={(name) => <ShoppingCart />} />
          </div>
        </div>
      </div>
</Router>
  );
};

export default NavLite;

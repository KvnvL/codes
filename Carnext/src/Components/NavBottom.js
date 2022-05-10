import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { homeState, helperState, searchState } from '../Context';
import { ReactComponent as HomeSvg } from '../Images/homeSvg.svg';
import { ReactComponent as SearchSvg } from '../Images/searchSvg.svg';
import { ReactComponent as HandshakeSvg } from '../Images/handshakeSvg.svg';

const NavBottom = () => {
  const [filters, setFilters] = useState([]);
  const [sendTo, setSendTO] = useState("./helper")
  const {home, setHome} = useContext(homeState)
  const {helper, setHelper} = useContext(helperState)
  const {search, setSearch} = useContext(searchState)

  useEffect(()=>{
    checkUrl();
  })

const checkUrl = () =>{
  if (window.location.href.indexOf("helper") > -1 || window.location.href.indexOf("results") > -1 || window.location.href.indexOf("offers") > -1) {
    setHome(false)
    setHelper(true)
    setSearch(false)
  }

  else if (window.location.href.indexOf("search") > -1) {
    setHome(false)
    setHelper(false)
    setSearch(true)
  }

  else {
    setHome(true)
    setHelper(false)
    setSearch(false)
  }
}

const checkEmpty = () =>{
  onSnapshot(
      collection(db, "filters"), (snapshot) => {
          let filterArray = []
          snapshot.forEach((doc) => {
              filterArray.push({...doc.data(), docId: doc.id});
          })
          setFilters(filterArray.sort((a,b) => a.id > b.id))
      })
      if(filters === ""){
        setSendTO("./helper")
      }
      else{
        setSendTO("./results")
      }
    }
  
  return (
    <div id='navBottom'>
    <Link to="./"><HomeSvg className='navsvg' onClick={()=>{setHome(true); setHelper(false); setSearch(false)}} stroke={home ? "#3E67EE" : "#1E1E1E" }  /></Link>
    <Link to={sendTo}><HandshakeSvg className='navsvg' onClick={()=>{checkEmpty(); setHome(false); setHelper(true); setSearch(false)}} fill={helper ? "#3E67EE" : "#1E1E1E" }  /></Link>
    <Link to="./search"><SearchSvg className='navsvg' onClick={()=>{setHome(false); setHelper(false); setSearch(true)}} fill={search ? "#3E67EE" : "#1E1E1E" }  /></Link>
    </div>
  )
}

export default NavBottom
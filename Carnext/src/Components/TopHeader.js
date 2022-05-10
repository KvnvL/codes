import React, { useContext, useEffect, useState } from 'react'
import logo from '../Images/logo-2.png';
import arrowBack from '../Images/arrow-back.svg';
import { Link, useNavigate } from 'react-router-dom';
import { homeState, helperState, searchState } from '../Context';

function TopHeader() {

  const {home, setHome} = useContext(homeState)
  const {helper, setHelper} = useContext(helperState)
  const {search, setSearch} = useContext(searchState)

  const navigate = useNavigate();
  function prevPage() {
    navigate(-1)
  }

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

  return (
    <div className='header'>
      <img src={arrowBack} alt="" className={(window.location.href.indexOf("helper") > -1 
      || window.location.href.indexOf("results") > -1 
      || window.location.href.indexOf("offers") > -1 
      || window.location.href.indexOf("reviews") > -1
      || window.location.href.indexOf("search") > -1) ? 'arrowBack' : 'noDisplay'} onClick={prevPage} />
       <img src={logo} alt="" className='logo' />
    </div>
  )
}

export default TopHeader
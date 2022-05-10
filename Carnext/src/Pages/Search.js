import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchSvg } from '../Images/searchSvg.svg';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebase-config';
import Verify from '../Images/high-quality.png';

const Search = () => {
  const [offers, setOffers] = useState([]);

  //Inladen offers
  useEffect(() => [
    onSnapshot(
      collection(db, "offers"), (snapshot) => {
        let offersArray = []
        snapshot.forEach((doc) => {
          offersArray.push({ ...doc.data(), id: doc.id });
        })
        setOffers(offersArray.sort((a, b) => a.price > b.price));
      }
    )
  ])

  //Test functie voor push notificatie
  // function vibrate(e) {
  //   e.preventDefault();
  //   console.log('vibrate')
  //   Notification.requestPermission(function(result) {
  //     if (result === 'granted') {
  //       navigator.serviceWorker.ready.then(function(registration) {
  //         registration.showNotification('There are new offers', {
  //           body: 'Check out the new offers that match your results!',
  //           icon: './Images/192x192.png',
  //           vibrate: [200, 100, 200, 100, 200, 100, 200],
  //           tag: 'vibration-sample'
  //         });
  //       });
  //     }
  //   });
  // }

  return (
    <div id='search-page'>
      <h1>Search</h1>
      <div id='search-field'>
        <div id='search-input'>
          <input type="text" placeholder='Search by brand, model, etc' />
          <button><SearchSvg id='search-svg' fill='#ffffff' /></button>
        </div>
        <div id='search-filter'>
          <button>Filter</button>
        </div>
      </div>
      <h2><span>{offers.length}</span> Cars found</h2>
      <div className='offers-wrapper'>
        {/* Alle offers tonen */}
        {offers.map((offer) => {
          return (
            <div className='offer-card' key={offer.id}>
              <img src={Verify} className={offer.verify ? "verify" : "no-show"} alt="" />
              <img src={offer.image} alt="offer image" />
              <div className='inner-offer'>
                <div className='inner-top'>
                  <div className='inner-top-left'>
                    <div className='result-name'>{offer.brand} {offer.type}</div>
                    <div className='result-build'>{offer.engine}</div>
                  </div>
                  <div className='offer-price'>
                    € {offer.price},-
                  </div>
                </div>
                <div className='inner-bottom'>
                  <div>{offer.location} ({offer.state})</div>
                  <div className='inner-bottom-right'>
                    <div>{offer.buildMonth}/{offer.buildYear}</div>
                    <div>{offer.mileage}km</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search
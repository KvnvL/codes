import React, { useEffect, useState } from 'react';
import { collection, onSnapshot} from "firebase/firestore";
import { db } from '../firebase-config';
import Verify from '../Images/high-quality.png';

const Offers = () => {
    const [filters, setFilters] = useState([])
    const [offers, setOffers] = useState([]);
    const [filterOffers, setFilterOffers] = useState([]);

    //Inladen van verschillende databases
    useEffect(() => {
        onSnapshot(
            collection(db, "offerFilter"), (snapshot) => {
                let filterArray = []
                snapshot.forEach((doc) => {
                    filterArray.push({...doc.data(), docId: doc.id});
                })
                setFilters(filterArray.sort((a,b) => a.id > b.id))
            }
        )
        onSnapshot(
            collection(db, "offers"), (snapshot) => {
                let offersArray = []
                snapshot.forEach((doc) => {
                    offersArray.push({...doc.data(), id: doc.id});
                })
                setOffers(offersArray.sort((a,b) => a.price > b.price));

                //Offers filteren obv filter data
                let filtering= offers.filter(function(item) {
                    return item.brand == filters[0].value && item.type == filters[1].value;
                })
                setFilterOffers(filtering) 
                let filterCount = filterOffers.length;
                if(filterCount === 1){
                    window.location.reload();
                    console.log("reload")
                    filterCount+=1;
                }           
            }
        )
    })

    // function filtering(){
    //     // cars.map((car) => {
    //     //     console.log(car.model)
    //     // })
    //     console.log(filters)
    // }

  return (
    <div className='offers'>
        <h1>Offers</h1>
        <div className='filters-wrapper'>
            <div id='filters'>
                {filters != '' ?
                filters.map((filter) => {
                    return (
                        <div className='filter' key={filter.id}>
                            <div className='filter-name'>{filter.name}</div>
                        </div>
                    )      
                                  
                })
                : <h3>No Filters</h3>}
            </div>
        </div>
        <h2><span>{filterOffers.length}</span> Cars found</h2>
        <div className='results-wrapper'>
            {/* Alle gefilterde offers tonen */}
            {filterOffers != '' ? filterOffers.map((offer) => {
                return(
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
            //Zijn de offers nog niet gefilterd dan een spinner tonen
            }): <div class="sk-chase">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                </div>}
        </div>
    </div>
  )
}

export default Offers

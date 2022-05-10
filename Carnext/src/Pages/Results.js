import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { collection, onSnapshot, doc, deleteDoc, setDoc, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';

const Results = () => {
    const [filters, setFilters] = useState([]);
    const [offerFilters, setOfferFilters] = useState([]);
    const [reviewFilters, setReviewFilters] = useState([]);
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        //Inladen verschillende databases
        onSnapshot(
            collection(db, "filters"), (snapshot) => {
                let filterArray = []
                snapshot.forEach((doc) => {
                    filterArray.push({...doc.data(), docId: doc.id});
                })
                setFilters(filterArray.sort((a,b) => a.id > b.id ? 1 : -1))
                //Checken of alle filters gevonden zijn en dan pagina reloaden om results te laden
                if(filters.length === 10){
                    window.location.reload();
                }
            }
        )
        onSnapshot(
            collection(db, "offerFilter"), (snapshot) => {
                let filterArray = []
                snapshot.forEach((doc) => {
                    filterArray.push({...doc.data(), docId: doc.id});
                })
                setOfferFilters(filterArray.sort((a,b) => a.id > b.id ? 1 : -1))
            }
        )
        onSnapshot(
            collection(db, "reviewFilter"), (snapshot) => {
                let filterArray = []
                snapshot.forEach((doc) => {
                    filterArray.push({...doc.data(), docId: doc.id});
                })
                setReviewFilters(filterArray.sort((a,b) => a.id > b.id ? 1 : -1))
            }
        )
        onSnapshot(
            collection(db, "cars"), (snapshot) => {
                let carsArray = []
                snapshot.forEach((doc) => {
                    carsArray.push({...doc.data(), id: doc.id});
                })
                setCars(carsArray.sort((a,b) => a.rating < b.rating))

                //Filteren van offers als alle filters doorgekomen zijn
                if(filters.length == 11){
                    let filtering= cars.filter(function(item) {
                        return item.fromPrice > filters[0].value && item.fromPrice < filters[1].value && 
                        (item.fuel == filters[4].value || filters[4].value == '') && 
                        (item.transmission == filters[5].value || filters[5].value == '') && 
                        item.space >= filters[6].value &&
                        item.seats >= filters[7].value 
                        // (item.model == filters[9].value || filters[9].value == '')
                        ;
                    });
                    let newFilter = filtering.filter(function(item) {
                        return((filters[9].value.includes(item.model) || filters[9].value == "idk") && (filters[10].value.includes(item.brand) || filters[10].value == "idk"))
                    })
                    setFilteredCars(newFilter);
                }              
            }
        )
        //Legen van offer filters database
        offerFilters.map((filter) => {
            deleteDoc(doc(db, 'offerFilter', String(filter.docId)))
        })
        //Legen van review filters database
        reviewFilters.map((filter) => {
            deleteDoc(doc(db, 'reviewFilter', String(filter.docId)))
        })
    })

    // function filtering(){
    //     // cars.map((car) => {
    //     //     console.log(car.model)
    //     // })
    //     console.table(filters.sort((a,b) => a.id > b.id ? 1 : -1))
    // }

    //Functie voor het neerzetten van aantal sterren obv waarde uit database
    const looping = (result) => {
        var res = (result.rating - Math.floor(result.rating)) !== 0; 
        const stars =[];
        //Is het getal een kommagetal
        if(res){
            for(var i = 1; i < result.rating; i++){
                stars.push(<FaStar className='FaStar' key={i+'0'} />)
            }
            for(var k = 0; k < 1; k++){
                stars.push(<FaStarHalfAlt className='FaStar' key={k+ '1'} />)
            }
            if(result.rating < 5){
                for(var j = 0; j < (5 - result.rating - 1); j++){
                    stars.push(<FaRegStar className='FaStar' key={j+'2'} />)
                }
            }
        //Is het geen kommagetal
        }else{
            for(var i = 0; i < result.rating; i++){
                stars.push(<FaStar className='FaStar' key={i+'0'} />)
            }
            if(result.rating < 5){
                for(var j = 0; j < (5 - result.rating); j++){
                    stars.push(<FaRegStar className='FaStar' key={j+'2'} />)
                }
            }
        }
        return stars;
    }

    // async function deleteFilter(id) {
    //     await deleteDoc(doc(db, 'filters', id))
    // }

    //Functie voor het verzenden van offer filterdata obv geklikte auto
    async function offerFilter(brand, type){
        console.log(brand + ' ' + type)
        const docRef = await addDoc(collection(db, "offerFilter"), {
            id: 0,
            name: brand,
            value: brand
          });
        const docRef2 = await addDoc(collection(db, "offerFilter"), {
            id: 1,
            name: type,
            value: type
        });
    }

    //funtie voor het verzenden van review filterdata obv geklikte auto
    async function reviewFilter(type, brand, image, rating, year){
        const docRef = await addDoc(collection(db, "reviewFilter"), {
            id: 0,
            type: type,
            brand: brand,
            image: image,
            rating: rating,
            year: year
        });
    }

  return (
    <div className='results'>
        <h1>Results</h1>
        <div className='filters-wrapper'>
            <div id='filters'>
                {filters.length== 11 ?
                filters.map((filter) => {
                    if(filter.value === ''){

                    }else{
                        return (
                            <div className='filter' key={filter.docId}>
                                <div className='filter-name'>{filter.name}</div>   
                                {/* <div className='filter-remove' onClick={() => deleteFilter(filter.id)}>X</div>  */}
                            </div>
                        )
                    }          
                })
                : <h3>No Filters</h3>}
            </div>
            {/* <div className='change-filters' onClick={filtering}>
                Console log
            </div> */}
        </div>
        <h2><span>{filteredCars.length}</span> Cars found</h2>
        <div className='results-wrapper'>
            {/* Alle auto's tonen die voldoen aan de filters */}
            {filteredCars != '' ? filteredCars.map((car) => {
                return (
                    <div className='result-card' key={car.id}>
                        <img src={car.image} alt="car image" />
                        <div className='inner-result'>
                            <div className='inner-top'> 
                                <div className='inner-top-left'>
                                    <div className='result-name'>{car.brand} {car.type}</div>
                                    <div className='result-build'>{car.buildYear}</div>  
                                </div>
                                <img src={car.medal} alt="" />
                            </div>
                            <div className='inner-bottom'>
                                <div className='bottom-left'>
                                    <div className='from-text'>
                                        Available from
                                    </div>
                                    <div>€{car.fromPrice},-</div>
                                </div>
                                <div className='bottom-right'>
                                    <span>{looping(car)} {car.rating}/5</span>
                                    <Link to={'/reviews'} onClick={() => reviewFilter(car.type, car.brand, car.image, car.rating, car.buildYear)}>Read reviews</Link>
                                </div>
                            </div>
                            <Link to={'/offers'}><div className='compare-button' onClick={() => offerFilter(car.brand, car.type)}>Compare Offers <FaTag /></div></Link>
                        </div>
                    </div>
                )
            // Als de auto's nog niet zijn geladen een spinner laten zien
            }): <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>}
        </div>
    </div>
  )
}

export default Results
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../firebase-config';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
    const [review, setReview] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [reviewFilters, setReviewFilters] = useState([]);
    //filterwaarde uit db omzetten in variabele
    let cartype = reviewFilters.map((reviewFilters) => {return(reviewFilters.type)})

    //Inladen vershillende databases
    useEffect(() => {
        onSnapshot(
            collection(db, "reviewFilter"), (snapshot) => {
                let filterArray2 = []
                snapshot.forEach((doc) => {
                    filterArray2.push({...doc.data(), docId: doc.id});
                })
                setReviewFilters(filterArray2.sort((a,b) => a.id > b.id ? 1 : -1))           
            }
        )
        onSnapshot(
            collection(db, "reviews"), (snapshot) => {
                let reviewArray = []
                snapshot.forEach((doc) => {
                    reviewArray.push({ ...doc.data(), docId: doc.id });
                })
                setReview(reviewArray.sort((a, b) => a.id > b.id ? 1 : -1))
                //Reviews filteren obv geklikte auto
                let filtering = review.filter(function(item) {
                    return (item.car === String(cartype))
                })
                setFilteredReviews(filtering)
            }
        )
    });

    //Functie voor het neerzetten van aantal sterren obv waarde uit database
    const looping = (result) => {
        var res = (result - Math.floor(result)) !== 0;
        const stars = [];
        if (res) {
            for (var i = 1; i < result; i++) {
                stars.push(<FaStar className='FaStar' key={i + '0'} />)
            }
            for (var k = 0; k < 1; k++) {
                stars.push(<FaStarHalfAlt className='FaStar' key={k + '1'} />)
            }
            if (result.rating < 5) {
                for (var j = 0; j < (5 - result - 1); j++) {
                    stars.push(<FaRegStar className='FaStar' key={j + '2'} />)
                }
            }
        } else {
            for (var i = 0; i < result; i++) {
                stars.push(<FaStar className='FaStar' key={i + '0'} />)
            }
            if (result < 5) {
                for (var j = 0; j < (5 - result); j++) {
                    stars.push(<FaRegStar className='FaStar' key={j + '2'} />)
                }
            }
        }
        return stars;
    }
    return (
        <div>
        {reviewFilters.map((reviewFilters) => {
            return(
                <div>
            <img src={reviewFilters.image} id="reviewBanner" onClick={()=>{console.log(review)}}></img>
            <div id="reviewDetails">
                <h2>{reviewFilters.brand} {reviewFilters.type}</h2>
                <span>{looping(reviewFilters.rating)} {reviewFilters.rating}/5</span>
                <p>{reviewFilters.year}</p>
            </div>
            </div>
            )
                })}


            <div id="reviews">
                <h2 className='title'>Reviews</h2>
                {/* Alle gefilterde reviews tonen */}
                {filteredReviews.map((review) => {
                    return (
                        <div className="reviewCard" key={review.id}>
                            <div className="reviewCardUser">
                                <img src={review.userimage} alt="" />
                                <h3>{review.username}</h3>
                            </div>
                            <span>{looping(review.overall)} {review.overall}/5</span>
                            <p>"{review.description}"</p>
                            <div className="reviewRating">
                                <h3>{review.ratingone[0]} </h3><span>{looping(review.ratingone[1])} {review.ratingone[1]}/5</span>
                                <h3>{review.ratingthree[0]} </h3><span>{looping(review.ratingthree[1])} {review.ratingthree[1]}/5</span>
                                <h3>{review.ratingtwo[0]} </h3><span>{looping(review.ratingtwo[1])} {review.ratingtwo[1]}/5</span>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Reviews
import React, { useState, useEffect } from "react";
import { collection, addDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";
import Question6 from "./Questions/Question6";
import Question7 from "./Questions/Question7";
import Question8 from "./Questions/Question8";
import Question9 from "./Questions/Question9";
import Question10 from "./Questions/Question10";
import { useNavigate } from "react-router-dom";
import {
  maxPrice,
  minPrice,
  carUse,
  fuelType,
  transmissiontype,
  trunkSpace,
  passengerNumber,
  features,
  bodyType,
  carBrands,
  aspects,
} from "../Context";

const Helper = () => {
  //usestate array for filters
  const [filters, setFilters] = useState([]);
  //usestate for knowing which question we are on
  const [questionNumber, setQuestionNumber] = useState(1);

  let navigate = useNavigate();

  //usestates for global states
  const [maxprice, setMaxprice] = useState(50000);
  const [minprice, setMinprice] = useState(0);
  const [aspect, setAspect] = useState([]);
  const [caruse, setCaruse] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [trunkspace, setTrunkspace] = useState();
  const [passengers, setPassengers] = useState(2);
  const [featureList, setFeatureList] = useState([]);
  const [bodytype, setBodytype] = useState([]);
  const [brands, setBrands] = useState([]);

  //array for filter names
  const names = [
    "From: €" + minprice,
    "Under: €" + maxprice,
    "Aspects",
    caruse + " drives",
    fuel,
    transmission,
    trunkspace + "L trunkspace",
    passengers + " seats",
    "Features",
    "Body type",
    "Car brand",
  ];

  //array for filter values
  const values = [
    minprice,
    maxprice,
    aspect,
    caruse,
    fuel,
    transmission,
    trunkspace,
    passengers,
    featureList,
    bodytype,
    brands,
  ];

  //get all filter docs
  useEffect(() => {
    onSnapshot(
        collection(db, "filters"), (snapshot) => {
            let filterArray = []
            snapshot.forEach((doc) => {
                filterArray.push({...doc.data(), docId: doc.id});
            })
            setFilters(filterArray.sort((a,b) => a.id > b.id))
        })
        filters.map((filter) => { // delete all docs
          deleteDoc(doc(db, 'filters', String(filter.docId)))
      })
      })

  
//add all filters apart
  const add = async () => {
    for (var i = 0; i < 11; i++) {
      await addDoc(collection(db, "filters"), {
        id: i,
        name: names[i],
        value: values[i],
      });
    }
  };

  return (
    <div>
    {/*get all global states*/}
      <maxPrice.Provider value={{ maxprice, setMaxprice }}>
        <minPrice.Provider value={{ minprice, setMinprice }}>
          <aspects.Provider value={{ aspect, setAspect }}>
            <carUse.Provider value={{ caruse, setCaruse }}>
              <fuelType.Provider value={{ fuel, setFuel }}>
                <transmissiontype.Provider
                  value={{ transmission, setTransmission }}
                >
                  <trunkSpace.Provider value={{ trunkspace, setTrunkspace }}>
                    <passengerNumber.Provider
                      value={{ passengers, setPassengers }}
                    >
                      <features.Provider
                        value={{ featureList, setFeatureList }}
                      >
                        <bodyType.Provider value={{ bodytype, setBodytype }}>
                          <carBrands.Provider value={{ brands, setBrands }}>
                            <h1>
                              Question{" "}
                              <span id="activeQuestion">{questionNumber}</span>{" "}
                              of 10
                            </h1>
                            <div>
                            {/*change component on questionumber*/}
                              {questionNumber === 1 ? <Question1 /> : null}
                              {questionNumber === 2 ? <Question2 /> : null}
                              {questionNumber === 3 ? <Question3 /> : null}
                              {questionNumber === 4 ? <Question4 /> : null}
                              {questionNumber === 5 ? <Question5 /> : null}
                              {questionNumber === 6 ? <Question6 /> : null}
                              {questionNumber === 7 ? <Question7 /> : null}
                              {questionNumber === 8 ? <Question8 /> : null}
                              {questionNumber === 9 ? <Question9 /> : null}
                              {questionNumber === 10 ? <Question10 /> : null}
                            </div>
                            <div id="helperButtonWrapper">
                              <div
                                className={ // no previous button on question 1
                                  questionNumber === 1
                                    ? "helperButton hidden"
                                    : "helperButton" 
                                }
                                id="previous"
                                onClick={() => {
                                  setQuestionNumber(questionNumber - 1); // go to previous question
                                }}
                              >
                                <h3>
                                  <FaAngleLeft
                                    className="helperButtonArrow"
                                    size={25}
                                  />
                                  Previous
                                </h3>
                              </div>

                              <div
                                className="helperButton"
                                id="next"
                                onClick={() => {
                                  questionNumber === 10 // add all filters to collection and go to /results when on question 10
                                    ? add() && navigate("/results")
                                    : setQuestionNumber(questionNumber + 1); 
                                    questionNumber === 4 && fuel === "electric"
                                    ? setQuestionNumber(questionNumber + 2) && setTransmission("automatic") // skip question 5 when electric is choosen in question 4
                                    : setQuestionNumber(questionNumber + 1) 
                                    
                                }}
                              >
                                <h3>
                                  {questionNumber === 10 // change next to see results on question 10
                                    ? "See results"
                                    : "Next"}
                                  <FaAngleRight
                                    className="helperButtonArrow"
                                    size={25}
                                  />
                                </h3>
                              </div>
                            </div>
                          </carBrands.Provider>
                        </bodyType.Provider>
                      </features.Provider>
                    </passengerNumber.Provider>
                  </trunkSpace.Provider>
                </transmissiontype.Provider>
              </fuelType.Provider>
            </carUse.Provider>
          </aspects.Provider>
        </minPrice.Provider>
      </maxPrice.Provider>
    </div>
  );
};

export default Helper;

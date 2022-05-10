import React, { useContext, useState } from "react";
import { bodyType } from "../../Context";

import { ReactComponent as Hatchback } from "../../Images/hatchback.svg";
import { ReactComponent as Sedan } from "../../Images/sedan.svg";
import { ReactComponent as Station } from "../../Images/station.svg";
import { ReactComponent as Suv } from "../../Images/suv.svg";
import { ReactComponent as Crossover } from "../../Images/crossover.svg";
import { ReactComponent as Micro } from "../../Images/micro.svg";
import { ReactComponent as Coupe } from "../../Images/coupe.svg";
import { ReactComponent as Truck } from "../../Images/truck.svg";
import { ReactComponent as Cabriolet } from "../../Images/cabriolet.svg";
import { ReactComponent as Questionmark } from "../../Images/questionmark.svg";

const Question9 = () => {
  // get global state
  const { bodytype, setBodytype } = useContext(bodyType);

  // checks if item is already in the array (so yes then delete, no then add)
  const checkItem = (name) => {
    if (!bodytype.includes(name)) {
      console.log(bodytype);
      setBodytype((oldList) => [...oldList, name]);
      console.log(bodytype);
    } else if (bodytype.includes(name)) {
      console.log(bodytype);
      var listIndex = bodytype.indexOf(name);
      console.log(listIndex);
      bodytype.splice(listIndex, 1);
      console.log(bodytype);
    }
  };

  //useStates for css
  const [hatchback, setHatchback] = useState(false);
  const [sedan, setSedan] = useState(false);
  const [station, setStation] = useState(false);
  const [suv, setSuv] = useState(false);
  const [crossover, setCrossover] = useState(false);
  const [micro, setMicro] = useState(false);
  const [cabriolet, setCabriolet] = useState(false);
  const [coupe, setCoupe] = useState(false);
  const [truck, setTruck] = useState(false);

  const [idk, setIdk] = useState(false);
  return (
    <div id="question9">
      <h2 className="questionTitle">
        Which <span className="questionHighlight">features</span> would you like
        to have?
      </h2>

      <div id="question9Wrapper">
        <div
          className="optionCard"
          onClick={() => { 
            checkItem("hatchback"); // sets value
            setHatchback(!hatchback); // changes useState for css
          }}
        >
          <Hatchback
            fill={hatchback ? "var(--blue)" : "var(--black)"} // changes css 
            className="optionCardImg"
          />
          <h2 className={hatchback ? "optionCardActive" : null}>Hatchback</h2> {/*changes css */}
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("sedan");
            setSedan(!sedan);
          }}
        >
          <Sedan
            fill={sedan ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={sedan ? "optionCardActive" : null}>Sedan</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("station");
            setStation(!station);
          }}
        >
          <Station
            fill={station ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={station ? "optionCardActive" : null}>Station</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("suv");
            setSuv(!suv);
          }}
        >
          <Suv
            fill={suv ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={suv ? "optionCardActive" : null}>Suv</h2>
        </div>

        <div
        className="optionCard"
        onClick={() => {
          checkItem("crossover");
          setCrossover(!crossover);
        }}
      >
        <Station
          fill={crossover ? "var(--blue)" : "var(--black)"}
          className="optionCardImg"
        />
        <h2 className={crossover ? "optionCardActive" : null}>Crossover</h2>
      </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("micro");
            setMicro(!micro);
          }}
        >
          <Micro
            fill={micro ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={micro ? "optionCardActive" : null}>Micro</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("cabriolet");
            setCabriolet(!cabriolet);
          }}
        >
          <Cabriolet
            fill={cabriolet ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={cabriolet ? "optionCardActive" : null}>Cabriolet</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("coupe");
            setCoupe(!coupe);
          }}
        >
          <Coupe
            fill={coupe ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={coupe ? "optionCardActive" : null}>Coupe</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("truck");
            setTruck(!truck);
          }}
        >
          <Truck
            fill={truck ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={truck ? "optionCardActive" : null}>Truck</h2>
        </div>

        

        <div
          className="optionCard"
          onClick={() => {
            checkItem("idk");
            setIdk(!idk);
          }}
        >
          <Questionmark
            fill={idk ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
            id="idkImg"
          />
          <h2 id="smallertext" className={idk ? "optionCardActive" : null}>I don't know</h2>
        </div>
      </div>
    </div>
  );
};

export default Question9;

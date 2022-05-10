import React, { useContext, useState } from "react";
import { carBrands } from "../../Context";
import { ReactComponent as Questionmark } from "../../Images/questionmark.svg";
import { ReactComponent as Audi } from "../../Images/audi.svg";
import { ReactComponent as Bmw } from "../../Images/bmw.svg";
import { ReactComponent as Cadillac } from "../../Images/cadillac.svg";
import Ford from "../../Images/ford.png";
import Honda from "../../Images/honda.png";
import Mazda from "../../Images/mazda.png";
import { ReactComponent as Mercedes } from "../../Images/mercedes.svg";
import Nissan from "../../Images/nissan.png";

const Question10 = () => {
   // get global state
  const { brands, setBrands } = useContext(carBrands);

  // checks if item is already in the array (so yes then delete, no then add)
  const checkItem = (name) => {
    if (!brands.includes(name)) {
      console.log(brands);
      setBrands((oldList) => [...oldList, name]);
      console.log(brands);
    } else if (brands.includes(name)) {
      console.log(brands);
      var listIndex = brands.indexOf(name);
      console.log(listIndex);
      brands.splice(listIndex, 1);
      console.log(brands);
    }
  };

 //useStates for css
  const [idk, setIdk] = useState(false);
  const [audiState, setAudi] = useState(false);
  const [bmwState, setBmw] = useState(false);
  const [cadillacState, setCadillac] = useState(false);
  const [fordState, setFord] = useState(false);
  const [hondaState, setHonda] = useState(false);
  const [mazdaState, setMazda] = useState(false);
  const [mercedesState, setMercedes] = useState(false);
  const [nissanState, setNissan] = useState(false);

  return (
    <div id="question10">
      <h2 className="questionTitle">
        Do you want a specific <span className="questionHighlight">car brand</span>?
      </h2>

      <div id="question10Wrapper">
        <div
          className="optionCard"
          onClick={() => {
            checkItem("idk"); // sets value
            setIdk(!idk); // changes useState for css
          }}
        >
          <Questionmark
            fill={idk ? "var(--blue)" : "var(--black)"} // changes css 
            className="optionCardImg"
            id="idkImg"
          />
          <h2 className={idk ? "optionCardActive" : null}>All brands</h2> {/*changes css */}
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("audi");
            setAudi(!audiState);
          }}
        >
          <Audi
            fill={audiState ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={audiState ? "optionCardActive" : null}>Audi</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("bmw");
            setBmw(!bmwState);
          }}
        >
          <Bmw
            fill={bmwState ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={bmwState ? "optionCardActive" : null}>BMW</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("cadillac");
            setCadillac(!cadillacState);
          }}
        >
          <Cadillac
            fill={cadillacState ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={cadillacState ? "optionCardActive" : null}>
            Cadillac
          </h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("ford");
            setFord(!fordState);
          }}
        >
          <img src={Ford} alt="" className="optionCardImg2" />
          <h2 className={fordState ? "optionCardActive" : null}>Ford</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("honda");
            setHonda(!hondaState);
          }}
        >
          <img src={Honda} alt="" className="optionCardImg2" />
          <h2 className={hondaState ? "optionCardActive" : null}>Honda</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("mazda");
            setMazda(!mazdaState);
          }}
        >
          <img src={Mazda} alt="" className="optionCardImg2" />
          <h2 className={mazdaState ? "optionCardActive" : null}>mazda</h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("mercedes");
            setMercedes(!mercedesState);
          }}
        >
          <Mercedes
            fill={mercedesState ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2
            id="mercedes"
            className={mercedesState ? "optionCardActive" : null}
          >
            Mercedes-benz
          </h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            checkItem("nissan");
            setNissan(!nissanState);
          }}
        >
          <img src={Nissan} alt="" className="optionCardImg2" />
          <h2 className={nissanState ? "optionCardActive" : null}>Nissan</h2>
        </div>
      </div>
    </div>
  );
};

export default Question10;

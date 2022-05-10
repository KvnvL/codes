import React, { useContext, useState } from "react";
import { transmissiontype } from "../../Context";
import { ReactComponent as AutomaticImg } from "../../Images/automatic.svg";
import { ReactComponent as ManualImg } from "../../Images/manual.svg";
import { ReactComponent as Questionmark } from "../../Images/questionmark.svg";

const Question5 = () => {
  // get global state
  const { transmission, setTransmission } = useContext(transmissiontype);

  // usestate for if the input has been checked
  const [clickable, setClickable] = useState(transmission);

  return (
    <div id="question5">
      <h2 className="questionTitle">
        Do you want a <span className="questionHighlight">manual</span> or an <span className="questionHighlight">automatic</span> car?
      </h2>

      <div id="question5Wrapper">
        <div
          className="optionCard"
          onClick={() => { // sets value
            setTransmission("automatic");
            setClickable("automatic");
          }}
        >
          <AutomaticImg
            fill={clickable === "automatic" ? "var(--blue)" : "var(--black)"} // changes css if checked
            className="optionCardImg"
          />
          <h2 className={clickable === "automatic" ? "optionCardActive" : null }>
            Automatic
          </h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            setTransmission("manual");
            setClickable("manual");
          }}
        >
          <ManualImg
            fill={clickable === "manual" ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 className={clickable === "manual" ? "optionCardActive" : null}>
            Manual
          </h2>
        </div>

        <div
          className="optionCard"
          onClick={() => {
            setTransmission("idk");
            setClickable("idk");
          }}
        >
          <Questionmark
            fill={clickable === "idk" ? "var(--blue)" : "var(--black)"}
            className="optionCardImg"
          />
          <h2 id="smallertext" className={clickable === "idk" ? "optionCardActive" : null}>
            I don't know
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Question5;

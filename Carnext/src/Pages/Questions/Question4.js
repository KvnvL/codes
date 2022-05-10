import React, { useContext, useState } from "react";
import { fuelType } from "../../Context";

const Question4 = () => {
  // get global state
  const { fuel, setFuel } = useContext(fuelType);

  // usestate for if the input has been checked
  const [clickable, setClickable] = useState(fuel);
  return (
    <div id="question4">
      <h2 className="questionTitle">
        Do you want your car to be <span className="questionHighlight">electric</span>? Or would you like something else?
      </h2>

      <div id="question3Wrapper">
        <label
          onClick={() => { // sets value
            setFuel("electric");
            setClickable("electric");
          }}
          className="container"
        >
          <input
            disabled={clickable === "electric" ? false : true} //disables if checked
            checked={
              clickable === "electric" || clickable === "all" ? true : false //checks if value is small or all
            }
            type="checkbox"
          />
          <p>Electric</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setFuel("petrol");
            setClickable("petrol");
          }}
          className="container"
        >
          <input
            disabled={clickable === "petrol" ? false : true}
            checked={clickable === "petrol" || clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>Petrol</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setFuel("hybrid");
            setClickable("hybrid");
          }}
          className="container"
        >
          <input
            disabled={clickable === "hybrid" ? false : true}
            checked={clickable === "hybrid" || clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>
            Hybrid <span id="detail">(petrol and electric)</span>
          </p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setFuel("diesel");
            setClickable("diesel");
          }}
          className="container"
        >
          <input
            disabled={clickable === "diesel" ? false : true}
            checked={clickable === "diesel" || clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>Diesel</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setFuel("all");
            setClickable("all");
          }}
          className="container"
        >
          <input
            disabled={clickable === "all" ? false : true}
            checked={clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>It don't matter to me</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setFuel("idk");
            setClickable("idk");
          }}
          className="container"
        >
          <input
            disabled={clickable === "idk" ? false : true}
            checked={clickable === "idk" ? true : false}
            type="checkbox"
          />
          <p>I don't know yet</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default Question4;

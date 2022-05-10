import React, { useContext, useState } from "react";
import { carUse } from "../../Context";

const Question3 = () => {
  // get global state
  const { caruse, setCaruse } = useContext(carUse);

  // usestate for if the input has been checked
  const [clickable, setClickable] = useState(caruse);

  return (
    <div id="question3">
      <h2 className="questionTitle">
        What are you going to <span className="questionHighlight">use</span> your car the <span className="questionHighlight">most</span> for?
      </h2>

      <div id="question3Wrapper">
        <label
          onClick={() => { // sets value
            setCaruse("small");
            setClickable("small");
          }}
          className="container"
        >
          <input
            disabled={clickable === "small" ? false : true} //disables if checked
            checked={clickable === "small" || clickable === "all" ? true : false} //checks if value is small or all
            type="checkbox"
          />
          <p>Small trips in the city</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => { 
            setCaruse("long");
            setClickable("long");
          }}
          className="container"
        >
          <input
            disabled={clickable === "long" ? false : true}
            checked={clickable === "long" || clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>Long trips on the highway</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>
        <label
          onClick={() => { 
            setCaruse("medium");
            setClickable("medium");
          }}
          className="container"
        >
          <input
            disabled={clickable === "medium" ? false : true}
            checked={clickable === "medium" || clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>Medium trips to nearby city's</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>
        <label
          onClick={() => { 
            setCaruse("fun");
            setClickable("fun");
          }}
          className="container"
        >
          <input
            disabled={clickable === "fun" ? false : true}
            checked={clickable === "fun" || clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>Fun drives :)</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => { 
            setCaruse("all");
            setClickable("all");
          }}
          className="container"
        >
          <input
            disabled={clickable === "all" ? false : true}
            checked={clickable === "all" ? true : false}
            type="checkbox"
          />
          <p>All of the above</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setCaruse("idk");
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

export default Question3;

import React, { useContext, useState } from "react";
import { trunkSpace } from "../../Context";

const Question6 = () => {
  // get global state
  const { trunkspace, setTrunkspace } = useContext(trunkSpace);

  // usestate for if the input has been checked
  const [clickable, setClickable] = useState(trunkspace);

  return (
    <div id="question6">
      <h2 className="questionTitle">
        How much <span className="questionHighlight">trunk space</span> do you
        need?
      </h2>

      <div id="question6Wrapper">
        <label
          onClick={() => { // sets value
            setTrunkspace(120);
            setClickable(120);
          }}
          className="container"
        >
          <input
            disabled={clickable === 120 ? false : true} //disables if checked
            checked={clickable === 120 ? true : false} //checks if value is small or all
            type="checkbox"
          />
          <p>
            Minimal 120 litres <span id="detail">(1 suitcase)</span>
          </p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setTrunkspace(240);
            setClickable(240);
          }}
          className="container"
        >
          <input
            disabled={clickable === 240 ? false : true}
            checked={clickable === 240 ? true : false}
            type="checkbox"
          />
          <p>
            Minimal 240 litres <span id="detail">(2 suitcase)</span>
          </p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setTrunkspace(360);
            setClickable(360);
          }}
          className="container"
        >
          <input
            disabled={clickable === 360 ? false : true}
            checked={clickable === 360 ? true : false}
            type="checkbox"
          />
          <p>
            Minimal 360 litres <span id="detail">(3 suitcase)</span>
          </p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setTrunkspace(480);
            setClickable(480);
          }}
          className="container"
        >
          <input
            disabled={clickable === 480 ? false : true}
            checked={clickable === 480 ? true : false}
            type="checkbox"
          />
          <p>
            Minimal 480 litres <span id="detail">(4 suitcase)</span>
          </p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setTrunkspace(600);
            setClickable(600);
          }}
          className="container"
        >
          <input
            disabled={clickable === 600 ? false : true}
            checked={clickable === 600 ? true : false}
            type="checkbox"
          />
          <p>
            Minimal 600 litres <span id="detail">(5 suitcase)</span>
          </p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label
          onClick={() => {
            setTrunkspace(800);
            setClickable(800);
          }}
          className="container"
        >
          <input
            disabled={clickable === 800 ? false : true}
            checked={clickable === 800 ? true : false}
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

export default Question6;

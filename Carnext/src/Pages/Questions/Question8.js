import React, { useContext } from "react";
import { features } from "../../Context";

const Question8 = () => {
  // get global state
  const { featureList, setFeatureList } = useContext(features);

  // checks if item is already in the array (so yes then delete, no then add)
  const checkItem = (name) => {
    if (!featureList.includes(name)) {
      console.log(featureList);
      setFeatureList((oldList) => [...oldList, name]);
      console.log(featureList);
    } else if (featureList.includes(name)) {
      console.log(featureList);
      var listIndex = featureList.indexOf(name);
      console.log(listIndex);
      featureList.splice(listIndex, 1);
      console.log(featureList);
    }
  };

  return (
    <div id="question8">
      <h2 className="questionTitle">
        Which <span className="questionHighlight">features</span> would you like to have?
      </h2>

      <div id="question8Wrapper">
        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("android"); // sets value
            }}
            type="checkbox"
          />
          <p>Android auto</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("apple");
            }}
            type="checkbox"
          />
          <p>Apple carplay</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("satnav");
            }}
            type="checkbox"
          />
          <p>Navigation</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("parkingsensors");
            }}
            type="checkbox"
          />
          <p>Parking sensors</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("cruisecontroll");
            }}
            type="checkbox"
          />
          <p>Cruise control</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("airco");
            }}
            type="checkbox"
          />
          <p>Airconditioning</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("bluetooth");
            }}
            type="checkbox"
          />
          <p>Bluetooth</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("heatedseats");
            }}
            type="checkbox"
          />
          <p>Heated seats</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("cooledseats");
            }}
            type="checkbox"
          />
          <p>Cooled seats</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("soundsystem");
            }}
            type="checkbox"
          />
          <p>Sound system</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("heatedsteeringwheel");
            }}
            type="checkbox"
          />
          <p>Heated steeringwheel</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("dab");
            }}
            type="checkbox"
          />
          <p>DAB+ Radio</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>

        <label className="containerFeatures">
          <input
            onClick={() => {
              checkItem("wifi");
            }}
            type="checkbox"
          />
          <p>Wi-Fi hotspot</p>
          <div className="checkboxBgc"></div>
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default Question8;

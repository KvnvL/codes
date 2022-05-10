import React, { useContext, useState } from "react";
import Slider from "@mui/material/Slider";
import { maxPrice } from "../../Context";
import { minPrice } from "../../Context";

const Question1 = () => {
  // get global states
  const { maxprice, setMaxprice } = useContext(maxPrice);
  const { minprice, setMinprice } = useContext(minPrice);

  //value for popup
  const valuetext = (value) => {
    return `${value}°C`;
  };

  const [value, setValue] = useState([minprice, maxprice]);

  //changes the values
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinprice(newValue[0]);
    setMaxprice(newValue[1]);
  };

  return (
    <div id="question1">
      <h2 className="questionTitle">
        What is your <span className="questionHighlight">price range</span>?
      </h2>
      <Slider // slider component from mui
        sx={{ width: "90%", marginLeft: "5%" }}
        getAriaLabel={() => "Price"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={50000}
        step={100}
      />

      <div id="question1Wrapper">
        <div className="currency-wrap">
          <span className="currency-code">€</span>
          <input
            type="number"
            max={50000}
            min={0}
            value={minprice}
            onChange={(e) => { //connects the minimum price with the slider
              setValue([e.target.value, value[1]]);
              setMinprice(e.target.value);
            }}
          />
        </div>
        <div className="currency-wrap">
          <span className="currency-code">€</span>
          <input
            type="number"
            max={50000}
            min={0}
            value={maxprice}
            onChange={(e) => { //connects the maximum price with the slider
              setValue([value[0], e.target.value]);
              setMaxprice(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Question1;

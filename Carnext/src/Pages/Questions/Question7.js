import React, { useContext, useState } from "react";
import { passengerNumber } from "../../Context";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Question7 = () => {
  // get global state
  const { passengers, setPassengers } = useContext(passengerNumber);

  // usestate for value
  const [value, setValue] = useState(passengers);

  // sets the values on change
  const handleChange = (event) => {
    setValue(event.target.value);
    setPassengers(value);
  };

  return (
    <div id="question7">
      <h2 className="questionTitle">
        How many <span className="questionHighlight">passengers</span> do you
        want to transport most of the time in your car?
      </h2>
      <div id="question7Wrapper">
        <div id="question7Select">
          <Box sx={{ minWidth: 140 }}> {/* option component */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Passengers
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Passengers"
                onChange={handleChange}
              > {/* option values */}
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <label
          onClick={() => {  // sets value to idk
            setPassengers(1);
          }}
          id="question7IDK"
        >
          <input type="checkbox" name="" id="idk" onClick={()=> {setPassengers(9)}} />I don't know yet
        </label>
      </div>
    </div>
  );
};

export default Question7;

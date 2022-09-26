
import axios from "axios";
import React, { useState } from "react";
import './App.css';

function App() {


  const apiKey = "78e903be2250679e7c3b1a8c20b6ceb6"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
    setInputCity("");
  }


  return (
   
    <div className="container">

      <div className="container-box">
        <h1 className="title">Weather App</h1>

        <div className="input-box">
          <center>
          <input type="text"
          placeholder="Enter City Name"
            value={inputCity}
            onChange={handleChangeInput} /><br></br>
          <button className="btn" type="button"
            onClick={handleSearch}
          >Search</button>
          </center>
        </div>
      </div>
   

      {Object.keys(data).length > 0 &&
 
        <div className="report">

          <div className="report-box">
            <img className="weatherImage"
              src="./images/icon-weather.png"/>
<div className="data">
            <h5 className="weatherCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
         </div>
          </div>
        </div>
      
      }

    </div>
  );
}

export default App;
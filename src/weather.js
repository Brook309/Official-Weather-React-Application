import React, { useState } from "react";
import axios from "axios";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import WeatherTemp from "./weatherTempCon";
import WeatherDate from "./weatherdate";
import Forecast from "./weatherForecast";
import "@fortawesome/fontawesome-free/css/all.min.css";

function weather(props) {
  let [cityData, newCityInfo] = useState({ updateLaunch: false });
  let [cityChoosen, liveInput] = useState(props.CurrentLocation);
  /*let [cityChoos, live] = useState("");*/
  function cityDataLaurchLive(response) {
    console.log(response.data);
    newCityInfo({
      updateLaunch: true,
      cityname: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      img: response.data.condition.icon_url,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function CityTarget(event) {
    console.log(event);
    const apiKey = "84docd86f0tb9793eacd34e7e56f1b9f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${event}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(cityDataLaurchLive);
  }

  function getCity(event) {
    event.preventDefault();
    CityTarget(cityChoosen);
  }

  function getInput(event) {
    liveInput(event.target.value);
  }

  if (cityData.updateLaunch) {
    return (
      <div className="container">
        {/*Search Bar*/}
        <form onSubmit={getCity}>
          <MDBInputGroup>
            <MDBInput label="Enter City Name" onChange={getInput} />
            <MDBBtn rippleColor="dark">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInputGroup>
        </form>
        {/*Search Bar*/}
        {/*premade city search*/}
        <div className="premade-city-search">
          <a
            className="city-name-one name-adjust"
            href="/"
            onClick={null}
            id="TokyoSearch">
            Tokyo
          </a>
          <div className="line-breaker">|</div>
          <a
            className="city-name-two name-adjust"
            href="/"
            onClick={null}
            id="MelbSearch">
            Melbourne
          </a>
          <div className="line-breaker">|</div>
          <a
            className="city-name-three name-adjust"
            href="/"
            onClick={null}
            id="HonoluluSearch">
            Honolulu
          </a>
        </div>
        {/* premade city search end*/}
        {/* main display panel */}
        <div className="main-display-panel">
          <h1
            className="main-diplay-city-title"
            id="main-title-display-search-city">
            {cityData.cityname}
          </h1>
          <div className="icon-weather">
            <img
              src={cityData.img}
              alt="weather icon"
              className="main-display-weather-icon"
              id="icon-main-display"
            />
          </div>
          <ol className="the-upper-part-of-the-main-display-panel">
            <li className="side-panel alt-upper"></li>
            <li className="clock-calander alt-upper">
              <span id="theWeekDayDisplay">
                <WeatherDate date={cityData.date} />
              </span>{" "}
              |<span id="theTimeHourDisplay"> {cityData.date.getHours()}</span>:
              <span id="theTimeMinDisplay">{cityData.date.getMinutes()}</span>
              {/* <span id="the-am-pm">AM</span>*/}
            </li>
            <li className="main-temp-panel alt-upper">
              <WeatherTemp data={cityData.temperature} />
            </li>
          </ol>
          <ol className="the-lower-part-of-the-main-display-panel">
            <li className="the-precipition alt-lower">
              Humidity:
              <span id="the-main-precipition">{cityData.humidity}</span>%
            </li>
            <li className="the-wind alt-lower">
              Wind: <span id="the-main-wind-speed">{cityData.wind}</span> km/h
            </li>
          </ol>
          <div
            className="the-description"
            id="main-display-weather-description">
            {cityData.description}
          </div>
        </div>
        <div className="alt row align-items-start">
          <Forecast data="hi" />
        </div>
      </div>
    );
  } else {
    const apiKey = "84docd86f0tb9793eacd34e7e56f1b9f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.CurrentLocation}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(cityDataLaurchLive);
  }

  /*
  
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.log("Geolocation not supported");
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function error() {
  console.log("Unable to retrieve your location");
}
  /*let [cityData, newCityInfo] = useState("");
  }
  `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  
    function GottenGeo(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    navigator.geolocation.getCurrentPosition({ GottenGeo });
  
  
  */
}

export default weather;

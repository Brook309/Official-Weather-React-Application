import React, { useState } from "react";
import axios from "axios";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

function weather(props) {
  console.log(navigator.geolocation.getCurrentPosition);

  let [cityData, newCityInfo] = useState({ updateLaunch: false });

  function cityDataLaurchLive(response) {
    newCityInfo({
      updateLaunch: true,
      cityname: response.data.city,
      temperature: response.data.temperature.current,
      img: response.data.condition.icon_url,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (cityData.updateLaunch) {
    return (
      <div className="htmlCode">
        {/*Search Bar*/}
        <MDBInputGroup>
          <MDBInput label="Enter City Name" onClick={""} />
          <MDBBtn rippleColor="dark">
            <MDBIcon icon="search" />
          </MDBBtn>
        </MDBInputGroup>
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
              <span id="theWeekDayDisplay">Monday</span> |
              <span id="theTimeHourDisplay"> 00</span>:
              <span id="theTimeMinDisplay">0</span>
              <span id="the-am-pm">AM</span>
            </li>
            <li className="main-temp-panel alt-upper">
              <span id="Main-display-temp">
                {Math.floor(cityData.temperature)}
              </span>
              <span className="Celeus">
                <a
                  className="Celeus-change-colour plus"
                  href="/"
                  onClick={null}
                  id="Celeus-link">
                  °C
                </a>
              </span>
              <span className="Celeus-farinhite-line-breaker">|</span>
              <span className="farinhite">
                <a
                  className="Farinhite-change-colour"
                  href="/"
                  onClick={null}
                  id="Farinhite-link">
                  °F
                </a>
              </span>
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
      </div>
    );
  } else {
    let city = "paris";
    const apiKey = "84docd86f0tb9793eacd34e7e56f1b9f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.CurrentLocation}&key=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(cityDataLaurchLive);

    return "wait";
  }

  /*let [cityData, newCityInfo] = useState("");
  }*/
}

export default weather;

import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function Weather() {
  return (
    <MDBContainer fluid>
      <div className="containment">
        {/*premade city search*/}
        <div class="premade-city-search">
          <a
            class="city-name-one name-adjust"
            href="/"
            onClick={null}
            id="TokyoSearch">
            Tokyo
          </a>
          <div class="line-breaker">|</div>
          <a
            class="city-name-two name-adjust"
            href="/"
            onClick={null}
            id="MelbSearch">
            Melbourne
          </a>
          <div class="line-breaker">|</div>
          <a
            class="city-name-three name-adjust"
            href="/"
            onClick={null}
            id="HonoluluSearch">
            Honolulu
          </a>
        </div>
        {/* premade city search end*/}
        {/* main display panel */}
        <div class="main-display-panel">
          <h1
            class="main-diplay-city-title"
            id="main-title-display-search-city">
            Loading
          </h1>
          <div class="icon-weather">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="weather icon"
              class="main-display-weather-icon"
              id="icon-main-display"
            />
          </div>
          <ol class="the-lower-part-of-the-main-display-panel">
            <li class="the-precipition alt-lower">
              Humidity: <span id="the-main-precipition">0</span>%
            </li>
            <li class="the-wind alt-lower">
              Wind: <span id="the-main-wind-speed">0</span> km/h
            </li>
          </ol>
          <div class="the-description" id="main-display-weather-description">
            Loading
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Weather;

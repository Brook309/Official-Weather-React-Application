import React, { useState } from "react";
import "./weatherForcastLiveData.js";
import "./index.css";
import { MDBCol } from "mdb-react-ui-kit";

function weatherForcastLiveData(props) {
  function timeConvertDay(props) {
    let days = new Date(props.data * 1000);
    let Date = days.getDay();
    let theDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return theDays[day];
  }

  return (
    <MDBCol size="4">
      <div className="forcastLiveHere">
        <h1 className="mini forecast-day">{timeConvertDay()}</h1>
        <img className="space-for-icon" src={null} />
        <h2 className="mini temp-bottom-panel" id="theH2TempDisplay">
          {Math.floor(props.temperature.max)}°C
        </h2>
      </div>
    </MDBCol>
  );
}

export default weatherForcastLiveData;

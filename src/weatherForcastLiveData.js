import React from "react";
import "./index.css";

function weatherForcastLiveData(props) {
  function timeConvertDay() {
    let date = new Date(props.data.time * 1000);
    let Day = date.getDay();
    let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return Days[Day];
  }

  return (
    <div className="forcastLiveHere">
      <h1 className="mini forecast-day">{timeConvertDay()}</h1>
      <img className="space-for-icon" src={props.data.condition.icon_url} />
      <h2 className="mini temp-bottom-panel" id="theH2TempDisplay">
        {Math.floor(props.data.temperature.maximum)}°C
      </h2>
    </div>
  );
}

export default weatherForcastLiveData;

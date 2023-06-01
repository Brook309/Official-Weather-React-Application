import React from "react";
import "./index.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function weatherForcast(props) {
  let ForecastData = [
    {
      name: "one",
      value: 1,
    },
    {
      name: "two",
      value: 2,
    },
    {
      name: "three",
      value: 3,
    },
  ];

  return (
    <MDBContainer>
      <div className="forcastHere">
        <ul>
          <MDBRow>
            {ForecastData.map(function (ForecastData, index) {
              return (
                <MDBCol size="md">
                  <div key={index} className="forcastData">
                    <h1 className="mini forecast-day">{ForecastData.name}</h1>
                    <img className="space-for-icon" src={null} />
                    <h2
                      className="mini temp-bottom-panel"
                      id="theH2TempDisplay">
                      12°F
                    </h2>
                  </div>
                </MDBCol>
              );
            })}
          </MDBRow>
        </ul>
      </div>
    </MDBContainer>
  );
}
export default weatherForcast;

/*  
<h1 class="mini forecast-day">hi</h1>
                <img class="space-for-icon" src=
                  theForcastObject.condition.icon_url>
              <h2 class="mini temp-bottom-panel" id="theH2TempDisplay">12°F</h2>
let elements = [
    {
      name: "one",
      value: 1,
    },
    {
      name: "two",
      value: 2,
    },
    {
      name: "three",
      value: 3,
    },
  ];*/

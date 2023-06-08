import React, { useState, useEffect } from "react";
import WeatherForcastLiveData from "./weatherForcastLiveData.js";
import "./index.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";

function weatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcastApplied, infoCollected] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function infoTransfer(response) {
    setLoaded(true);
    infoCollected(response.data.daily);
  }

  if (loaded) {
    return (
      <MDBContainer>
        <div className="forcastHere">
          <ul>
            <MDBRow className="alt row align-items-start mb-3">
              <MDBCol size="2">
                <WeatherForcastLiveData data={forcastApplied[0]} />
              </MDBCol>
              <MDBCol size="2">
                <WeatherForcastLiveData data={forcastApplied[1]} />
              </MDBCol>
              <MDBCol size="2">
                <WeatherForcastLiveData data={forcastApplied[2]} />
              </MDBCol>
              <MDBCol size="2">
                <WeatherForcastLiveData data={forcastApplied[3]} />
              </MDBCol>
              <MDBCol size="2">
                <WeatherForcastLiveData data={forcastApplied[4]} />
              </MDBCol>
            </MDBRow>
          </ul>
        </div>
      </MDBContainer>
    );
  } else {
    console.log(props.data);
    const apiKey = "84docd86f0tb9793eacd34e7e56f1b9f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(infoTransfer);
    return null;
  }
}
export default weatherForcast;

/* 

 let [forcastApplied, infoCollected] = useState("");

  console.log(forcastApplied.data);

  function infoTransfer(event) {
    console.log(event);
    infoCollected(event);
  }
console.log(forcastApplied.data);

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
  ];

   let ForecastData = [
    forcastApplied
  ];
  
  
  let ForecastData = [
    {
      forcastApplied,
      name: "hi",
      img: "hi",
      Temp: 1,
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
  
OG
  let [forcastApplied, infoCollected] = useState(
   `response.data.daily${[""]}`
 );

 console.log(forcastApplied);
 console.log(forcastApplied[0]);
 console.log(forcastApplied[0].temperature);
 console.log(forcastApplied);

 function infoTransfer(response) {
   console.log(response.data);
   infoCollected(response.data.daily);
 }

 const apiKey = "84docd86f0tb9793eacd34e7e56f1b9f";
 let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data}&key=${apiKey}&units=metric`;
 axios.get(apiUrl).then(infoTransfer);

 let ForecastData = [
   {
     name: forcastApplied[0],
     img: "hi",
     Temp: 1,
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
         <MDBRow className="alt row align-items-start mb-3">
           {ForecastData.map(function (ForecastData, index) {
             return (
               <MDBCol key={index} size="4">
                 <div  className="forcastLiveHere">
                   <h1 className="mini forecast-day">{ForecastData.name}</h1>
                   <img className="space-for-icon" src={null} />
                   <h2 className="mini temp-bottom-panel" id="theH2TempDisplay">
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


 other solution!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let [forcastApplied, infoCollected] = useState("");
  /*
  console.log(forcastApplied[0].temperature);
  console.log(forcastApplied[0].temperature);
  
  import "./weatherForcastLiveData.js";
  console.log(response.data.daily[0].temperature.day);
    infoCollected(response.data.daily);

  console.log(forcastApplied);
  console.log(infoCollected);

  function infoTransfer(response) {
    let ForecastData = [
      {
        name: response.data.daily[0].temperature.day,
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

    infoCollected(
      <MDBContainer>
        <div className="forcastHere">
          <ul>
            <MDBRow>
              {ForecastData.map(function (ForecastData, index) {
                return (
                  <MDBCol key={index} size="md">
                    <div className="forcastData">
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

  const apiKey = "84docd86f0tb9793eacd34e7e56f1b9f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(infoTransfer);

  return forcastApplied;
}
export default weatherForcast;

  */

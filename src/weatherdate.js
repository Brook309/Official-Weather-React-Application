import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function weatherDate(props) {
  let writtenDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(props.date);
  console.log(props.date.getDay());
  let day = writtenDays[props.date.getDay()];

  return { day };
}
export default weatherDate;
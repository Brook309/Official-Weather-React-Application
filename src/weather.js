import React from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBInput,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./index.css";

function Weather() {
  return (
    <MDBInputGroup>
      <MDBInput label="Search" />
      <MDBBtn rippleColor="dark">
        <MDBIcon icon="search" />
      </MDBBtn>
    </MDBInputGroup>
  );
}

export default Weather;

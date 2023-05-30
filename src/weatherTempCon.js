import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function weatherTemp(props) {
  let [a, b] = useState("F");
  let [c, d] = useState("");
  console.log((props.data * 9) / 5 + 32);

  function fConverTemp(event) {
    event.preventDefault();
    console.log((props.data * 9) / 5 + 32);
    b((props.data * 9) / 5 + 32);
  }

  function celConverTemp(event) {
    event.preventDefault();
    d(props.data);
  }

  if (a === "F") {
    return (
      <div className="weatherTemp">
        <span id="Main-display-temp">{Math.floor(props.data)}</span>
        <span className="Celeus">
          <a
            className="Celeus-change-colour"
            href="/"
            onClick={celConverTemp}
            id="Celeus-link">
            °C
          </a>
        </span>
        <span className="Celeus-farinhite-line-breaker">|</span>
        <span className="farinhite">
          <a
            className="Farinhite-change-colour plus"
            href="/"
            onClick={fConverTemp}
            id="Farinhite-link">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemp">
        <span id="Main-display-temp">{Math.floor(a)}</span>
        <span className="Celeus">
          <a
            className="Celeus-change-colour"
            href="/"
            onClick={celConverTemp}
            id="Celeus-link">
            °C
          </a>
        </span>
        <span className="Celeus-farinhite-line-breaker">|</span>
        <span className="farinhite">
          <a
            className="Farinhite-change-colour plus"
            href="/"
            onClick={fConverTemp}
            id="Farinhite-link">
            °F
          </a>
        </span>
      </div>
    );
  }
}

export default weatherTemp;

/*  let [a, b] = useState("celeuis");
  let [c, d] = useState(props.data);

  function fConverTemp(props) {
    console.log((props.data * 9) / 5 + 32);
    b((props.data * 9) / 5 + 32);
  }

  function celConverTemp(event) {
    event.preventDefault();
    d(props.data);
  }

og checkpoint
  import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function weatherTemp(props) {
  let [a, b] = useState("F");
  let [c, d] = useState("");
  console.log((props.data * 9) / 5 + 32);

  function fConverTemp(event) {
    event.preventDefault();
    console.log((props.data * 9) / 5 + 32);
    b((props.data * 9) / 5 + 32);
  }

  function celConverTemp(event) {
    event.preventDefault();
    d(props.data);
  }

  if (a === "F") {
    return (
      <div className="weatherTemp">
        <span id="Main-display-temp">{Math.floor(props.data)}</span>
        <span className="Celeus">
          <a
            className="Celeus-change-colour"
            href="/"
            onClick={celConverTemp}
            id="Celeus-link">
            °C
          </a>
        </span>
        <span className="Celeus-farinhite-line-breaker">|</span>
        <span className="farinhite">
          <a
            className="Farinhite-change-colour plus"
            href="/"
            onClick={fConverTemp}
            id="Farinhite-link">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemp">
        <span id="Main-display-temp">{Math.floor(a)}</span>
        <span className="Celeus">
          <a
            className="Celeus-change-colour"
            href="/"
            onClick={celConverTemp}
            id="Celeus-link">
            °C
          </a>
        </span>
        <span className="Celeus-farinhite-line-breaker">|</span>
        <span className="farinhite">
          <a
            className="Farinhite-change-colour plus"
            href="/"
            onClick={fConverTemp}
            id="Farinhite-link">
            °F
          </a>
        </span>
      </div>
    );
  }
}

export default weatherTemp;
 */

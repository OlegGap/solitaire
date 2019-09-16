import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Conditioner from "./components_old/Conditioner";
import Timer from "./components_old/Timer"; 
import HoverTabel from "./components_old/hoverTable/index.js";


ReactDOM.render(
  <Fragment>
    {/* <App name="Oleg" />
    <Conditioner />
    <p></p>
    <Timer />
   <HoverTabel /> */}
   <App />
  </Fragment>,
  document.getElementById("root")
);
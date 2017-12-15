import ReactDOM from "react-dom";
import React from "react";
import StyledDeviceMap from "./../components/DeviceMap";
import DeviceStatistics from "./../components/DeviceStatistics";
import "./../styles/global-styles";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<StyledDeviceMap />, document.querySelector("#map"));
  ReactDOM.render(<DeviceStatistics />, document.querySelector("#stats"));
});

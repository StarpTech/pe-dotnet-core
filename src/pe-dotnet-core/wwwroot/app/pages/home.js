import ReactDOM from "react-dom";
import React from "react";
import StyledDevice from "./../components/Device/StyledDevice";
import StyledDeviceMap from "./../components/DeviceMap/StyledDeviceMap";
import DeviceStatChart from "./../components/DeviceStatisticBarChart/DeviceStatisticBarChart";
import "./../styles/global-styles";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<StyledDevice name="1" />, document.querySelector("#app"));
  ReactDOM.render(<StyledDeviceMap />, document.querySelector("#map"));
  ReactDOM.render(<DeviceStatChart />, document.querySelector("#stats"));
});

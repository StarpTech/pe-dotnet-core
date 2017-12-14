import ReactDOM from 'react-dom';
import React from 'react';
import StyledDevice from './../components/Device/StyledDevice'
import './../styles/global-styles';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<StyledDevice name="1" />, document.querySelector('#app'));
});
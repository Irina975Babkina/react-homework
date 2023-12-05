import React from 'react';
import ReactDOM from 'react-dom';

import ReinbowFrame from './components/ReinbowFrame';

const colorsArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <ReinbowFrame colors = {colorsArr}>
    <div style={{fontSize:"30px", padding: "20px"}}>Hello!</div>
  </ReinbowFrame>
    
  , document.getElementById('container') 
);


import React from 'react';

import './MainBlock.css';

import DoubleButton from './DoubleButton';

import {withReinbowFrame} from './withReinbowFrame';

const colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

const DoubleButtonWithRF = withReinbowFrame(colors)(DoubleButton);

class MainBlock extends React.Component {

  createAlert = (num) => {
    if (num === 1) {
      alert("Автор произведения: Андрей Усачев")
    } 
    if (num === 2) {
      alert("Год написания: 2007")
    } 
  }

  render() {

    return (
      <div className='MainBlock'>
        <DoubleButtonWithRF 
          text = {this.props.text}
          caption1 ={this.props.caption1}
          caption2 ={this.props.caption2}
          cbPressed = {this.createAlert}
        />
      </div>
    )
  }
}

export default MainBlock;

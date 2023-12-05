import React from 'react';

import './DoubleButton.css';

class DoubleButton extends React.Component {

  createAlert1 = () => {
   this.props.cbPressed(1);
  }

  createAlert2 = () => {
    this.props.cbPressed(2);
   }
 
  render() {
    return (
      <div className='DoubleButton'>
        <input type="button" className='Button' value={this.props.caption1} onClick={this.createAlert1}/>
        <span>{this.props.text}</span>
        <input type="button" className='Button' value={this.props.caption2} onClick={this.createAlert2}/>
      </div>
    );
  }
}

export default DoubleButton;

import React from 'react';
import PropTypes from 'prop-types';
import './Br2jsx.css';

class Br2jsx extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {
    let lines = this.props.text.split(/<br *\/?>/);
    let jsxArr = [];
 
    
    
    for (let i = 0; i < lines.length; i += 1) {
      if (i){
        jsxArr.push(<br key={i}/>);
      }
      jsxArr.push(lines[i]);
    }
    
    return <div className='Wrapper'>{jsxArr}</div>;
  }
}

export default Br2jsx;

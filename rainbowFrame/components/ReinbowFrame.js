import React from 'react';
import PropTypes from 'prop-types';

class ReinbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    let code = this.props.children;
    this.props.colors.forEach(color => {code = <div style={{border:"solid 4px " + color, padding:"5px", display: "inline-block"}}>{code}</div>});

    return code;
  }
}

export default ReinbowFrame;

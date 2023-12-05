import React from 'react';

const withReinbowFrame = colors => Comp => props => {
  let code = <Comp{...props}/>;
  colors.forEach(color => {code = <div style={{border:"solid 4px " + color, padding:"5px", display: "inline-block"}}>{code}</div>});
  return code;
}

export {withReinbowFrame};


import React from 'react';

//propsChildren
const Study2 = ({children}) => {

const style = {
    border : '2px solid black',
    padding : '16px',
};

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Study2;


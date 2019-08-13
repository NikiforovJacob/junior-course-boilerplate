import React from "react";

const logRender = ({ componentName }) => {

  console.log('Component', componentName, 'rerendered');
  
  return (
    <div></div>    
  );
}

export default logRender;
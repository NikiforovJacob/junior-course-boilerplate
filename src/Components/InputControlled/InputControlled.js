import React from 'react';

import './InputControlled.css';

const InputControlled = (props) => {

  const { 
    prefix,
    name,
    onChange,
    value
  } = props;

  return (
    <label className='label'>
      {prefix}
      <input
        name={name}
        onChange={onChange}
        value={value}
        className='inputControlled'
      />
    </label>
  )
}

export default InputControlled;

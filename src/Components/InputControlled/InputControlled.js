import React from 'react';

import './InputControlled.css';

class InputControlled extends React.PureComponent {

  render() {
    const { 
      prefix,
      name,
      onChange,
      value
    } = this.props;

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
}

export default InputControlled;

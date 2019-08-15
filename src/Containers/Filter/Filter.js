import React from 'react';

import './Filter.css';

const Filter = (props) => {

  const { 
    handleChangeInputText, 
    handleSetFilter,
    filterValueFrom,
    filterValueTo
  } = props;

  const isInputValueValid = (value) => RegExp('^(0|[1-9][0-9]*)$').test(value);

  return (
    <div className='filter'>
      <div className='filterTitle'>Цена</div>
      <div>
        <label className='label'>
          от
          <input
            className='fields'
            onChange={handleChangeInputText}
            value={filterValueFrom}
            data-name-of-input='filterValueFrom'
          />
        </label>
        <label className='label'>
          до
          <input 
            className='fields'
            onChange={handleChangeInputText}
            value={filterValueTo}
            data-name-of-input='filterValueTo' 
          />
        </label>
      </div>
      <button className='button' onClick={handleSetFilter(isInputValueValid)}>Применить</button>
    </div>
  )
}

export default Filter;

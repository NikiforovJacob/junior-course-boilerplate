import React from 'react';

import './Filter.css';

const Filter = (props) => {

  const { 
    handleChangeInputText, 
    handleSetFilter,
    filterPriceFrom,
    filterPriceTo
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
            value={filterPriceFrom}
            data-name-of-input='filterPriceFrom'
          />
        </label>
        <label className='label'>
          до
          <input 
            className='fields'
            onChange={handleChangeInputText}
            value={filterPriceTo}
            data-name-of-input='filterPriceTo' 
          />
        </label>
      </div>
      <button className='button' onClick={handleSetFilter(isInputValueValid)}>Применить</button>
    </div>
  )
}

export default Filter;

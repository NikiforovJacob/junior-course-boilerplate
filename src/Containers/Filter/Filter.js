import React from 'react';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.isInputValueValid = (value) => RegExp('^(0|[1-9][0-9]*)$').test(value);
    this.filterPriceFrom = React.createRef();
    this.filterPriceTo = React.createRef();
  }
  
  render() {
    const { 
      handleSetFilter, 
      defaultFilterPriceFrom, 
      defaultFilterPriceTo 
    } = this.props;

    return (
      <div className='filter'>
        <div className='filterTitle'>Цена</div>
        <div>
          <label className='label'>
            от
            <input
              className='fields'
              ref={this.filterPriceFrom}
              defaultValue={defaultFilterPriceFrom}
              data-name-of-input='filterPriceFrom'
            />
          </label>
          <label className='label'>
            до
            <input 
              className='fields'
              ref={this.filterPriceTo}
              defaultValue={defaultFilterPriceTo}
              data-name-of-input='filterPriceTo' 
            />
          </label>
        </div>
        <button 
          className='button' 
          onClick={handleSetFilter(this.isInputValueValid, this.filterPriceFrom, this.filterPriceTo)}
        >
          Применить
        </button>
      </div>
    )
  }
}

export default Filter;

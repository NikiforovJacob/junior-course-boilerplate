import React from 'react';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.filterPriceFrom = React.createRef();
    this.filterPriceTo = React.createRef();
    this.isInputValueValid = (value) => RegExp('^(0|[1-9][0-9]*)$').test(value.current.value);
    this.isValid = () => 
      (this.isInputValueValid(this.filterPriceFrom)) && (this.isInputValueValid(this.filterPriceTo))
    ;
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
          onClick={
            handleSetFilter(
              this.isValid, 
              () => this.filterPriceFrom.current.value, 
              () => this.filterPriceTo.current.value
            )
          }
        >
          Применить
        </button>
      </div>
    )
  }
}

export default Filter;

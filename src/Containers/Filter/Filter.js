import React from 'react';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.filterPriceFrom = React.createRef();
    this.filterPriceTo = React.createRef();
    this.isInputValueValid = (value) => RegExp('^(0|[1-9][0-9]*)$').test(value.current.value);
    this.isValid = () => 
      (this.isInputValueValid(this.filterPriceFrom)) && (this.isInputValueValid(this.filterPriceTo));
    ;
  }
  
  handleSetFilter = () => {
    const filterPriceFrom = () => this.filterPriceFrom.current.value;
    const filterPriceTo = () => this.filterPriceTo.current.value;
    this.props.handleSetFilter(this.isValid(), filterPriceFrom(), filterPriceTo())();
  }

  render() {
    return (
      <div className='filter'>
        <div className='filterTitle'>Цена</div>
        <div>
          <label className='label'>
            от
            <input
              className='fields'
              ref={this.filterPriceFrom}
              defaultValue={this.props.defaultFilterPriceFrom}
              data-name-of-input='filterPriceFrom'
            />
          </label>
          <label className='label'>
            до
            <input 
              className='fields'
              ref={this.filterPriceTo}
              defaultValue={this.props.defaultFilterPriceTo}
              data-name-of-input='filterPriceTo' 
            />
          </label>
        </div>
        <button 
          className='button' 
          onClick={this.handleSetFilter}
        >
          Применить
        </button>
      </div>
    )
  }
}

export default Filter;

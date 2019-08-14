import React from 'react';
import LogRender from '../../Components/logRender/logRender';

import './Filter.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    this.inputPriceFrom = React.createRef();
    this.inputPriceTo = React.createRef();

    this.filterDefaultValueTo = this.props.data.reduce(
      (maxPrice, item) => maxPrice > item.price ? maxPrice : item.price
    , 0)
      
    this.filterDelaultValueFrom = this.props.data.reduce(
      (minPrice, item) => minPrice < item.price ? minPrice : item.price
    , undefined);

    this.isFilterValuesValid = (value) => {
      return RegExp('^(0|[1-9][0-9]*)$').test(value);
    }
  }

  handleSetFilter = () => {
    const { data, handleChangeState } = this.props;
    const  inputPriceFrom = this.inputPriceFrom.current.value;
    const  inputPriceTo = this.inputPriceTo.current.value;

    if (!(this.isFilterValuesValid(inputPriceFrom)) || !(this.isFilterValuesValid(inputPriceTo))) {
      alert('Значения цены в фильтре должны быть 0 или положительным числом');
      return;
    }

    const filteredData = data.filter(
      item => item.price >= inputPriceFrom && item.price <= inputPriceTo
    );
    handleChangeState({ productsList: filteredData });
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
              ref={this.inputPriceFrom}
              defaultValue={this.filterDelaultValueFrom}
            />
          </label>
          <label className='label'>
            до
            <input 
              className='fields'
              ref={this.inputPriceTo}
              defaultValue={this.filterDefaultValueTo}
            />
          </label>
        </div>
        <button className='button' onClick={this.handleSetFilter}>Применить</button>
        <LogRender parentContext={this} />
      </div>
    )
  }
}

export default Filter;

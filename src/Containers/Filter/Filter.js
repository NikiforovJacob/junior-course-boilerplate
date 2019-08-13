import React from 'react';

import './Filter.css';

class Filter extends React.Component {

  render() {
    const { data, state, handleChangeInputText, handleChangeState } = this.props;

    const handleSetFilter = () => {
      const { filterValueFrom, filterValueTo } = state;

      const isFilterValuesValid = (filterValueFrom >= 0 && filterValueTo >= 0) && (filterValueFrom !== '' && filterValueTo !== '');
      if (!isFilterValuesValid) {
        alert('Значения фильтра должны быть 0 или положительным числом');
        return;
      }

      const filteredData = data.filter(
        item => item.price >= filterValueFrom && item.price <= filterValueTo
      );
      handleChangeState('productsList', filteredData);
    }

    return (
      <div className='filter'>
        <h1 className='filterTitle'>Цена</h1>
        <div>
          <label className='label'>от
            <input
              type='text'
              className='fields'
              data-name-of-input='filterValueFrom' 
              onChange={handleChangeInputText} 
              value={state.filterValueFrom} 
            />
          </label>
          <label className='label'> до
            <input 
              className='fields'
              data-name-of-input='filterValueTo'
              onChange={handleChangeInputText} 
              value={state.filterValueTo} 
            />
          </label>
        </div>
        <button className='buttom' onClick={handleSetFilter}>Применить</button>
      </div>
    )
  }
}

export default Filter;
import React from 'react';
import InputControlled from "../InputControlled/InputControlled"
import Discount from 'csssr-school-input-discount'
import withValidation from '../../hocs/withValidation/withValidation'

import './Filter.css';

const InputPriceWithValidation = withValidation(InputControlled);
const InputSaleWithValidation = withValidation(Discount);

const Filter = (props) => {
  const { 
    changeInputValue, 
    filterPriceFrom,
    filterPriceTo,
    filterSaleValue
  } = props;

  return (
    <div className='filter'>
      <h3 className='filterTitle'>Цена</h3>
      <div className='filterPrice'>
        <InputPriceWithValidation
          prefix='от  '
          key='filterPriceFrom'
          changeInputValue={changeInputValue}
          value={filterPriceFrom}
          name='filterPriceFrom'
        />
        <InputPriceWithValidation
          prefix='до  '
          key='filterPriceTo'
          changeInputValue={changeInputValue}
          value={filterPriceTo}
          name='filterPriceTo' 
        />
        <InputSaleWithValidation
          key='filterSale'
          title="Скидка"
          name="filterSale"
          value={filterSaleValue}
          changeInputValue={changeInputValue}
        />
      </div>
    </div>
  )
}

export default Filter;

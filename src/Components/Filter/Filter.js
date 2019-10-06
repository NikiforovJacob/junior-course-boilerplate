import React, {memo} from 'react';
import InputControlled from "../InputControlled/InputControlled"
import Discount from 'csssr-school-input-discount'
import withValidation from '../../hocs/withValidation/withValidation'

import './Filter.css';

const InputPriceWithValidation = withValidation(InputControlled);
const InputSaleWithValidation = withValidation(Discount);

const Filter = (props) => {
  const { 
    setFilter,
    defaultFilterPriceFrom,
    defaultFilterPriceTo
  } = props;

  return (
    <div className='filter'>
      <h3 className='filterTitle'>Цена</h3>
      <div className='filterPrice'>
        <InputPriceWithValidation
          prefix='от  '
          key='filterPriceFrom'
          value={defaultFilterPriceFrom}
          name='filterPriceFrom'
          setFilter={setFilter}
        />
        <InputPriceWithValidation
          prefix='до  '
          key='filterPriceTo'
          value={defaultFilterPriceTo}
          name='filterPriceTo' 
          setFilter={setFilter}
        />
        <InputSaleWithValidation
          key='filterSale'
          value={''}
          name="filterSale"
          setFilter={setFilter}
          title="Скидка"
        />
      </div>
    </div>
  )
}

export default memo(Filter);

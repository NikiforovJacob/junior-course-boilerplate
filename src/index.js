import React from "react";
import ReactDOM from "react-dom";
import productsList from './data/products.json';
import Title from './Components/Title/Title';
import ProductsItems from './Components/ProductsItems/ProductsItems';
import Filter from './Containers/Filter/Filter';
import LogRender from './Components/logRender/logRender';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.defaultFilterPriceTo = productsList.reduce(
      (maxPrice, item) => maxPrice > item.price ? maxPrice : item.price
    , 0)

    this.defaultFilterPriceFrom = productsList.reduce(
      (minPrice, item) => minPrice < item.price ? minPrice : item.price
    , this.filterPriceTo);

    this.state = {
      productsList: productsList,
    }
  }

  handleSetFilter = (isValid, getFilterPriceFrom, getFilterPriceTo) => () => {
    const filterPriceFrom = getFilterPriceFrom();
    const filterPriceTo = getFilterPriceTo();
    
    if (!isValid()) {
      alert('Значения цены в фильтре должны быть 0 или положительным числом');
      return;
    }

    const filteredData = productsList.filter(
      item => item.price >= filterPriceFrom && item.price <= filterPriceTo
    );
    this.setState({ productsList: filteredData });
  }

  render() {
    return (
      <div className='page'>
        <Filter 
          handleSetFilter={this.handleSetFilter}
          defaultFilterPriceFrom={this.defaultFilterPriceFrom}
          defaultFilterPriceTo={this.defaultFilterPriceTo}
        />
        <div className='goods'>
          <Title title='Список товаров' />
          <ProductsItems dataItems={this.state.productsList} />
          <LogRender parentContext={this} />
        </div>
      </div>
    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

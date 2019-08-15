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
      filterPriceFrom: this.defaultFilterPriceFrom,
      filterPriceTo: this.defaultFilterPriceTo,
    }
  }

  handleChangeInputText = (e) => {
    const inputName = e.target.dataset.nameOfInput;
    this.setState({ [inputName]: e.target.value });
  };

  handleSetFilter = (isInputValueValid) => () => {
    const { filterPriceFrom, filterPriceTo } = this.state;

    if (!(isInputValueValid(filterPriceFrom)) || !(isInputValueValid(filterPriceTo))) {
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
          handleChangeInputText={this.handleChangeInputText}
          handleSetFilter={this.handleSetFilter}
          filterPriceFrom={this.state.filterPriceFrom}
          filterPriceTo={this.state.filterPriceTo}
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

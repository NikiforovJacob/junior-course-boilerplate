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

    this.defaultFilterValueTo = productsList.reduce(
      (maxPrice, item) => maxPrice > item.price ? maxPrice : item.price
    , 0)

    this.defaultFilterValueFrom = productsList.reduce(
      (minPrice, item) => minPrice < item.price ? minPrice : item.price
    , this.filterValueTo);

    this.state = {
      productsList: productsList,
      filterValueFrom: this.defaultFilterValueFrom,
      filterValueTo: this.defaultFilterValueTo,
    }
  }

  handleChangeInputText = (e) => {
    const inputName = e.target.dataset.nameOfInput;
    this.setState({ [inputName]: e.target.value });
  };

  handleSetFilter = (isInputValueValid) => () => {
    const { filterValueFrom, filterValueTo } = this.state;

    if (!(isInputValueValid(filterValueFrom)) || !(isInputValueValid(filterValueTo))) {
      alert('Значения цены в фильтре должны быть 0 или положительным числом');
      return;
    }

    const filteredData = productsList.filter(
      item => item.price >= filterValueFrom && item.price <= filterValueTo
    );
    this.setState({ productsList: filteredData });
  }

  render() {
    return (
      <div className='page'>
        <Filter 
          handleChangeInputText={this.handleChangeInputText}
          handleSetFilter={this.handleSetFilter}
          filterValueFrom={this.state.filterValueFrom}
          filterValueTo={this.state.filterValueTo}
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

import React from "react";
import ReactDOM from "react-dom";
import productsList from './data/products.json';
import Title from './Components/Title/Title';
import ProductsItems from './Components/ProductsItems/ProductsItems';
import Filter from './Components/Filter/Filter';
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
      filterSale: ''
    }
  }

  setFilter = () => {
    const filteredData = productsList.filter(
      item => ((item.price >= this.state.filterPriceFrom) || (this.state.filterPriceFrom === '')) && 
      ((item.price <= this.state.filterPriceTo) || (this.state.filterPriceTo === '')) && 
      ((100 - item.price / item.subPriceContent * 100) >= this.state.filterSale)
    );
    this.setState({ productsList: filteredData });
  }
  
  changeInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value }, this.setFilter); //или поменять state напрямую. Пока не вижу другого выхода, если отдаю в setState стрелочную ф-ию, теряется event
  };

  render() {
    const { filterPriceFrom, filterPriceTo, filterSale } = this.state;

    return (
      <div className='page'>
        <Filter
          changeInputValue={this.changeInputValue}
          filterPriceFrom={filterPriceFrom}
          filterPriceTo={filterPriceTo}
          filterSaleValue={filterSale}
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

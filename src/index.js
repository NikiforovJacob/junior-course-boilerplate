import React from "react";
import ReactDOM from "react-dom";
import productsList from './data/products.json';
import Title from './Components/Title/Title';
import ProductsItems from './Components/ProductsItems/ProductsItems';
import Filter from './Components/Filter/Filter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.defaultFilterPriceTo = productsList.reduce(
      (maxPrice, item) => maxPrice > item.price ? maxPrice : item.price
    , 0)

    this.defaultFilterPriceFrom = productsList.reduce(
      (minPrice, item) => minPrice < item.price ? minPrice : item.price
    , this.filterPriceTo);

    this.setFilter = (filter) => {
      const filteredData = filter(productsList);
      this.setState({ productsList: filteredData });
    }

    this.state = {
      productsList: productsList,
    }
  }
  
  render() {
    return (
      <div className='page'>
        <Filter
          defaultFilterPriceFrom={this.defaultFilterPriceFrom}
          defaultFilterPriceTo={this.defaultFilterPriceTo}
          setFilter={this.setFilter}
        />
        <div className='goods'>
          <Title title='Список товаров' />
          <ProductsItems dataItems={this.state.productsList} />
        </div>
      </div>
    );
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

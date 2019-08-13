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

    this.filterValueTo = productsList.reduce(
      (maxPrice, item) => maxPrice > item.price ? maxPrice : item.price
    , 0)
      
    this.filterValueFrom = productsList.reduce(
      (minPrice, item) => minPrice < item.price ? minPrice : item.price
    , this.filterValueTo);

    this.state = {
      productsList: productsList,
      filterValueFrom: this.filterValueFrom,
      filterValueTo: this.filterValueTo
    }
  }

  handleChangeState = (nameOfState, value) => {
    this.setState({ [nameOfState]: value });
  }

  handleChangeInputText = () => (e) => {
    e.preventDefault();
    const inputName = e.target.dataset.nameOfInput;
    this.setState({ [inputName]: e.target.value });
  };

  render() {
    return (
      <div className='page'>
        <Filter 
          data={productsList}
          state={this.state}
          handleChangeInputText={this.handleChangeInputText()}
          handleChangeState={this.handleChangeState}
        />
        <div className='goods'>
          <Title title='Список товаров' />
          <ProductsItems dataItems={this.state.productsList} />
          <LogRender componentName='App' />
        </div>
      </div>
    );
  }

};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

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

    this.state = {
      productsList: productsList,
    }
  }

  handleChangeState = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <div className='page'>
        <Filter 
          data={productsList}
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

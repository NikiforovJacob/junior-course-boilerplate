import React, {Component} from 'react';

export default function withValidation(HoccedComponent){
  return class extends Component{
    constructor(props) {
      super(props);

      this.state = {
        [this.props.name]: this.props.value
      }

      this.checkerForPrice = (item) => (item.price >= this.state[this.props.name]) || (this.state[this.props.name] === '');
      this.filterChecker = {
        filterPriceFrom: this.checkerForPrice,
        filterPriceTo: this.checkerForPrice,
        filterSale: (item) => ((100 - (item.price / item.subPriceContent * 100)) >= this.state[this.props.name]) || (this.state[this.props.name] === ''),
      }
      this.filter = (productsList) => productsList.filter(this.filterChecker[this.props.name]);

      this.isValid = (value) => RegExp('^(0|[1-9][0-9]*)$').test(value) || value === '';
    }

    componentDidUpdate() {
      this.props.setFilter(this.filter);
    }
    
    handleChangeInputValue = (e) => {
      if (!this.isValid(e.target.value)) {
        alert('Значения цены в фильтре должны быть 0 или положительным числом');
        e.preventDefault();
        return;
      };
      this.setState({[this.props.name]: e.target.value});
    }

    render() {
      const { value, ...propsForHocced } = this.props;
      return (
        <HoccedComponent onChange={this.handleChangeInputValue} value={this.state[this.props.name]} { ...propsForHocced }/>
      );
    }
  }
}

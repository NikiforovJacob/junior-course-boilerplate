import React, {Component} from 'react';

export default function withValidation(HoccedComponent){
  return class extends Component{
    constructor(props) {
      super(props);

      this.isValid = (value) => RegExp('^(0|[1-9][0-9]*)$').test(value) || value === '';
      
      this.changeInputValue = (e) => {
        console.log(this.props)
        if (!this.isValid(e.target.value)) {
          alert('Значения цены в фильтре должны быть 0 или положительным числом');
          e.preventDefault();
          return;
        }
        this.props.changeInputValue(e);
      }
    }

    render() {
      return (
        <div>
          <HoccedComponent onChange={this.changeInputValue} {...this.props}/>
        </div>
      );
    }
  }
}

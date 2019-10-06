import React  from "react";
import ProductCard from "csssr-school-product-card";
import starFill from "./images/ratingStarFill.png";
import starEmpty from "./images/ratingStarEmpty.png";
import * as R from "ramda";

import "./ProductsItems.css";

class ProductsItems extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  ratingComponent = ({ isFilled }) => {
    return (
      <img
        className="rating"
        src={isFilled ? starFill : starEmpty}
        alt="placeholder"
        width="13"
        height="13"
      />
    );
  };

  render() {
    return(
      <ul className="items">
        {this.props.dataItems
          .map(({ id, title, isInStock, imgProduct, price, subPriceContent, maxRating, rating }) => (
            <ProductCard 
              key={id}
              isInStock={isInStock}
              img={imgProduct}
              title={title}
              price={price}
              subPriceContent={subPriceContent}
              maxRating={maxRating}
              rating={rating}
              ratingComponent={this.ratingComponent}
            />
          ))
        }
      </ul>
    );
  }
};

export default ProductsItems;

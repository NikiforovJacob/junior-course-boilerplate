import React from "react";
import ProductCard from "csssr-school-product-card";
import starFill from "./images/ratingStarFill.png"
import starEmpty from "./images/ratingStarEmpty.png"

import "./ProductsItems.css";

const ProductsItems = props => {

  const ratingComponent = ({ isFilled }) => {
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

  const productsItems = props.dataItems
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
        ratingComponent={ratingComponent}
      />
      )
    );

  return (
    <ul className="items">
      {productsItems}
    </ul>
  );
};

export default ProductsItems;

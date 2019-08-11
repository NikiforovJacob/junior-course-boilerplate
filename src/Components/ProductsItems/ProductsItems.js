import React from "react";
import ProductCard from "csssr-school-product-card";

import "./ProductsItems.css";

const ProductsItems = props => {

  const ratingComponent = ({ isFilled }) => {
    return (  
      <img
        className="rating"
        src={isFilled ? "images/ratingStarFill.png" : "images/ratingStarEmpty.png"}
        alt="placeholder"
        width="13"
        height="13"
      />
    );
  };

  const productsItems = props.data
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

import React from "react";
import "./styles.css";

const ProductContainer = ({ imgSrc, title, description, price }) => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={imgSrc} alt={`Product: ${title}`} />
        <button className="buybtn">Buy Now</button>
      </div>
      <div className="product-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductContainer;

//React
import React from 'react';

// Sub-Components
import { ProductCard } from '../ProductCard/ProductCard.jsx';

//Stylesheet
import './ProductBar.css'

export const ProductBar = (props) =>{

  const {products, title} = props;

  return (
    <div id='related-products'>
      <p id='related-products-title'>{title}</p>
      <div id='product-bar-scroll'>
        <div id='related-product-list'>
          {
            products.map( (product, index) =>{
              return(
                <ProductCard
                  product={product}
                  key={`relatedProduct${product.id || index}`}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
};
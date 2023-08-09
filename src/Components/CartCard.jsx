import React from 'react'
// import styled from "styled-components"
export const CartCard = ({id,thumbnail,title,brand,price,discountPercentage}) => {
    return (
        <div className="product-card">
        
    
           <img src={thumbnail} alt="imag" className="product-image" width={"200px"}/>
           <h3 className="product-title">{title}</h3>
           <p className="product-brand">{brand}</p>
           <p className="product-price">{price}</p>
           <p className="product-discount">{discountPercentage}</p>
          
    
        </div>
      );
}
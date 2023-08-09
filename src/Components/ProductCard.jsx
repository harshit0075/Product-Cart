import { useDispatch } from "react-redux";
// import styled from "styled-components"
import { addToCart } from "../Redux/CartReducer/action";
export const ProductCard = ({id,thumbnail,title,brand,price,discountPercentage}) => {

   const dispatch = useDispatch();
   const addToCartHandler=()=>{
    dispatch(addToCart(id))
   }
  return (
    <div className="product-card">
    

       <img src={thumbnail} alt="imag" className="product-image" width={"200px"}/>
       <h3 className="product-title">{title}</h3>
       <p className="product-brand">{brand}</p>
       <p className="product-price">{price}</p>
       <p className="product-discount">{discountPercentage}</p>
       <button onClick={addToCartHandler} className="add-to-cart">add to cart</button>

    </div>
  );
};
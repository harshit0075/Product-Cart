import { useSelector } from "react-redux";
import {CartCard}from "../Components/CartCard"
export const CartPage = () => {

  const cartItems= useSelector((store)=>store.cartReducer.cart)
  console.log(cartItems)
  return <div data-testid="cart-list">{
    cartItems.length>0&&cartItems.map((el)=>{
    return <CartCard key={el.id}{...el}/>
    })
  }</div>;
};
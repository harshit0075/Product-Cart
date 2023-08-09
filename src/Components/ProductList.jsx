import { useSelector } from "react-redux";
import styled from "styled-components"
import {ProductCard} from "./ProductCard"
export const ProductList = () => {
    const products= useSelector((store)=>store.productReducer.products)
     
   
     
  return (
    <DIV data-testid="product-list">
      {products.length>0&& products.map((el)=>{
           return <ProductCard key={el.id}{...el}/>
      })}
    </DIV>
  );
};

const DIV= styled.div`
  margin:10px;
  width:85%;
  display:grid;
  grid-template-columns:auto auto auto auto;
  grid-gap:10px;
`;
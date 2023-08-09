import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios"

const productRequest=()=>{
  return {type:GET_PRODUCT_REQUEST};
}
const productSuccess=(payload)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}
}
const productFailure=()=>{
  return {type:GET_PRODUCT_FAILURE}
}

export const getProducts = (paramObj)=>(dispatch) => {
   dispatch(productRequest());
   axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,paramObj).then((res)=>{
    dispatch(productSuccess(res.data))
    
    return res.data
   }).catch(()=>{
    dispatch(productFailure())
   })
};  

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
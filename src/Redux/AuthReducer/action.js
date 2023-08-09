import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from 'axios'

const loginRequest=()=>{
  return {type:LOGIN_REQUEST};
}
const loginSuccess=(payload)=>{
  return {type:LOGIN_SUCCESS,payload};
}
const loginFailure=()=>{
  return {type:LOGIN_FAILURE};
}
export const login = (userData)=>(dispatch) => {
   dispatch(loginRequest());
   axios.post("https://reqres.in/api/login",userData).then((res)=>{
    dispatch(loginSuccess(res.data.token))
   }).catch(()=>{
    dispatch(loginFailure())
   })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
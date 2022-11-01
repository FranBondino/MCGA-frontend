import { SET_PRODUCTS, SET_LOADINGS, DISMISS_LOADING } from "./types";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setLoadingProducts  = () => {
  return {
    type: SET_LOADINGS,
    payload: true,
  };
};

export const dismissLoadingProducts  = () => {
  return {  
    type: DISMISS_LOADING,
    payload: false,
  };
};
import {
    SET_LOADINGS,
    SET_PRODUCTS,
    DISMISS_LOADING
} from './types'
  
const INITIAL_STATE = {
    products: [],
    error: null,
    loading: false,
};
  
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
        return {
            ...state,
            products: action.payload,
            error: null,
        };
        case SET_LOADINGS:
        return {
            ...state,
            loading: action.payload,
            error: null,
        };
        case DISMISS_LOADING:
        return {
            ...state,
            loading: action.payload,
            error: null,
        };
        default:
        return state;
    }
};

export default reducer;

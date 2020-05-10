const initState = {
  productError: null
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_SUCCESS':
      console.log('product added! :D');
      return {
        ...state,
        authError: null
      }
    case 'ADD_PRODUCT_ERROR':
      console.log('error adding product!');
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
}

export default productReducer;
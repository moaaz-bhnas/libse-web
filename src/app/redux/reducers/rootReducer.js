import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sellerRegistrationReducer from './sellerRegistrationReducer';
import productReducer from './productReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  sellerRegistration: sellerRegistrationReducer,
  product: productReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
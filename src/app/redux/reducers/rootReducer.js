import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sellerRegistrationReducer from './sellerRegistrationReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  sellerRegistration: sellerRegistrationReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
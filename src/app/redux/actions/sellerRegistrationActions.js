import { functions } from '../../lib/firebase';

export const registerSeller = (seller, history) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(seller);
    const { uid, email, firstName, lastName, phoneNumber, storeName, address, openingHour, closingHour } = seller;

    firestore.collection('sellers').doc(uid).set({
      firstName, lastName, phoneNumber, storeName, address, openingHour, closingHour
    }).then(() => {
      dispatch({ type: 'SELLER_REGISTRATION_SUCCESS' });
    }).then(() => {
      const addSellerRole = functions.httpsCallable('addSellerRole');
      return addSellerRole({ email });
    }).then((result) => {
      history.push('/seller');
      console.log(result);
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'SELLER_REGISTRATION_ERROR', err });
    });
  }
}
export const signUp = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        username: credentials.username
      })
    }).then(() => {
      console.log('username added');
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

export const signOut = (router) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
      router.push('/');
    }).catch((err) => {
      dispatch({ type: 'SIGNOUT_ERROR', err })
    })
  }
}

export const resetError = () => {
  return { type: 'RESET_ERROR' }
}
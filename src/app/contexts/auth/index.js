import { useEffect, useState, createContext, useContext, useCallback } from 'react';
import firebase from '../../lib/firebase';
import usePrevious from '../../hooks/usePrevious';
import router from 'next/router';
import { DestinationContext } from '../destination';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ authIsReady, setAuthIsReady ] = useState(false);

  const [ user, setUser ] = useState('notSet');
  console.log('user: ', user);
  
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  const { destination } = useContext(DestinationContext);
  const prevUser = usePrevious(user);
  const redirectBasedOnAuthState = useCallback(() => {
    if (!prevUser && user.uid) { // to redirect only if a user wasn't authenticated, and then signed in
      router.push(destination);
    }
  }, [ user ])

  const addSellerClaim = useCallback(() => {
    if (user === 'notSet') return;

    if (user) {
      setAuthIsReady(false);
      user.getIdTokenResult().then(idTokenResult => {
        console.log('claims: ', idTokenResult.claims);
        user.seller = idTokenResult.claims.seller;
        setAuthIsReady(true);
      })
    } else {
      setAuthIsReady(true);
    }
  }, [ user ])

  useEffect(() => {
    redirectBasedOnAuthState();
    addSellerClaim();
  }, [ user ]);

  return (
    <AuthContext.Provider value={ user }>
      {authIsReady && children}
    </AuthContext.Provider>
  )
}
import { useContext } from 'react';
import Router from 'next/router';
import { AuthContext } from './contexts/auth';

const PrivateRoute = ({ children }) => {  
  const user = useContext(AuthContext);

  if (!user) {
    Router.push('/login');
  }

  return children;
}

export default PrivateRoute;

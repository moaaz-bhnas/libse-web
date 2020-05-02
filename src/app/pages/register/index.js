import { memo, useContext } from 'react';
import { Container } from '../../components/container/style';
import Form from '../../components/register';
import { AuthContext } from '../../contexts/auth';
import Router from 'next/router';
import PrivateRoute from '../../privateRoute';

const RegisterPage = () => {
  const user = useContext(AuthContext);

  if (user.seller) {
    Router.push('/seller');
  }

  return (
    <PrivateRoute>
      <Container>
        <Form />
      </Container>
    </PrivateRoute>
  );
}

export default memo(RegisterPage);
import React, { memo, useContext } from 'react'
import Router from 'next/router';
import AuthForm from '../../components/authForm';
import { Container } from '../../components/container/style';
import { AuthContext } from '../../contexts/auth';

const SignupPage = ({ action }) => {
  const user = useContext(AuthContext);

  if (user) {
    Router.push('/');
  }

  return (
    <Container>
      <AuthForm action="signup" />
    </Container>
  );
}

export default memo(SignupPage);
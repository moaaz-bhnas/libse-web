import { memo } from 'react';
import SignupForm from './components/signupForm';
import LoginForm from './components/loginForm';

const AuthForm = ({ action }) => {
  return (
    action === 'login' ?
    <LoginForm /> :
    <SignupForm />
  );
}

export default memo(AuthForm);
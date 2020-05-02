import { memo, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Form,
  Title,
  SubmitButton,
  PasswordRecoveryLink,
  P,
  AuthLink
} from '../style';
import { Input } from '../../input/style';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/actions/authActions';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const credentials = { email, password };
    dispatch(logIn(credentials));
  }, [ email, password ])

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Login</Title>

      <Input 
        type="email"
        aria-label="Email"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        required
      />

      <Input 
        type="password"
        aria-label="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        required
      />

      <Link passHref href="/password-recovery">
        <PasswordRecoveryLink>Forgot your password?</PasswordRecoveryLink>        
      </Link>

      <SubmitButton type="submit">Login</SubmitButton>

      <P>
        Don't have an account? <Link passHref href="/signup">
          <AuthLink>Create account</AuthLink>
        </Link>
      </P>
    </Form>
  );
}

export default memo(LoginForm);
import { memo, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Form,
  Title,
  SubmitButton,
  P,
  AuthLink
} from '../style';
import { Input } from '../../input/style';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../redux/actions/authActions';

const SignupForm = () => {
  const dispatch = useDispatch();

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const credentials = { username, email, password };
    dispatch(signUp(credentials));
  }, [ username, email, password ])

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create Account</Title>

      <Input 
        type="text"
        aria-label="Your name"
        placeholder="Your name"
        value={username}
        onChange={event => setUsername(event.target.value)}
        required
      />

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

      <SubmitButton type="submit">Create</SubmitButton>

      <P>
        Already have an account? <Link passHref href="/login">
          <AuthLink>Login</AuthLink>
        </Link>
      </P>
    </Form>
  );
}

export default memo(SignupForm);
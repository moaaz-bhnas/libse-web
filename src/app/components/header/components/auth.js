import { memo } from 'react';
import Link from 'next/link';
import {
  StyledAuth,
  AuthLink,
  Span
} from '../style';

const Auth = () => {
  return (
    <StyledAuth>
      <Link href="/login" passHref>
        <AuthLink>Log in</AuthLink>
      </Link>

      <Span>or</Span> 
      
      <Link href="/signup" passHref>
        <AuthLink>Create account</AuthLink>
      </Link>
    </StyledAuth>
  );
}

export default memo(Auth);
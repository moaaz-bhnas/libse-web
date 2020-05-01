import { memo, useEffect, useState, useContext, useCallback } from 'react';
import Link from 'next/link';
import {
  StyledTopBar, 
  Container,
  Invitation,
  B,
  InvitationLink
} from '../style';
import { DestinationContext } from '../../../contexts/destination';

const TopBar = () => {
  // const { setDestination } = useContext(DestinationContext);
  const dest = useContext(DestinationContext);
  console.log(dest);

  const [ visible, setVisible ] = useState(true);
  const checkWindowScrollYAndSetScrolled = useCallback(() => {
    const visible = window.scrollY <= 100;
    setVisible(visible);
  }, [])
  useEffect(function handleScroll() {
    document.addEventListener('scroll', checkWindowScrollYAndSetScrolled);

    return () => {
      document.removeEventListener('scroll', checkWindowScrollYAndSetScrolled);
    }
  }, []);
  
  return (
    <StyledTopBar data-visible={visible}>
      <Container>
        <Invitation>
          Have a store? 
          <Link href="/register" passHref>
            <InvitationLink onClick={() => setDestination('/register')}>
              <B>sell with us</B>
            </InvitationLink>
          </Link>
        </Invitation>
      </Container>
    </StyledTopBar>
  );
}

export default memo(TopBar);
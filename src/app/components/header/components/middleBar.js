import { memo, useContext, useRef } from 'react';
import Link from 'next/link';
import {
  StyledMiddleBar, 
  Container,
  StoreLink
} from '../style';
import SearchForm from './searchForm';
import Favorites from './favorites';
import Sidebar from './sidebar';
import Auth from './auth';
import Chat from './chat';
import AccountDropdown from './accountDropdown';
import { AuthContext } from '../../../contexts/auth';

const MiddleBar = () => {
  const user = useContext(AuthContext);
  const storeLinkRef = useRef(null);

  return (
    <StyledMiddleBar>
      <Container>
        <Sidebar />
        <SearchForm />
        {
          user ?
          <>
            <Favorites />
            <Chat />
            <Link href="/seller" passHref>
              <StoreLink ref={storeLinkRef}>My store</StoreLink>
            </Link>
            <AccountDropdown previousInteractiveElement={storeLinkRef} />
          </> :
          <Auth />
        }
      </Container>
    </StyledMiddleBar>
  );
}

export default memo(MiddleBar);
import { memo, useContext } from 'react';
import { useRouter } from 'next/router';
import {
  StyledHeader,
  Title,
  Navigation,
  NavigationTitle,
  TopAndMiddleBarsContainer
} from './style';
import TopBar from './components/topBar';
import MiddleBar from './components/middleBar';
import BottomBar from './components/bottomBar';
import { title } from '../../shared/data';
import { AuthContext } from '../../contexts/auth';
import SellerBar from './components/sellerBar';

const Header = () => {
  const { pathname } = useRouter();
  const sellerHeader = pathname.includes('seller');

  const user = useContext(AuthContext);
  const topBarHidden = user && user.seller;

  return (
    <StyledHeader data-topbar={!topBarHidden} data-seller-center={sellerHeader}>
      <Title>{title}</Title>

      <Navigation>
        <NavigationTitle>Navigation Bar</NavigationTitle>
        {
          (user && sellerHeader) ?
          <SellerBar /> :
          <>
            <TopAndMiddleBarsContainer>
              {!topBarHidden && <TopBar />}
              <MiddleBar />
            </TopAndMiddleBarsContainer>
            <BottomBar />
          </>
        }
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);
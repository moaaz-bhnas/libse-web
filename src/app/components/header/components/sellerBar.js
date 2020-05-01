import { memo } from 'react'
import {  
  StyledSellerBar
} from '../style';
import SellerSidebar from './sellerSidebar';
import Logo from '../../logo';
import Chat from './chat';
import AccountDropdown from './accountDropdown';

const SellerBar = () => {
  return (
    <StyledSellerBar>
      <SellerSidebar />
      <Logo color="#fff" sellerCenter />
      <Chat />
      <AccountDropdown sellerCenter />
    </StyledSellerBar>
  );
}

export default memo(SellerBar);
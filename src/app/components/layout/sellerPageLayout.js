import { memo, useContext } from 'react';
import { LayoutContext } from '../../contexts/layout';
import {
  SellerPage,
  SellerPageContainer
} from './style';

const SellerPageLayout = ({ children }) => {
  const { sellerSidebarExpanded: sidebarExpanded } = useContext(LayoutContext);

  return (
    <SellerPage sidebarExpanded={sidebarExpanded}>
      <SellerPageContainer>
        {children}
      </SellerPageContainer>
    </SellerPage>
  );
}

export default memo(SellerPageLayout);
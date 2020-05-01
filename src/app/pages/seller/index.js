import React, { memo, useContext } from 'react';
import { LayoutContext } from '../../contexts/layout';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import SponsoredProducts from './pages/sponsoredProducts';
import {
  SellerPage, 
  SellerPageContainer
} from '../../pagesStyle';
// import AddProduct from './pages/addProduct';

const Seller = () => {
  const { sellerSidebarExpanded: sidebarExpanded } = useContext(LayoutContext);

  return (
    <SellerPage sidebarExpanded={sidebarExpanded}>
      <SellerPageContainer>
        Dashboard
        {/* <Switch>
          <Route 
            exact
            path={`${url}/`}
            component={Dashboard}
          />
          <Route 
            path={`${url}/products`}
            component={Products}
          />
          <Route 
            path={`${url}/sponsored-products`}
            component={SponsoredProducts}
          />
          <Route 
            path={`${url}/add-product`}
            component={AddProduct}
          />
        </Switch> */}
      </SellerPageContainer>
    </SellerPage>
  );
}

export default memo(Seller);
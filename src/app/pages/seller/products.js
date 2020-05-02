import { memo } from 'react';
import { AddProductButton } from '../../components/button';
import SellerPageLayout from '../../components/layout/sellerPageLayout';

const Products = () => {
  return (
    <SellerPageLayout>
      <AddProductButton>
        Add Product
      </AddProductButton>
    </SellerPageLayout>
  );
}

export default memo(Products);
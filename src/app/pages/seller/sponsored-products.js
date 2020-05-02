import { memo } from 'react'
import SellerPageLayout from '../../components/layout/sellerPageLayout';

const SponsoredProducts = () => {
  return (
    <SellerPageLayout>
      Sponsored products
    </SellerPageLayout>
  );
}

export default memo(SponsoredProducts);
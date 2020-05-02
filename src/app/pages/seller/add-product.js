import { memo } from 'react'
import AddProductForm from '../../components/addProductForm';
import SellerPageLayout from '../../components/layout/sellerPageLayout';

const AddProduct = () => {
  return (
    <SellerPageLayout>
      <AddProductForm />
    </SellerPageLayout>
  );
}

export default memo(AddProduct);
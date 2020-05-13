import { memo } from 'react';
import { AddProductButton } from '../../components/button';
import SellerPageLayout from '../../components/layout/sellerPageLayout';
import { 
  Title 
} from '../../pagesStyle';
import ProductsGrid from '../../components/productsGrid';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const Products = () => {
  useFirestoreConnect('products');
  const products = useSelector(state => state.firestore.ordered.products);
  console.log('products: ', products);

  return (
    <SellerPageLayout>
      <AddProductButton>Add Product</AddProductButton>

      <Title>My Products</Title>

      {products && <ProductsGrid products={products} seller />}
    </SellerPageLayout>
  );
}

export default memo(Products);
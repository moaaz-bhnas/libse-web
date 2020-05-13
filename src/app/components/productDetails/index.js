import { memo } from 'react';
import {
  Product, ProductName
} from './style';

const ProductDetails = () => {
  return (
    <Product>
      <ProductName>Name</ProductName>
    </Product>
  );
}

export default memo(ProductDetails);
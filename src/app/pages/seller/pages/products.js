import React, { memo } from 'react';
import { AddProductButton } from '../../../components/button';

const Products = () => {
  return (
    <AddProductButton>

      Add Product
    </AddProductButton>
  );
}

export default memo(Products);
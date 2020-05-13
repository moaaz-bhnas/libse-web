import { memo } from 'react';
import Product from './components/product';
import {
  Grid
} from './style';

const ProductsGrid = ({ products, seller }) => {
  return (
    <Grid>
      {
        [...products, ...products, ...products, ...products].map(product => (
          <Product 
            key={product.id} 
            product={product} 
            seller={seller}
          />
        ))
      }
    </Grid>
  );
}

export default memo(ProductsGrid);
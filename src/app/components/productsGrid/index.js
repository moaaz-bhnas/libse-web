import { memo, useContext, useCallback } from 'react';
import Product from './components/product';
import {
  Grid
} from './style';
import { useSelector } from 'react-redux';

const ProductsGrid = ({ products, seller }) => {
  const { favorites } = useSelector(state => state.firebase.profile);
  console.log('favorites: ', favorites);

  const checkFavorite = useCallback(productId => {
    return favorites.some(favoriteProductId => favoriteProductId === productId)
  }, [ favorites ])

  return (
    <Grid>
      {
        products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            seller={seller}
            inFavorites={checkFavorite(product.id)}
          />
        ))
      }
    </Grid>
  );
}

export default memo(ProductsGrid);
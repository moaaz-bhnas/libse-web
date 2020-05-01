import { memo } from 'react';
import {
  FavoritesContainer, 
  FavoritesToggler,
  FavoriteIcon
} from '../style';
import Heart from '../../../svgs/heart';
import heartIcon from '../../../img/heart.svg';
import theme from '../../../shared/theme';

const Favorites = () => {
  return (
    <FavoritesContainer>
      <FavoritesToggler aria-label="toggle favorites dropdown">
        <Heart />
        {/* <FavoriteIcon src={heartIcon} alt="Toggle favorites dropdown" /> */}
      </FavoritesToggler>
    </FavoritesContainer>
  );
}

export default memo(Favorites);
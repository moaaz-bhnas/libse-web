import { memo, useState, useCallback, useContext } from 'react';
import Link from 'next/link';
import {
  StyledProduct,
  ProductLink,
  Cover,
  ProductContainer,
  CoverContainer,
  ProductName,
  Colors,
  Color,
  ColorButton,
  PriceContainer,
  Price,
  Abbr,
  LikeButton
} from '../style';
import LikeSvg from '../../../svgs/heart';
import { addToFavorites, removeFromFavorites } from '../../../redux/actions/productActions';
import { AuthContext } from '../../../contexts/auth';
import { useDispatch } from 'react-redux';

const Product = ({ product, seller, inFavorites }) => {
  const { uid: userId } = useContext(AuthContext);
  const dispatch = useDispatch();

  const defaultColor = product.colors.find(color => color.default);
  const [ activeColor, setActiveColor ] = useState(defaultColor);

  const productLink = {
    href: `${seller ? '/seller' : ''}/product/[id]/[color]`,
    asPrecedingText: `${seller ? '/seller' : ''}/product/${product.id}/`
  }

  const handleLikeToggle = useCallback(() => {
    dispatch(
      inFavorites ? 
      removeFromFavorites(userId, product.id) :
      addToFavorites(userId, product.id)
    );
  }, [ inFavorites ])

  return (
    <StyledProduct key={product.id}>
      <ProductContainer>
        <Link passHref href={productLink.href} as={productLink.asPrecedingText + activeColor.value}>
          <ProductLink>
            <CoverContainer>
              <Cover src={activeColor.images[1]} alt="" />
            </CoverContainer>
          </ProductLink>
        </Link>

        <Colors>
          {
            product.colors.map(({ value: color }, index, colors) => (
              <Color key={color}>
                <ColorButton 
                  aria-label={color} 
                  color={color} 
                  onClick={() => setActiveColor(colors[index])}
                  title={color}
                  data-active={color === activeColor.value}
                  onMouseDown={e => e.preventDefault()}
                />
              </Color>
            ))
          }
        </Colors>

        <Link passHref href={productLink.href} as={productLink.asPrecedingText + activeColor.value}>
          <ProductLink>
            <ProductName>{product.name}</ProductName>
          </ProductLink>
        </Link>

        <PriceContainer>
          <Price>{product.price} <Abbr title="Egyptian">EGP</Abbr></Price>
          <LikeButton
            aria-label="Add to favorites"
            data-favorite={inFavorites}
            onClick={handleLikeToggle}
            onMouseDown={e => e.preventDefault()}
          >
            <LikeSvg className="product__likeSvg" />
          </LikeButton>
        </PriceContainer>
      </ProductContainer>
    </StyledProduct>
  );
}

export default memo(Product);
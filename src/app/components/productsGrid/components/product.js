import { memo, useState } from 'react';
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

const Product = ({ product, seller }) => {
  const defaultColor = product.colors.find(color => color.default);
  const [ activeColor, setActiveColor ] = useState(defaultColor);

  const productLink = {
    href: `${seller ? '/seller' : ''}/product/[id]/[color]`,
    asPrecedingText: `${seller ? '/seller' : ''}/product/${product.id}/`
  }
  const primaryColor = product.colors[0].value;

  // const handleMouseEnter = useCallback((index) => {
  //   callback
  // }, [])

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
          >
            <LikeSvg className="product__likeSvg" />
          </LikeButton>
        </PriceContainer>
      </ProductContainer>
    </StyledProduct>
  );
}

export default memo(Product);
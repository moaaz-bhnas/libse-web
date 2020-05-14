import styled from 'styled-components';
import theme from '../../shared/theme';

export const Grid = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 -1em;
  padding-left: 0;
  flex-wrap: wrap;
`;

export const StyledProduct = styled.li`
  flex: 0 0 25%;
  padding: 0 1em;
  margin-bottom: 2em;

  display: flex;
`;

export const ProductContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const CoverContainer = styled.div`
  display: flex;
  height: 14em;
`;

export const Cover = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export const ProductLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ProductName = styled.p`
  margin: 0 auto;
  text-align: center;
  max-width: 14em;
  line-height: 1.25;
`;

export const Colors = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  margin: .8em 0 .6em;
`;

export const Color = styled.li`
  margin: 0 .5em;
`;

export const ColorButton = styled.button`
  display: block;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid #bbb;
  border: #e2e2e2 1px solid;
  background-color: ${props => props.color};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    border-radius: 50%;
    border: #bbb 1px solid;
  }

  &[data-active="true"] {
    &::after {
      border-color: #222;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const Price = styled.p`
  color: ${theme.text.interactive};
  margin: 0 .2em 0 0;
`;

export const Abbr = styled.abbr`
  text-decoration: none;
  font-variant: all-small-caps;
`;

export const LikeButton = styled.button`
  width: 2.5em;
  height: 2.5em;
  display: flex;
  background: transparent;
  border: none;
  padding: .5em;

  .product__likeSvg {
    width: 100%;
    fill: transparent;
    stroke: ${theme.bg.accent};
    stroke-width: 30;
  }

  &[data-favorite="true"] {
    .product__likeSvg {
      fill: ${theme.bg.accent};
    }
  }
`;
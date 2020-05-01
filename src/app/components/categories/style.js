import styled from 'styled-components';
import theme from '../../shared/theme';
import fonts from '../../shared/fonts';
import texture from '../../img/texture.png';

export const Section = styled.section``;

export const Title = styled.h2`
  font-family: ${fonts.serif};
  font-size: 2rem;
  margin: 0 0 1.25em 0;
`;

export const CategoriesList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;

  display: flex;
  justify-content: center;
`;

export const StyledCategory = styled.li`
  margin: 0 1.3rem;

  // &:nth-child(1) {
  //   .Category__cover {
  //     max-width: 17rem;
  //   }
  // }

  &:nth-child(2) {
    .Category__cover {
  //     max-width: 18rem;
      object-position: 50% 20%;
    }
  }

  &:nth-child(3) {
    .Category__cover {
  //     width: 15.5rem;
  //     height: 15rem;
  //     object-fit: cover;
    }
  // }
`;

export const CategoryLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  transition: opacity .2s;

  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export const CategoryName = styled.h3`
  text-transform: uppercase;
`;

export const CoverContainer = styled.div`
  position: relative;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   z-index: -1;
  //   right: .5rem;
  //   left: -.5rem;
  //   top: -1rem;
  //   bottom: 1rem;
  //   background: #A1886E url(${texture}) no-repeat center / cover;
  // }
`;

export const CategoryCover = styled.img`
  vertical-align: top;
  // padding: 10px;
  // border: 0.063rem solid #d9e4ea;
  border: .3em solid #E7DCBC;
  width: 17rem;
  height: 15rem;
  object-fit: cover;
`;
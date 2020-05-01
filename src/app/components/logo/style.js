import styled from 'styled-components';
import fonts from '../../shared/fonts';

export const LogoLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: .2em 0;
  display: flex;
  align-items: center;

  &[data-seller-center="true"] {
    margin-right: auto;

    &:hover,
    &:focus {
      outline-color: #fff;
    }
  }
`;

// export const LogoImg = styled.img`
//   width: 8rem;
// `;

export const LogoText = styled.span`
  font-family: ${fonts.serif};
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.color};
`;
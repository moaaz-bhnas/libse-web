import styled, { css } from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const rectButton = css`
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  background-color: ${theme.bg.accent};
  border-radius: ${measurements.borderRadius.input};
  border: none;
  padding: 1em;
  cursor: pointer;
  transition: .1s opacity;
  display: inline-flex;
  align-items: center;
  line-height: 1;

  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export const Button = styled.button`
  ${rectButton};
`;

export const AddProduct = styled.a`
  text-decoration: none;
  ${rectButton}
`;

export const AddIcon = styled.img`
  width: 1em;
  margin-right: .55em;
`;

export const NextIcon = styled.img`
  width: 1em;
  margin-left: .55em;
`;

export const PreviousIcon = styled.img`
  width: 1em;
  margin-right: .55em;
`;
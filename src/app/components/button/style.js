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
  transition-property: box-shadow, background-color;
  transition-duration: .15s;
  display: inline-flex;
  align-items: center;
  line-height: 1;

  &:hover {
    background-color: #ae452e;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(215, 126, 106, .5);
  }

  &[data-disabled="true"] {
    opacity: .65;
    cursor: not-allowed;

    &:hover {
      background-color: ${theme.bg.accent};
    }
  }
`;

export const Button = styled.button`
  ${rectButton};

  &[data-positioned-absolutely="true"] {
    position: absolute;
    left: 25em;
    transform: translateX(-100%);
  }
`;

export const AddProduct = styled.a`
  text-decoration: none;
  ${rectButton}
  margin-bottom: 1em;
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
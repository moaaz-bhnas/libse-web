import { createGlobalStyle } from 'styled-components';
import theme from './shared/theme';
import fonts from './shared/fonts';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${fonts.sansSerif};
    color: ${theme.text.default};
    background-color: ${theme.bg.primary};
    margin: 0;
    padding: 0;
  }

  button {
    font-size: 1rem;
    cursor: pointer;
    font-family: ${fonts.sansSerif};
  }

  input,
  textarea {
    &::placeholder {
      font-size: 1rem;
      color: #686868;
    }
  }
`;
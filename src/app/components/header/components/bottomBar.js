import { memo } from 'react';
import {
  StyledBottomBar, 
  Container
} from '../style';
import Logo from '../../logo';
import Categories from './categories';

const BottomBar = () => {
  return (
    <StyledBottomBar>
      <Container>
        <Logo />
        <Categories />
      </Container>
    </StyledBottomBar>
  );
}

export default memo(BottomBar);
import { memo } from 'react';
import { 
  StyledBanner,
  Container,
  BannerImg
} from './style';
// import banner from '../../img/banner.jpg';

const Banner = () => {
  return (
    <StyledBanner>
      <BannerImg src="https://via.placeholder.com/929x400" alt="banner" />
    </StyledBanner>
  );
}

export default memo(Banner);
import React, { memo } from 'react';
import {
  LogoLink,
  LogoImg,
  LogoText
} from './style';
import Link from 'next/link';
import logo from '../../img/logo.png';
import { title } from '../../shared/data';

const Logo = ({ fontSize, color, sellerCenter = false }) => {
  return (
    <Link passHref href="/">
      <LogoLink data-seller-center={sellerCenter}>
        <LogoText fontSize={fontSize} color={color}>{title}</LogoText>
        {/* <LogoImg src={logo} alt="Logo" /> */}
      </LogoLink>
    </Link>
  );
}

export default memo(Logo);
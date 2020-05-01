import styled, { css } from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';
import fonts from '../../shared/fonts';

export const StyledHeader = styled.header`
  margin-bottom: 1.5em;
  padding-top: 5.375em;
  position: relative;
  z-index: 1;

  &[data-topbar="false"] {
    padding-top: 3em;
  }

  &[data-seller-center="true"] {
    padding-top: 3em;
  }
`;

const unvisible = css`
  position: absolute;
  left: -100rem;
`;

export const Title = styled.h1`
  ${unvisible}
`;

export const Navigation = styled.nav``;

export const NavigationTitle = styled.h2`
  ${unvisible}
`;

const fixedStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const TopAndMiddleBarsContainer = styled.div`
  ${fixedStyles};
`;

export const StyledTopBar = styled.div`
  height: 2.375em;
  background-color: ${theme.bg.secondary};
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  transition: margin-top .2s;

  &[data-visible="false"] {
    margin-top: -2.375em;
  }
`;

export const Invitation = styled.p`
  color: #fff;
  margin: 0;
  align-self: stretch;
  display: flex;
  align-items: center;
`;

export const InvitationLink = styled.a`
  color: #fff;
  margin: 0 .5em;
  align-self: stretch;
  display: flex;
  align-items: center;

  &:focus {
    outline-color: #fff;
  }
`;

export const B = styled.b``;

export const StyledMiddleBar = styled.div`
  background-color: ${theme.bg.secondary};
  height: 3rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .15);
`;

export const Container = styled.div`
  max-width: ${measurements.maxWidth.container};
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSearchForm = styled.form`
  background-color: #fff;
  border-radius: .3rem;

  height: 2.3rem;
  display: flex;
  margin-right: auto;
`;

const buttonStyles = css`
  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBtn = styled.button`
  ${buttonStyles}

  padding: 0;
  width: 2.4rem;
  border-radius: 0 .3rem .3rem 0;
  background-color: ${theme.bg.secondaryLight};

  &:hover,
  &:focus {
    background-color: #fff;
    outline-color: #fff;
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;
`;

export const SearchInput = styled.input`
  border: none;
  width: 15rem;
  padding-left: .4rem;
  border-radius: .3rem 0 0 .3rem;
  background-color: ${theme.bg.secondaryLight};

  &:focus {
    background-color: #fff;
    outline-color: #fff;

    &::placeholder {
      color: #757575;
    }
  }

  &::placeholder {
    color: ${theme.text.secondaryLightOpposite};
  }
`;

export const FavoritesContainer = styled.div`
`;

const svgStyles = css`
  fill: transparent;
  stroke: #fff;
  stroke-width: 30;
  width: 1.3em;

  transition: fill .1s;
`;

export const FavoritesToggler = styled.button`
  ${buttonStyles}
  height: 3rem;
  padding: 0 .85em;
  // margin-right: 1em;

  &:hover,
  &:focus {
    outline-color: #fff;

    .heartSvg {
      fill: #fff;
    }
  }

  .heartSvg {
    ${svgStyles}
  }
`;

export const ChatContainer = styled.div``;

export const ChatToggler = styled.button`
  ${buttonStyles}
  height: 3rem;
  padding: 0 1.05em;
  margin-right: 1em;

  &:hover,
  &:focus {
    outline-color: #fff;

    .chatSvg {
      fill: #fff;
    }
  }

  .chatSvg {
    ${svgStyles}
  }
`;

export const StoreLink = styled.a`
  ${buttonStyles}
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  height: 3rem;
  transition: .1s opacity;
  margin-right: .8em;

  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    opacity: .6;
    outline-color: #fff;
  }
`;

export const StyledAuth = styled.p`
  margin: 0;
`;

export const AuthLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: .5rem 0;
  font-weight: 700;

  &:hover,
  &:focus {
    text-decoration: underline;
    outline-color: #fff;
  }
`;

export const Span = styled.span`
  margin: 0 .7em;
  color: #fff;
`;

export const StyledBottomBar = styled.div`
  padding: 2.5em 0;
`;

export const StyledSidebarToggler = styled.button`
  ${buttonStyles}
  height: 3rem;
  padding: 0 1em;
  margin-right: .5em;
  margin-left: -1.05em;

  &:hover,
  &:focus {
    .sidebar__hamburgerIcon {
      opacity: .6;
    }
  }

  &:focus {
    outline-color: #fff;
  }
`;

export const HamburgerIcon = styled.img`
  width: ${({ size }) => size ? size : '1em'};
  transition: opacity .1s;
`;

export const LogoLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-right: 1em;
  align-self: stretch;
  display: flex;
  align-items: center;
`;

// export const LogoImg = styled.img`
//   width: 8rem;
// `;

export const LogoText = styled.span`
  font-size: 2rem;
  font-family: ${fonts.serif};
`;

const listStyles = css`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const StyledCategories = styled.ul`
  ${listStyles}
  display: flex;
`;

export const Category = styled.li`
  &:last-child {
    .headerBottomBar__categoryLink {
      padding-right: 0;
    }
  }
`;

export const CategoryLink = styled.a`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  font-weight: 700;
  padding: 1em 1.5em;
  letter-spacing: .05em;

  &:hover,
  &:focus {
    color: ${theme.text.interactive};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownToggler = styled.button`
  ${buttonStyles}
  font-weight: 700;
  color: #fff;
  height: 3rem;
  transition: .1s opacity;

  &:hover,
  &:focus {
    opacity: .6;
    outline-color: #fff;
  }
`;

export const DownArrow = styled.img`
  width: .85em;
  margin-left: .8em;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  background-color: #fff;
  width: 15em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 50%;
    transform: translate(50%, -50%) rotate(45deg);
    width: .8rem;
    height: .8rem;
    background-color: #fff;
  }

  &[data-seller-center="true"] {
    right: 0;
    transform: translateX(0);

    &::before {
      right: 3em;
      transform: translate(0, -50%) rotate(45deg);
    }
  }
`;

export const MenuitemLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding: .5em;

  display: flex;
  align-items: center;

  transition-property: font-weight, background-color;
  transition-duration: .1s;

  &:hover,
  &:focus,
  &[tabindex="0"] {
    font-weight: 700;
    background-color: ${theme.bg.grey};
  }

  &:nth-last-child(2) {
    border-bottom: 2px solid ${theme.border.grey};
  }
`;

export const MenuitemButton = styled.button`
  ${buttonStyles};
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 700;
  color: ${theme.text.interactive};
  padding: 1.1em 0;

  &:hover,
  &:focus,
  &[tabindex="0"] {
    background-color: #fbf2f0;
  }
`;

export const MenuitemIcon = styled.img`
  width: 1.8em;
  margin-right: .9em;
`;

export const StyledSellerBar = styled.div`
  background-color: ${theme.bg.secondary};
  height: ${measurements.height.sellerHeader};
  display: flex;
  padding: 0 1.05em;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .15);

  ${fixedStyles}
`;

export const StyledSellerSidebar = styled.div``;

export const SellerSidebarList = styled.ul`
  ${listStyles}

  position: fixed;
  top: ${measurements.height.sellerHeader};
  left: 0;
  bottom: 0;
  width: ${({ expanded }) => expanded ? measurements.width.sidebar : measurements.width.sidebarCollapsed};
  background-color: ${theme.bg.secondary};
  border-top: 1px solid ${theme.border.shuttleGrey};
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, .15);
`;

export const SellerSidebarItem = styled.li`
  &:last-child {
    border-bottom: 5px solid ${theme.border.shuttleGrey};
  }
`;

export const SellerSidebarLink = styled.a`
  text-decoration: none;
  color: ${theme.text.manatee};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.border.shuttleGrey};
  transition-property: color, background-color;
  transition-durarion: .1s;
  position: relative;
  padding: 1em;

  .svg {
    width: 1.3em;
    fill: ${theme.bg.manatee};
    transition: fill .1s;
  }

  &:hover,
  &:focus,
  &[data-active="true"] {
    color: #fff;

    .dashboardSvg {
      fill: #008CFF;
    }

    .productsSvg {
      fill: #fed02f;
    }

    .sponsoredSvg {
      fill: #1fc876;
    }
  }

  &:hover,
  &:focus {
    background-color: ${theme.bg.tuna};
    outline-color: #fff;
  }

  &[data-active="true"] {
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 5px;
    }

    &.sellerSidebar__dashboardLink::after {
      background-color: #008CFF;
    }

    &.sellerSidebar__productsLink::after {
      background-color: #fed02f;
    }

    &.sellerSidebar__sponsoredLink::after {
      background-color: #1fc876;
    }
  }
`;

export const SellerSidebarLinkText = styled.span`
  margin-left: 1em;
  margin-right: auto;
`;

export const RightArrow = styled.img`
  width: .75em;
`;
import { memo, useState, useRef, useContext, useCallback, useEffect } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from '../../../contexts/auth';
import { signOut } from '../../../redux/actions/authActions';
import {
  DropdownContainer,
  DropdownToggler,
  DropdownMenu,
  MenuitemLink,
  MenuitemButton,
  DownArrow,
  MenuitemIcon
} from '../style';
import downArrow from '../../../img/down-arrow.svg';
import orderIcon from '../../../img/orders.svg';

const MenuItem = (props) => {
  const { index, activeIndex, itemsRefs, link, href, handleClick, value, icon } = props;
  
  const menuItemProps = {
    role     : 'menuitem',
    id       : `item${index+1}`,
    tabIndex : activeIndex === index ? 0 : -1,
    ref      : el => itemsRefs.current[index] = el,
  }
  
  return (
    <>
      {
        link ?
        <Link href={href} passHref>
          <MenuitemLink { ...menuItemProps }>
            <MenuitemIcon src={icon} alt="" /> {value}
          </MenuitemLink> 
        </Link> :
        <MenuitemButton { ...menuItemProps } onClick={handleClick}>{value}</MenuitemButton>
      }
    </>
  )
}

const AccountDropdown = ({ previousInteractiveElement, sellerCenter }) => {
  const { uid } = useContext(AuthContext);

  // redux
  const profile = useSelector(state => state.firebase.profile);
  const firstName = profile.username && profile.username.split(' ')[0]
  const dispatch = useDispatch();

  // Refs
  const containerRef = useRef(null);
  const togglerRef   = useRef(null);
  const itemsRefs    = useRef([]);

  // state
  const [ menuExpanded, setMenuExpanded ] = useState(false);
  const handleClickOutside = useCallback((event) => {
    const { target } = event;
    if (!containerRef.current.contains(target) && menuExpanded) {
      setMenuExpanded(false);
    }
  }, [ menuExpanded ])
  useEffect(function addClickOutsideHandler() {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ menuExpanded ])

  const [ activeIndex, setActiveIndex ] = useState(null);
  const handleTogglerKeyDown = useCallback((event) => {
    const { key  } = event;
    if (key === 'ArrowDown') {
      event.preventDefault();
      setMenuExpanded(true);
    }
    if ((key === 'ArrowDown' || key === 'Enter' || key === ' ') && !menuExpanded) {
      setActiveIndex(0);
    }
  }, []);
  useEffect(() => {
    if (menuExpanded && Number.isInteger(activeIndex)) {
      if (activeIndex) {
        itemsRefs.current[activeIndex].focus();
      } else {
        setActiveIndex(0);
        itemsRefs.current[0].focus();
      }
    }
    if (!menuExpanded) {
      setActiveIndex(null);
    }
  }, [ menuExpanded ]);

  const handleMenuKeyDown = useCallback((event) => {
    const { key, shiftKey } = event;
    const lastIndex = itemsRefs.current.length - 1;

    const moveToIndex = (newActiveIndex) => {
      event.preventDefault();
      setActiveIndex(newActiveIndex);
      itemsRefs.current[newActiveIndex].focus();
    };
    
    if (key === 'ArrowUp') {
      const isFirstIndex = activeIndex === 0;
      if (isFirstIndex) {
        moveToIndex(lastIndex);
      } else {
        moveToIndex(activeIndex - 1);
      }
    } else if (key === 'ArrowDown') {
      const isLastIndex = activeIndex === lastIndex;
      if (isLastIndex) {
        moveToIndex(0);
      } else {
        moveToIndex(activeIndex + 1);
      }
    } else if (key === 'Escape') { 
      setMenuExpanded(false);
      togglerRef.current.focus();
    } else if (shiftKey && key === 'Tab') {
      event.preventDefault();
      setMenuExpanded(false);
      previousInteractiveElement.current.focus();
    } else if (key === 'Tab') {
      setMenuExpanded(false);
    } 
  }, [ activeIndex ]);

  const items = [
    { value: 'Orders',  link: true,   href: `/user/${uid}/orders`, icon: orderIcon },
    { value: 'Log out', link: false,  handleClick: () => dispatch(signOut(router)) }
  ];

  return (
    <DropdownContainer ref={containerRef}>
      <DropdownToggler
        aria-label="toggle account menu" 
        aria-haspopup="true" 
        aria-expanded={menuExpanded} 
        aria-controls="accountMenu"
        ref={togglerRef}
        onClick={() => setMenuExpanded(!menuExpanded)}
        onKeyDown={handleTogglerKeyDown}
      >
        Hi, {firstName}
        <DownArrow src={downArrow} alt="" />
      </DropdownToggler>

      <DropdownMenu 
        id="accountMenu"
        role="menu"
        aria-label="account menu"
        aria-activedescendant={Number.isInteger(activeIndex) ? `item${activeIndex+1}` : null}
        visible={menuExpanded}
        onKeyDown={handleMenuKeyDown}
        data-seller-center={sellerCenter}
      >
        {
          items.map((item, index) => (
            <MenuItem
              key={index}
              index={index}
              activeIndex={activeIndex}
              id={`item${index+1}`}
              itemsRefs={itemsRefs}
              link={item.link}
              href={item.href}
              handleClick={item.handleClick}
              icon={item.icon}
              value={item.value}
            />
          ))
        }
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default memo(AccountDropdown);
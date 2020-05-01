import { memo, useContext } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutContext } from '../../../contexts/layout';
import {  
  StyledSellerSidebar, 
  SellerSidebarList,
  SellerSidebarItem,
  SellerSidebarLink,
  RightArrow,
  SellerSidebarLinkText
} from '../style';
import SidebarToggler from './sidebarToggler';
import SvgDashboard from '../../../svgs/dashboard';
import SvgProducts from '../../../svgs/products';
import SvgSponsored from '../../../svgs/sponsored';
import rightArrow from '../../../img/right-arrow.svg';

const items = [ 
  { value: 'dashboard',          Icon: SvgDashboard },
  { value: 'products',           Icon: SvgProducts },
  { value: 'sponsored products', Icon: SvgSponsored }
];

const Item = ({ itemObject, expanded }) => {
  const { value, Icon } = itemObject;
  const href = (value === 'dashboard') ? '/seller' : `/seller/${value.split(' ').join('-')}`;
  
  const { pathname } = useRouter();
  const active = pathname === href;

  return (
    <SellerSidebarItem>
      <Link href={href} passHref>
        <SellerSidebarLink 
          className={`sellerSidebar__${value.split(' ')[0]}Link`}
          data-active={active} 
          onMouseDown={e => e.preventDefault()}
          aria-label={value}
        >
          <Icon />
          {expanded && <SellerSidebarLinkText>{value}</SellerSidebarLinkText>}
          {expanded && !active && <RightArrow src={rightArrow} alt="" />}
        </SellerSidebarLink>
      </Link>
    </SellerSidebarItem>
  );
}

const SellerSidebar = () => {
  const { 
    sellerSidebarExpanded: expanded, 
    setSellerSidebarExpanded: setExpanded 
  } = useContext(LayoutContext);

  return (
    <StyledSellerSidebar>
      <SidebarToggler 
        size="1.2em"
        onClick={() => setExpanded(!expanded)}
      />

      <SellerSidebarList expanded={expanded}>
        {
          items.map((item, index) => (
            <Item 
              key={item.value} 
              itemObject={item} 
              expanded={expanded}
            />
          ))
        }
      </SellerSidebarList>
    </StyledSellerSidebar>
  );
}

export default memo(SellerSidebar);
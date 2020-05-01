import { memo } from 'react';
import {

} from '../style';
import SidebarToggler from './sidebarToggler';

const Sidebar = () => {
  return (
    <>
      <SidebarToggler />
    </>
  );
}

export default memo(Sidebar);
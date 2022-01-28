import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './assets/Logo';
import Button from './buttons/Button';
import ShowMobile from './utilites/ShowMobile';
import SearchBar from './SearchBar';
import HamburgerButton from './buttons/HamburgerButton';
import PlusSvg from './assets/PlusSvg';
import { useData } from '../contexts/DataProvider';
import { breakpoints } from '../consts/responsive';
import HideMobile from './utilites/HideMobile';
import AccountProfile from './AccountProfile';

export default function Topbar({ showSidebar }) {
  const { windowSize } = useData();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <StyledTopbar>
      <div>
        <ShowMobile>
          <HamburgerButton
            style={{ marginLeft: '24px', marginRight: '12px' }}
            onClick={showSidebar}
          />
          <Logo
            style={{ width: '109px', display: isCollapsed ? 'block' : 'none' }}
          />
        </ShowMobile>
      </div>
      <div
        style={{
          flexGrow: 1,
          justifyContent: windowSize.width <= breakpoints.sm ? 'right' : 'left',
        }}
      >
        <SearchBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>
      <div>
        <ShowMobile>
          <Button
            style={{ marginLeft: '8px', marginRight: '24px' }}
            className="secondary small"
            icon={PlusSvg}
          >
            {isCollapsed ? '링크 추가' : ''}
          </Button>
        </ShowMobile>
        <HideMobile>
          <AccountProfile />
        </HideMobile>
      </div>
    </StyledTopbar>
  );
}

const StyledTopbar = styled.div`
  width: 100%;
  height: 88px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
  }
  & button {
    flex-shrink: 0;
  }
`;
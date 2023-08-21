import React from 'react';
import UserNav from '../UserNav/UserNav';
import {
  SideBarWrap,
  TopWrap,
  StyledLogoWrapper,
  SideBarImg,
  StyledTitle,
  StyledCloseButton,
  Overlay,
  SpanSpec,
  LogoAndNavWrap,
} from './SideBar.styled';
import LogoutButton from '../Buttons/LogoutButton/LogoutButton';
import GooseDeskLogo2x from '../../images/goose-logo/goose-logo-desktop-2x.webp';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import sprite from '../../images/svg-sprite/symbol-defs.svg';

export const SideBar = ({ isModalMenuOpen, closeModalMenu }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleCloseModalMenu = () => {
    closeModalMenu(false);

    if (isModalMenuOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <SideBarWrap className={isModalMenuOpen && 'openModalMenu'}>
        <LogoAndNavWrap>
          <TopWrap>
            <StyledLogoWrapper>
              <SideBarImg src={`${GooseDeskLogo2x}`} />
              <StyledTitle>
                G<SpanSpec>oo</SpanSpec>seTrack
              </StyledTitle>
            </StyledLogoWrapper>
            <StyledCloseButton onClick={handleCloseModalMenu}>
              <use href={sprite + '#icon-x-close'} />
            </StyledCloseButton>
          </TopWrap>
          <UserNav closeModalMenu={closeModalMenu} />
        </LogoAndNavWrap>
        <LogoutButton onClick={handleLogOut} />
      </SideBarWrap>
      {isModalMenuOpen && <Overlay onClick={handleCloseModalMenu} />}
    </>
  );
};

export default SideBar;

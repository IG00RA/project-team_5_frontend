import { LogoutBtn } from "../Button/LogoutButton";
import React from 'react';
import UserNav from "../UserNav/UserNav";
import { useEffect } from 'react';
import { useDispatch, logOut } from 'react-redux';
import { SideBarWrap, TopWrap, StyledLogoWrapper, SideBarImg, StyledTitle, StyledCloseButton, Overlay
} from './SideBar.styled';
import { GooseLogoImg } from './SideBar.styled';


export const SideBar = ({ isModalMenuOpen, closeModalMenu }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        closeModalMenu(false);
      }
    };
    isModalMenuOpen && window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isModalMenuOpen, closeModalMenu]);

  const handleCloseModalMenu = () => {
    closeModalMenu(false);
  };

  return (
    <>
    <SideBarWrap className={isModalMenuOpen && 'openModalMenu'}>
      <TopWrap>
        <StyledLogoWrapper>
          <SideBarImg>
            <source
              media="(max-width: 767px)"
            />
            <source
              media="(min-width: 768px) and (max-width: 1439px)"
            />
            <source
              media="(min-width: 1440px)"
            />
            <GooseLogoImg src={gooseLogoMobile} alt="Goose Logo" />
          </SideBarImg>
          <StyledTitle>GooseTrack</StyledTitle>
        </StyledLogoWrapper>
        <StyledCloseButton onClick={handleCloseModalMenu}>
        </StyledCloseButton>
      </TopWrap>

      <UserNav closeModalMenu={closeModalMenu} />
      <LogoutBtn type="button" onClick={handleLogOut}>
        {(`sidebar.Log Out`)}
        <LogIn style={{ marginLeft: 11, width: 20, height: 20 }} />
      </LogoutBtn>
    </SideBarWrap>
    {isModalMenuOpen && <Overlay onClick={handleCloseModalMenu} />}
  </>
);
};

export default SideBar;
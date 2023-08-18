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

export const SideBar = ({ isModalMenuOpen, closeModalMenu }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  //   const node = useRef();
  //   const useOnClickOutside = (ref, handler) => {
  //     useEffect(() => {
  //     const listener = event => {
  //       if (!ref.current || ref.current.contains(event.target)) {
  //         return;
  //       }
  //       handler(event);
  //     };
  //     document.addEventListener('mousedown', listener);
  //     return () => {
  //       document.removeEventListener('mousedown', listener);
  //     };
  //   }, [ref, handler]);
  // };

  // useOnClickOutside(node, () => {
  //   if (isModalMenuOpen) {
  //     closeModalMenu();
  //   }
  // });

  const handleCloseModalMenu = () => {
    closeModalMenu(false);

    if (isModalMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const clickHandler = e => {
    console.log(e.currentTarget === e.target);
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
      handleCloseModalMenu();
    }
  };

  // useEffect(() => {
  //   const close = e => {
  //     closeModalMenu(false);
  //   };
  //   isModalMenuOpen && window.addEventListener('keydown', close);
  //   return () => {
  //     window.removeEventListener('keydown', close);
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isModalMenuOpen, closeModalMenu]);

  return (
    <>
      <SideBarWrap
        className={isModalMenuOpen && 'openModalMenu'}
        onClick={clickHandler}
        // ref={node}
      >
        <LogoAndNavWrap>
          <TopWrap>
            <StyledLogoWrapper>
              <SideBarImg src={`${GooseDeskLogo2x}`} />
              <StyledTitle>
                G<SpanSpec>oo</SpanSpec>seTrack
              </StyledTitle>
            </StyledLogoWrapper>
            {/* <StyledCloseButton
              onClick={handleCloseModalMenu}
            ></StyledCloseButton> */}
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

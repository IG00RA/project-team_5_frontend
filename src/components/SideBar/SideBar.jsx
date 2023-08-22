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
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <SideBarWrap className={isModalMenuOpen && 'openModalMenu'}>
        <div>
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
        </div>
        <LogoutButton onClick={handleLogOut} />
      </SideBarWrap>
      {isModalMenuOpen && <Overlay onClick={handleCloseModalMenu} />}
    </>
  );
};

export default SideBar;

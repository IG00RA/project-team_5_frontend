import { useDispatch } from 'react-redux';
import { SunSVG, ButtonToggle } from './ThemeToggler.styled';
import { toggleTheme } from '../../redux/auth/operations';
export const ThemeToggler = () => {
  const dispatch = useDispatch();
  // const themeInterface = useSelector(state => state.auth.user.themeInterface);

  function handlerClick() {
    dispatch(toggleTheme());
  }

  return (
    <ButtonToggle onClick={handlerClick}>
      <SunSVG />
      {/* {themeInterface === 'light' && <SunSVG />}
      {themeInterface === 'dark' && <MoonSVG />} */}
    </ButtonToggle>
  );
};

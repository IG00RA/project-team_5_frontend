import { useDispatch, useSelector } from 'react-redux';
import { MoonSVG, SunSVG, ButtonToggle } from './ThemeToggler.styled';
import { toggleTheme } from 'redux/auth/operations';
export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const themeInterface = useSelector(state => state.auth.user.themeInterface);

  function handlerClick() {
    dispatch(toggleTheme());
  }

  return (
    <ButtonToggle onClick={handlerClick}>
      {themeInterface === 'light' && <SunSVG />}
      {themeInterface === 'dark' && <MoonSVG />}
    </ButtonToggle>
  );
};
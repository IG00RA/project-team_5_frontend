import { useDispatch, useSelector } from 'react-redux';
import { SunSVG, ButtonToggle, MoonSVG } from './ThemeToggler.styled';
import { toggleTheme } from '../../redux/auth/operations';
export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.auth.user.theme);

  function handlerClick() {
    dispatch(toggleTheme());
  }

  return (
    <ButtonToggle onClick={handlerClick}>
      {theme === 'dark' ? <SunSVG /> : <MoonSVG />}
    </ButtonToggle>
  );
};

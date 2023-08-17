import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/user/selectors';
import { SunSVG, ButtonToggle, MoonSVG } from './ThemeToggler.styled';
import { toggleTheme } from '../../redux/auth/operations';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  function handlerClick() {
    dispatch(toggleTheme());
  }

  return (
    <ButtonToggle onClick={handlerClick}>
      {theme === 'dark' ? <SunSVG /> : <MoonSVG />}
    </ButtonToggle>
  );
};

import { darkTheme, lightTheme } from 'utils/theme';

export const setMainStyles = userTheme => {
  const root = document.getElementById('root');
  root.style.backgroundColor =
    userTheme === 'dark'
      ? darkTheme.colors.mainLayout.bg
      : lightTheme.colors.mainLayout.bg;
};

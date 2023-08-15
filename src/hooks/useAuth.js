import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { selectUser } from 'redux/user/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

import { Suspense, useEffect } from 'react';
import { Header } from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'redux/user/operations';
// import { selectIsLoadingUser } from 'redux/user/selectors';
import Loader from 'components/loader/loader';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function MainLayout() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoadingUser);
  const isLoagedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // return !isLoagedIn || isLoading ? (
  return !isLoagedIn ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<div>Loading page...</div>}>
        <Header />
        <SideBar />
        <Outlet />
      </Suspense>
    </>
  );
}

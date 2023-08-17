import { Suspense, useEffect, useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import { Container, Wrapper } from './MainLayout.styled';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'redux/user/operations';
import Loader from 'components/loader/loader';
import Header from 'components/Header/Header';
// import { selectIsLoadingUser } from 'redux/user/selectors';
// import Loader from 'components/loader/loader';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

const MainLayout = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoadingUser);
  // const isLoagedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // return !isLoagedIn || isLoading ? (
  // return !isLoagedIn ? (
  //   <Loader />
  // ) :
  return (
    <>
      <Suspense
        fallback={
          <div>
            {/* Loading page... */}
            <Loader />
          </div>
        }
      >
        <Container>
          <SideBar
            isModalMenuOpen={isModalMenuOpen}
            closeModalMenu={setIsModalMenuOpen}
          />
          <Wrapper>
            <Header openMenu={() => setIsModalMenuOpen(true)} />
            <main>
              <Outlet />
            </main>
          </Wrapper>
        </Container>
      </Suspense>
    </>
  );
};

export default MainLayout;

import { Suspense, useEffect, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Container, Wrapper } from './MainLayout.styled';
import { Outlet } from 'react-router-dom';
import Loader from 'components/loader/loader';
import Header from 'components/Header/Header';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'redux/user/operations';

const MainLayout = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <SideBar
          isModalMenuOpen={isModalMenuOpen}
          closeModalMenu={setIsModalMenuOpen}
        />
        <Wrapper>
          <Header openMenu={() => setIsModalMenuOpen(true)} />
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Wrapper>
      </Container>
    </>
  );
};

export default MainLayout;

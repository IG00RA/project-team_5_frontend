import { Suspense, useEffect, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Container, Wrapper } from './MainLayout.styled';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'redux/user/operations';
import Loader from 'components/Loader/Loader';

const MainLayout = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const openMenu = () => {
    setIsModalMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <Container>
        <SideBar
          isModalMenuOpen={isModalMenuOpen}
          closeModalMenu={setIsModalMenuOpen}
        />
        <Wrapper>
          <Header isModalMenuOpen={isModalMenuOpen} openMenu={openMenu} />
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

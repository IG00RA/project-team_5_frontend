import { useState } from 'react';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { Container, Wrapper } from './MainLayout.styled';
import { Outlet } from 'react-router-dom';

 export const MainLayout = () => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  return (
      <>
        <Container>
          <SideBar  
            isModalMenuOpen={isModalMenuOpen}
            closeModalMenu={setIsModalMenuOpen}
          />
          <Wrapper>
            <Header openMenu={() => setIsModalMenuOpen(true)}/> 
            <main>
                <Outlet />
            </main>
          </Wrapper>
          
        </Container>
      </>
  );
};



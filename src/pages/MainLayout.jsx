import { Header } from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
}

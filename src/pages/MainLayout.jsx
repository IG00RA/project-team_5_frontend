import { Header } from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Account from "./Account";
import Calendar from "./Calendar";
import Statistics from "./Statistics";


export default function MainLayout() {
  return (
    <>
      <Header />
      <p>User page</p>
      <SideBar />
      <Statistics />
      <Account />
      <Calendar />
    </>
  );
}

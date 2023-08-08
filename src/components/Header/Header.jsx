import { Button } from "../Button/Button";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { UserInfo } from "../UserInfo/UserInfo";

export const Header = () => {
  return (
    <>
      <p>Header</p>
      <UserInfo />
      <ThemeToggler />
      <Button />
    </>
  );
};

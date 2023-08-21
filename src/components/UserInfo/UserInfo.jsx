import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
import {
  AvatarContainer,
  AvatarField,
  AvatarImg,
  AvatarText,
  AvatarTextContainer,
  Container,
  UserName,
} from './UserInfo.styled';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { Link } from 'react-router-dom';

export const UserInfo = () => {
  const user = useSelector(selectUser);
  const name = user.userName ? user.userName.split(' ')[0] : user.userName;

  return (
    <Container>
      <ThemeToggler />
      <UserName>{name}</UserName>
      <AvatarField>
        {user.avatarURL ? (
          <AvatarContainer>
            <Link to="/account">
              <AvatarImg src={user.avatarURL} alt="User avatar" />
            </Link>
          </AvatarContainer>
        ) : (
          <AvatarContainer>
            <AvatarTextContainer>
              <Link to="/account">
                <AvatarText>{user.userName ? user.userName[0] : ''}</AvatarText>
              </Link>
            </AvatarTextContainer>
          </AvatarContainer>
        )}
      </AvatarField>
    </Container>
  );
};

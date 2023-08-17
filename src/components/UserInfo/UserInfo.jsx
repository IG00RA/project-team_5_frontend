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
            <AvatarImg src={user.avatarURL} alt="User avatar" />
          </AvatarContainer>
        ) : (
          <AvatarContainer>
            <AvatarTextContainer>
              <AvatarText>{user.userName}</AvatarText>
            </AvatarTextContainer>
          </AvatarContainer>
        )}
      </AvatarField>
    </Container>
  );
};

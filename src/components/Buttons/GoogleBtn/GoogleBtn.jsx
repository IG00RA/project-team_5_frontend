import sprite from '../../../images/svg-sprite/symbol-defs.svg';
import { GoogleButton, GoogleIcon } from './GoogleBtn.styled';

const GoogleBtn = ({ onClick, text }) => {
  return (
    <a
      style={{ display: 'block', width: '100%' }}
      href="https://project-team-5-backend.onrender.com/api/auth/google"
      target="blank"
    >
      <GoogleButton type="button" onClick={onClick}>
        {text}
        <GoogleIcon>
          <use href={sprite + '#icon-google'}></use>
        </GoogleIcon>
      </GoogleButton>
    </a>
  );
};

export default GoogleBtn;

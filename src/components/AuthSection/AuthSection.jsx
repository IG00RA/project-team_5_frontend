import React from 'react';
import {
  Wrap,
  Logo,
  Title,
  ButtonsWrap,
  ButtonsContainer,
  LogInButton,
  LogInIcon,
  SignUpLink,
} from './AuthSection.styled';
import GooseMob from '../../images/goose-banner-logo/banner-logo-mobile.webp';
import GooseMob2x from '../../images/goose-banner-logo/banner-logo-mobile-2x.webp';
import GooseTab from '../../images/goose-banner-logo/banner-logo-tablet.webp';
import GooseTab2x from '../../images/goose-banner-logo/banner-logo-tablet-2x.webp';
import GooseDesk from '../../images/goose-banner-logo/banner-logo-desktop.webp';
import GooseDesk2x from '../../images/goose-banner-logo/banner-logo-desktop-2x.webp';
import sprite from '../../images/svg-sprite/symbol-defs.svg';
import { Link } from 'react-router-dom';

export const AuthSection = () => {
  const isRetina = window.devicePixelRatio > 1;
  const gooseLogo = ` ${isRetina ? GooseMob2x : GooseMob} 375w,
                      ${isRetina ? GooseTab2x : GooseTab} 768w,
                      ${isRetina ? GooseDesk2x : GooseDesk} 769w`;

  return (
    <Wrap>
      <div>
        <Logo
          srcSet={gooseLogo}
          sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, (min-width: 769px) 769px"
          src={GooseMob}
          alt="Goose logo"
        />
        <Title>GooseTrack</Title>
      </div>

      <ButtonsContainer>
        <ButtonsWrap>
          <Link to="/login">
            <LogInButton type="button">
              Log in
              <LogInIcon>
                <use href={sprite + '#icon-log-in'}></use>
              </LogInIcon>
            </LogInButton>
          </Link>
        </ButtonsWrap>
        <SignUpLink type="button">
          <Link to="/register">Sign up</Link>
        </SignUpLink>
      </ButtonsContainer>
    </Wrap>
  );
};

export default AuthSection;

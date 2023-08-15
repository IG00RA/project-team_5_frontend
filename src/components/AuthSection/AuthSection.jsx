import React from 'react';
import { Wrap, Logo, Title, ButtonsWrap, ButtonsContainer, LogInButton, LogInIcon, SignUpLink } from './AuthSection.styled';
import GooseMob from '../../images/goose-banner-logo/banner-logo-mobile.webp';
import GooseMob2x from '../../images/goose-banner-logo/banner-logo-mobile-2x.webp';
import GooseTab from '../../images/goose-banner-logo/banner-logo-tablet.webp';
import GooseTab2x from '../../images/goose-banner-logo/banner-logo-tablet-2x.webp';
import GooseDesk from '../../images/goose-banner-logo/banner-logo-desktop.webp';
import GooseDesk2x from '../../images/goose-banner-logo/banner-logo-desktop-2x.webp';
import sprite from '../../images/svg-sprite/symbol-defs.svg';



export const AuthSection = () => {

  const isRetina = window.devicePixelRatio > 1;
  const gooseLogo = ` ${isRetina ? GooseMob2x : GooseMob} 375w,
                      ${isRetina ? GooseTab2x : GooseTab} 768w,
                      ${isRetina ? GooseDesk2x : GooseDesk} 769w`

  return(
    <Wrap>

    <div>
      <Logo
        srcSet={gooseLogo}
        sizes='(max-width: 375px) 375px, (max-width: 768px) 768px, (min-width: 769px) 769px'
        src={GooseMob}
        alt="Goose logo"
      />
      <Title>GooseTrack</Title>
    </div>

      <ButtonsContainer>
      <ButtonsWrap href="https://ig00ra.github.io/project-team_5_frontend/login">
        <LogInButton type="button" to="https://ig00ra.github.io/project-team_5_frontend/login">Log in
        <LogInIcon>
          <use href={sprite + '#icon-log-in'}></use>
        </LogInIcon>
        </LogInButton>
      </ButtonsWrap>
      <SignUpLink href="https://ig00ra.github.io/project-team_5_frontend/register" to="https://ig00ra.github.io/project-team_5_frontend/register">Sign up</SignUpLink> 
      </ButtonsContainer>  
  </Wrap>
  )
};

export default AuthSection;
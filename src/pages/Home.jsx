import React from 'react';
import { Wrap, Logo, Title, ButtonsWrap, LogInButton, LogInIcon, SignUpLink } from './Home.styled';
/* import sprite from '../images/svg-sprite/symbol-defs.svg'; */

export const Landing = () => {
  return(
    <Wrap>

    <div>
      <Logo src="./images/goose-logo/goose-logo-mobile.webp" alt="Goose logo"></Logo>
      <Title>GooseTrack</Title>
    </div>

    <ButtonsWrap>
      <LogInButton type="button">Log in
        <LogInIcon>
          <use href={'../images/svg/log-in.svg'}></use>
        </LogInIcon>
      </LogInButton>
    <SignUpLink href="index.js">Sign up</SignUpLink>
    </ButtonsWrap>
  </Wrap>
  )
};

export default Landing;

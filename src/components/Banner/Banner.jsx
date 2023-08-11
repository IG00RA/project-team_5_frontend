import React from 'react';
import { Wrap, Logo, Title, ButtonsWrap, LogInButton, LogInIcon, SignUpLink } from './Banner.styled';
/* import sprite from '../images/svg-sprite/symbol-defs.svg'; */


export const Banner = () => {
  return(
    <Wrap>

    <div>
      <Logo src={"/public/logo192.png"} alt="Goose logo"></Logo>
      <Title>GooseTrack</Title>
    </div>

    <ButtonsWrap>
      <LogInButton type="button">Log in
        <LogInIcon>
          {/* <use href={}></use> */}
        </LogInIcon>
      </LogInButton>
    <SignUpLink href="index.js">Sign up</SignUpLink>
    </ButtonsWrap>
  </Wrap>
  )
};

export default Banner;

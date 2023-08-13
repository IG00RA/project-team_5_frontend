import React from 'react';
import { Wrap, Logo, Title, ButtonsWrap, LogInButton, LogInIcon, SignUpLink } from './AuthSection.styled';
/* import GooseMob from '../../images/goose-banner-logo/banner-logo-mobile.webp';
import GooseMob2x from '../../images/goose-banner-logo/banner-logo-mobile-2x.webp';
import GooseTab from '../../images/goose-banner-logo/banner-logo-tablet.webp';
import GooseTab2x from '../../images/goose-banner-logo/banner-logo-tablet-2x.webp';
import GooseDesk from '../../images/goose-banner-logo/banner-logo-desktop.webp'; */
import GooseDesk2x from '../../images/goose-banner-logo/banner-logo-desktop-2x.webp';
import sprite from '../../images/svg-sprite/symbol-defs.svg';


export const AuthSection = () => {
  return(
    <Wrap>

    <div>
        <Logo src={GooseDesk2x} alt="Goose logo" />

{/*       <Logo>
              <source srcSet="
                ${GooseMob} 1x, 
                ${GooseMob2x} 2x"
                
                media="(max-width: 374px)" />
            
              <source srcSet="
                ${GooseTab} 1x, 
                ${GooseTab2x} 2x"  
                
                media="(min-width: min-width: 375px)" />
            
              <source srcSet="
                ${GooseDesk} 1x, 
                ${GooseDesk2x} 2x"
                
                media="(min-width: min-width: 768px)" />
            
              <img src={GooseMob} alt="Goose logo" />
            </Logo> */}

      <Title>GooseTrack</Title>
    </div>

      <ButtonsWrap href="/login">
        <LogInButton type="button" href="/login" to="/login">Log in
        <LogInIcon>
          <use href={sprite + '#icon-log-in'}></use>
        </LogInIcon>
      </LogInButton>
      <SignUpLink href="/register" to="/register">Sign up</SignUpLink> 
      </ButtonsWrap>
  </Wrap>
  )
};

export default AuthSection;
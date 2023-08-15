import React from 'react';
import {
  Wrap,
  PictureWrap,
  Picture,
  Text,
  HomeButton,
} from './NotFound.styled';
import Goose404Mob from '../../images/404-page/goose-404-mobile.webp';
import Goose404Mob2x from '../../images/404-page/goose-404-mobile-2x.webp';
import Goose404Tab from '../../images/404-page/goose-404-tablet.webp';
import Goose404Tab2x from '../../images/404-page/goose-404-tablet-2x.webp';
import Goose404Desk from '../../images/404-page/goose-404-desktop.webp';
import Goose404Desk2x from '../../images/404-page/goose-404-desktop-2x.webp';

const NotFound = () => {
  const isRetina = window.devicePixelRatio > 1;
  const logoImage = ` ${isRetina ? Goose404Mob2x : Goose404Mob} 375w,
                      ${isRetina ? Goose404Tab2x : Goose404Tab} 768w,
                      ${isRetina ? Goose404Desk2x : Goose404Desk} 769w `;

  return (
    <Wrap>
      <div>
        <PictureWrap>
          4
          <Picture
            srcSet={logoImage}
            sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, (min-width: 769px)"
            src={Goose404Mob}
            alt="Goose 404 logo"
          />
          4
        </PictureWrap>
      </div>

      <Text>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Text>

      <a href="/">
        <HomeButton type="button" href="/" to="/">
          Back to home
        </HomeButton>
      </a>
    </Wrap>
  );
};
export default NotFound;

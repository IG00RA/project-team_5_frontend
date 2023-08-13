import React from 'react';
import { Wrap, PictureWrap, Picture, Text, HomeButton } from './404page.styled';
import Goose404Mob from '../../images/404-page/goose-404-mobile.webp';
import Goose404Mob2x from '../../images/404-page/goose-404-mobile-2x.webp';
import Goose404Tab from '../../images/404-page/goose-404-tablet.webp';
import Goose404Tab2x from '../../images/404-page/goose-404-tablet-2x.webp';
import Goose404Desk from '../../images/404-page/goose-404-desktop.webp';
import Goose404Desk2x from '../../images/404-page/goose-404-desktop-2x.webp';

export const Page404 = () => {
  return (
    <Wrap>
      <div>
        <PictureWrap>
          4
          <Picture src={Goose404Desk2x} alt="Goose 404 logo"/>
          4
        </PictureWrap>
      </div>

      <Text>
        We’re sorry, the page you requested could not be found. Please go back to the homepage.
      </Text>

      <div href="/home">
        <HomeButton type="button" href="/home" to="/">Back to home</HomeButton>
      </div>
    </Wrap>
  )
}
export default Page404;
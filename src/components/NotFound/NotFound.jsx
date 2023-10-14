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
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
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

      <Text>{t('notFound.text')}</Text>
      <Link to="/">
        <HomeButton type="button">{t('notFound.backToHome')}</HomeButton>
      </Link>
    </Wrap>
  );
};
export default NotFound;

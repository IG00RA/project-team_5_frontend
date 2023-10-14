import {
  Wrap,
  SecondSectionWrap,
  DesktopSectionWrap,
  Number,
  Title,
  Subtitle,
  Text,
  Image,
  DarkTitle,
  LastTitle,
  SectionWrap,
} from './Description.styled';
import CalendarMob from '../../images/landing-page/mobile/image-mobile-1.jpg';
import CalendarMob2x from '../../images/landing-page/mobile/image-mobile-1-2x.jpg';
import SidebarMob from '../../images/landing-page/mobile/image-mobile-2.jpg';
import SidebarMob2x from '../../images/landing-page/mobile/image-mobile-2-2x.jpg';
import AllMob from '../../images/landing-page/mobile/image-mobile-3.jpg';
import AllMob2x from '../../images/landing-page/mobile/image-mobile-3-2x.jpg';

import CalendarTab from '../../images/landing-page/tablet/image-tablet-1.jpg';
import CalendarTab2x from '../../images/landing-page/tablet/image-tablet-1-2x.jpg';
import SidebarTab from '../../images/landing-page/tablet/image-tablet-2.jpg';
import SidebarTab2x from '../../images/landing-page/tablet/image-tablet-2-2x.jpg';
import AllTab from '../../images/landing-page/tablet/image-tablet-3.jpg';
import AllTab2x from '../../images/landing-page/tablet/image-tablet-3-2x.jpg';

import CalendarDesk from '../../images/landing-page/desktop/image-desktop-1.jpg';
import CalendarDesk2x from '../../images/landing-page/desktop/image-desktop-1-2x.jpg';
import SidebarDesk from '../../images/landing-page/desktop/image-desktop-2.jpg';
import SidebarDesk2x from '../../images/landing-page/desktop/image-desktop-2-2x.jpg';
import AllDesk from '../../images/landing-page/desktop/image-desktop-3.jpg';
import AllDesk2x from '../../images/landing-page/desktop/image-desktop-3-2x.jpg';
import { useTranslation } from 'react-i18next';

export const Description = () => {
  const isRetina = window.devicePixelRatio > 1;

  const calendarPicture = ` ${isRetina ? CalendarMob2x : CalendarMob} 375w,
                            ${isRetina ? CalendarTab2x : CalendarTab} 768w,
                            ${isRetina ? CalendarDesk2x : CalendarDesk} 769w`;

  const sidebarPicture = `${isRetina ? SidebarMob2x : SidebarMob} 375w,
                          ${isRetina ? SidebarTab2x : SidebarTab} 768w,
                          ${isRetina ? SidebarDesk2x : SidebarDesk} 769w`;

  const allDeskPicture = `${isRetina ? AllMob2x : AllMob} 375w,
                          ${isRetina ? AllTab2x : AllTab} 768w,
                          ${isRetina ? AllDesk2x : AllDesk} 769w`;
  const { t } = useTranslation();

  return (
    <Wrap>
      <SectionWrap>
        <div>
          <Number>1.</Number>
          <Title>{t('calendar.title')}</Title>
          <Subtitle>{t('description.view')}</Subtitle>
          <Text>{t('description.viewText')}</Text>
        </div>
        <Image
          srcSet={calendarPicture}
          sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, (min-width: 769px) 769px"
          src={CalendarMob}
          alt="Picture calendar"
        />
      </SectionWrap>

      <SectionWrap>
        <DesktopSectionWrap>
          <SecondSectionWrap>
            <Number>2.</Number>
            <DarkTitle>{t('description.sidebar')}</DarkTitle>
            <Text>{t('description.sidebarText')}</Text>
          </SecondSectionWrap>
          <Image
            srcSet={sidebarPicture}
            sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, (min-width: 769px) 769px"
            src={SidebarMob}
            alt="Picture sidebar"
          />
        </DesktopSectionWrap>
      </SectionWrap>

      <SectionWrap>
        <div>
          <Number>3.</Number>
          <LastTitle>{t('description.all')}</LastTitle>
          <Subtitle>{t('description.allSub')}</Subtitle>
          <Text>{t('description.allText')}</Text>
        </div>
        <Image
          srcSet={allDeskPicture}
          sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, (min-width: 769px) 769px"
          src={AllMob}
          alt="Picture all application"
        />
      </SectionWrap>
    </Wrap>
  );
};

export default Description;

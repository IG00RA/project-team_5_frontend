import React from 'react';
import {Wrap, SecondSectionWrap, DesktopSectionWrap, Number, Title, Subtitle, Text, Image, DarkTitle, LastTitle, SectionWrap} from './Description.styled'
/* import CalendarMob from '../../images/landing-page/mobile/image-mobile-1.jpg';
import CalendarMob2x from '../../images/landing-page/mobile/image-mobile-1-2x.jpg'
import SidebarMob from '../../images/landing-page/mobile/image-mobile-2.jpg';
import SidebarMob2x from '../../images/landing-page/mobile/image-mobile-2-2x.jpg';
import AllMob from '../../images/landing-page/mobile/image-mobile-3.jpg';
import AllMob2x from '../../images/landing-page/mobile/image-mobile-3-2x.jpg'; */

/* import CalendarTab from '../../images/landing-page/tablet/image-tablet-1.jpg';
import CalendarTab2x from '../../images/landing-page/tablet/image-tablet-1-2x.jpg';
import SidebarTab from '../../images/landing-page/tablet/image-tablet-2.jpg';
import SidebarTab2x from '../../images/landing-page/tablet/image-tablet-2-2x.jpg';
import AllTab from '../../images/landing-page/tablet/image-tablet-3.jpg';
import AllTab2x from '../../images/landing-page/tablet/image-tablet-3-2x.jpg'; */

/* import CalendarDesk from '../../images/landing-page/desktop/image-desktop-1.jpg'; */
import CalendarDesk2x from '../../images/landing-page/desktop/image-desktop-1-2x.jpg';
/* import SidebarDesk from '../../images/landing-page/desktop/image-desktop-2.jpg'; */
import SidebarDesk2x from '../../images/landing-page/desktop/image-desktop-2-2x.jpg';
/* import AllDesk from '../../images/landing-page/desktop/image-desktop-3.jpg'; */
import AllDesk2x from '../../images/landing-page/desktop/image-desktop-3-2x.jpg';

export const Description = () => {
  return (
    <Wrap>

      <SectionWrap>
        <div>
        <Number>1.</Number>
        <Title>Calendar</Title>
        <Subtitle>View</Subtitle>
        <Text>
          GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
          </Text>
        </div>
        <Image src={CalendarDesk2x} alt="Picture calendar"></Image>
      </SectionWrap>

      <SectionWrap>
        <DesktopSectionWrap>
        <SecondSectionWrap>
        <Number>2.</Number>
        <DarkTitle>Sidebar</DarkTitle>
        <Text>
          GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
        </Text>
        </SecondSectionWrap>
        <Image src={SidebarDesk2x} alt="Picture sidebar"></Image>
        </DesktopSectionWrap>
      </SectionWrap>

      <SectionWrap>
        <div>
        <Number>3.</Number>
        <LastTitle>All in</LastTitle>
        <Subtitle>One</Subtitle>
        <Text>
          GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
        </Text>
        </div>
        <Image src={AllDesk2x} alt="Picture all application"></Image>
      </SectionWrap>
      
    </Wrap>
  )
};

export default Description;
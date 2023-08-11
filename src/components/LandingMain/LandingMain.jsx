import React from 'react';
import {Wrap, Number, Title, Subtitle, Text, Image, DarkTitle, LastTitle, SectionWrap} from './LandingMain.styled'

export const LandingMain = () => {
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
        <Image src={"/public/logo192.png"} alt="Goose logo"></Image>
      </SectionWrap>

      <SectionWrap>
        <div>
        <Number>2.</Number>
        <DarkTitle>Sidebar</DarkTitle>
        <Text>
          GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
        </Text>
        </div>
        <Image src={"/public/logo192.png"} alt="Goose logo"></Image>
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
        <Image src={"/public/logo192.png"} alt="Goose logo"></Image>
      </SectionWrap>
      
    </Wrap>
  )
};

export default LandingMain;
import { styled } from "styled-components";

export const DayCalendarWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

padding: 10px 46px 10px 46px;

background-color: #fff;
`;

export const DayCalendarBtn = styled.button`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;

font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 1.28;
text-transform: uppercase;

color: #343434;
`;

export const NumberDay = styled.div`
padding: 4px 8px;

font-size: 16px;
font-weight: 700;
line-height: 1.12;

border-radius: 8px;
background-color: ${p => p.currentday === p.day && '#3E85F3'};
`;
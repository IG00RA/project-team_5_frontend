import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
/* 
@font-face {
  font-family: 'Inter';
  src:
    url('../styles/fonts/Inter-Regular.woff2') format('woff2'),
    url('../styles/fonts/Inter-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src:
    url('../styles/fonts/Inter-Medium.woff2') format('woff2'),
    url('../styles/fonts/Inter-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src:
    url('../styles/fonts/Inter-SemiBold.woff2') format('woff2'),
    url('../styles/fonts/Inter-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src:
    url('../styles/fonts/Inter-SemiBoldItalic.woff2') format('woff2'),
    url('../styles/fonts/Inter-SemiBoldItalic.woff') format('woff');
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src:
    url('../styles/fonts/Inter-Bold.woff2') format('woff2'),
    url('../styles/fonts/Inter-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src:
    url('../styles/fonts/Inter-BoldItalic.woff2') format('woff2'),
    url('../styles/fonts/Inter-BoldItalic.woff') format('woff');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Coolvetica';
  src:
    url('../styles/fonts/CoolveticaRg-Regular.woff2') format('woff2'),
    url('../styles/fonts/CoolveticaRg-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Coolvetica';
  src:
    url('../styles/fonts/CoolveticaRg-Italic.woff2') format('woff2'),
    url('../styles/fonts/CoolveticaRg-Italic.woff') format('woff');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  src:
    url('../styles/fonts/Poppins-Medium.woff2') format('woff2'),
    url('../styles/fonts/Poppins-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  src:
    url('../styles/fonts/Poppins-Regular.woff2') format('woff2'),
    url('../styles/fonts/Poppins-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
} */

:root {
  --black: #13151a;
  --blackText: #111111;
  --white: #ffffff;
  --blue: #3e85f3;
  --lightBlue1: #dcebf7;
  --lightBlue2: #e3f3ff;
  --lightBlueActive: #cae8ff;
  --grey: #343434;
  --blackBG: #21222c;
  --darkBG: #171820;
  --greyText: #616161;
  --greySub: #84828a;
  --greyCard: #f7f6f9;
  --greyElements: #efefef;
  --blueStatus: #ceeefd;
  --yellowStatus: #fcf0d4;
  --pinkStatus: #ffd2dd;
  --orangePriority: #f3b249;
  --redPriority: #ea3d65;
  --bluePriority: #72c2f8;
  --scrollBar: #e7e5e5;
  --scrollBarBG: #f2f2f2;
  --darkScrollBarBG: #2d3037;
  --xs: 320px;
  --s: 375px;
  --m: 768px;
  --l: 1440px;
}

html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 1.29;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
.list {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  text-decoration: none;
}

.list {
  list-style: none;
}

.link {
  text-decoration: none;
  color: inherit;
}

a {
  text-decoration: none;
  font-style: normal;
  cursor: pointer;
}

button {
  padding: 0;
  font-family: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

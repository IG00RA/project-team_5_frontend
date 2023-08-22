import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
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


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul{
  margin-left: 0;
  padding: 0;
}

li {
  list-style: none;
  text-decoration: none;
}

a {
  text-decoration: none;
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

.ReactModal__Overlay {
  opacity: 0;
  transition: all 100ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
}
.ReactModal__Content {
  transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
  transition: transform 500ms ease-in-out, opacity 300ms ease-in-out; 
  opacity: 0;
}

.ReactModal__Content--after-open {
  transform: perspective(600px) translate(0px, 0px) rotateX(0);
  opacity: 1;
}

.ReactModal__Content--before-close {
  transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
  opacity: 0;
}
`;

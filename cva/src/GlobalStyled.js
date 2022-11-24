import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
/* font-family: 'Lato', sans-serif; */
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;700&display=swap');
/* font-family: "Inconsolata", monospace; */

:root {
  --header-background: #E2F3F5;
  --header-color: #0E153A;
  --about-background: #F2F2F2;
  --about-color: #0E153A;
  --about-secudary: #FFFA;
  --project-color: #FFFA;
  --project-secundary: #0E153A;
}

* {
  font-size: 62.5%;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
`;

import styled from "styled-components";

export const Logo = styled.div`
  h1 {
    color: var(--header-color);
    width: 400px;
    font-family: "Inconsolata", monospace;
    font-weight: 200;
    transition: font-weight 0.3s ease-in-out, transform 0.5s ease-in-out,
      letter-spacing 0.5s cubic-bezier(0.15, 0.16, 0, 1.65);
    &:hover {
      font-weight: 800;
      letter-spacing: 3px;
      transform: scale(1.1);
    }
  }
`;

export const Header = styled.div`
  position: fixed;
  background-color: var(--header-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 7%;
  margin: 0 auto;
  border-bottom: 0.5px solid gray;
  z-index: 2;
  transition: all 2s ease-in-out;
  &:hover {
    -webkit-box-shadow: inset 0px -20px 32px -20px var(--header-color);
    -moz-box-shadow: inset 0px -20px 32px -20px var(--header-color);
    box-shadow: inset 0px -20px 32px -20px var(--header-color);
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  li {
  }
  a {
    padding: 7px;
    color: var(--header-color);
    font-size: 25px;
    border-radius: 25px;
    transition: background-color 0.3s ease-in-out, letter-spacing 0.5s cubic-bezier(0.15, 0.16, 0, 1.65),
      box-shadow 1s cubic-bezier(0.15, 0.16, 0, 1.65);
    &:hover {
      letter-spacing: 3px;
      color: var(--header-background);
      background-color: var(--header-color);
    }
  }
`;

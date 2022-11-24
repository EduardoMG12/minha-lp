import styled from "styled-components";

export const Logo = styled.div`
  h1 {
    color: var(--header-color);
    font-family: "Inconsolata", monospace;
    font-weight: 200;
    font-size: 2.5rem;
    transition: font-weight 0.3s ease-in-out, transform 0.5s ease-in-out,
      letter-spacing 0.5s cubic-bezier(0.15, 0.16, 0, 1.65);
    &:hover {
      font-weight: 800;
      letter-spacing: 0.3rem;
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
  padding: 2rem 7%;
  margin: 0 auto;
  border-bottom: 0.5px solid gray;
  z-index: 2;
  transition: all 2s ease-in-out;
  &:hover {
    -webkit-box-shadow: inset 0px -20px 32px -20px var(--header-color);
    -moz-box-shadow: inset 0px -20px 32px -20px var(--header-color);
    box-shadow: inset 0px -20px 32px -20px var(--header-color);
  }
  @media (max-width: 1028px) {
    text-align: start;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (max-width: 1028px) {
      display: none;
    }
  }
  a {
    padding: 0.7rem;
    color: var(--header-color);
    font-size: 2.5rem;
    border-radius: 25px;
    transition: background-color 0.3s ease-in-out, letter-spacing 0.5s cubic-bezier(0.15, 0.16, 0, 1.65),
      box-shadow 1s cubic-bezier(0.15, 0.16, 0, 1.65);
    &:hover {
      letter-spacing: 1px;
      color: var(--header-background);
      background-color: var(--header-color);
    }
    @media (max-width: 1028px) {
      transition: background-color 0.7s ease-in-out, letter-spacing 0.5s cubic-bezier(0.15, 0.16, 0, 1.65),
        box-shadow 3s cubic-bezier(0.15, 0.16, 0, 1.65);
      &:hover {
        border-radius: 2px;
        padding: 1.5rem 30rem;
        border-radius: 25px;
      }
    }
  }
`;

import styled from "styled-components";

export const Logo = styled.div`
  max-width: 290px;
  background-color: red;

  h1 {
    color: gray;
    font-family: "Inconsolata", monospace;
    font-weight: 200;
    transition: font-weight 0.3s ease-in-out, transform 0.5s ease-in-out,
      letter-spacing 0.5s cubic-bezier(0.15, 0.16, 0, 1.65);
    &:hover {
      font-weight: 800;
      letter-spacing: 2px;
      transform: scale(1.1);
    }
  }
`;

export const Header = styled.div`
  position: fixed;
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
    -webkit-box-shadow: inset 0px -20px 32px -20px rgba(0, 187, 201, 0.51);
    -moz-box-shadow: inset 0px -20px 32px -20px rgba(0, 187, 201, 0.51);
    box-shadow: inset 0px -20px 32px -20px rgba(0, 187, 201, 0.51);
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
    color: gray;
    font-size: 25px;
    border-radius: 50px;
    transition: color 0.3s ease-in-out, letter-spacing 0.5s cubic-bezier(0.15, 0.16, 0, 1.65),
      box-shadow 1s cubic-bezier(0.15, 0.16, 0, 1.65);
    &:hover {
      letter-spacing: 2px;
      -webkit-box-shadow: 0px 18px 33px -20px rgba(0, 187, 201, 0.7);
      box-shadow: 0px 18px 20px -10px rgba(0, 187, 201, 0.7);
    }
  }
`;

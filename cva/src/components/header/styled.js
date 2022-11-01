import styled from "styled-components";

export const Container = styled.section`
  * {
    background-color: black;
  }
  header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 7%;
    margin: 0 auto;
    border-bottom: 0.5px solid gray;
    z-index: 2;
  }
  .logo {
    width: 20px;
    background-color: red;
  }
  nav {
  }
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
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #00bbc9;
    }
  }
`;

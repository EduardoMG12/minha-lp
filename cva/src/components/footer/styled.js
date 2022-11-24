import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 5vh;
  background-color: var(--header-background);
  display: flex;
  justify-content: start;
  align-items: end;
  & h1 {
    color: var(--header-color);
    font-size: 1.5rem;
    & a {
      color: var(--header-color);
      font-size: 1.5rem;
    }
  }
`;

export const FooterContact = styled.div``;

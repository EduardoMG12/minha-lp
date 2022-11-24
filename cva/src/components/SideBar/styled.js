import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBarMenu = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 1028px) {
    flex-flow: column nowrap;
    background-color: var(--header-background);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    height: 60vh;
    width: 40vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const SideBarLink = styled(Link)`
  color: #000;
  display: block;
  font-weight: bold;
  text-align: center;
  height: 100%;
  font-size: 24px;
  display: none;
  text-decoration: none;
  @media (max-width: 1028px) {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s cubic-bezier(0.15, 0.16, 0, 1.65);
  }
  &:hover {
    color: var(--header-background);

    background-color: var(--project-secundary);
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

export const SideBarIcon = styled.span`
  color: black;
  width: 16px;
  height: 16px;
`;

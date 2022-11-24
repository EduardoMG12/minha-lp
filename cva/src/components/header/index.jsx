import React from "react";
import Hamburguer from "../Hamburguer";
import { Header, Logo, Nav } from "./styled";

export default function index() {
  return (
    <Header>
      <Logo>
        <h1>Charles Eduardo</h1>
      </Logo>
      <div>
        <Nav>
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Conhecimentos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </Nav>
        <Hamburguer />
      </div>
    </Header>
  );
}

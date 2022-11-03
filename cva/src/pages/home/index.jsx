import React from "react";
import { Container } from "./styled";
import About from "../../components/About";
import CProject from "../../components/ProjectContainer";

export default function index() {
  return (
    <Container>
      <div className="containerHome">
        <div className="imgHome" />
      </div>
      <About />
      <CProject />
    </Container>
  );
}

import React from "react";
import { ContainerFooter, FooterAbout, FooterContact } from "./styled";

export default function Footer() {
  return (
    <ContainerFooter>
      <FooterAbout>
        <p>Termos</p>
        <p>Privacidade</p>
        <p></p>
      </FooterAbout>
      <FooterContact></FooterContact>
    </ContainerFooter>
  );
}

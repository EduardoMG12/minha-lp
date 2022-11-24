import React from "react";
import { SideBarMenu, SideBarLink } from "./styled";

const SideBar = ({ open }) => {
  return (
    <SideBarMenu open={open}>
      <SideBarLink to="/">Sobre</SideBarLink>
      <SideBarLink to="/sellers">Projetos</SideBarLink>
      <SideBarLink to="/events">Conhecimentos</SideBarLink>
      <SideBarLink to="/beaPromoter">Contato</SideBarLink>
    </SideBarMenu>
  );
};

export default SideBar;

import React from "react";
import { Project, Projects, ProjectsContainer } from "./styled";

export default function CProjects() {
  return (
    <ProjectsContainer>
      <h2>Projetos</h2>
      <Projects>
        <h2></h2>
        <Project>
          <h2>Cronômetro</h2>
          <div className="imgProject imgProject1">
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </div>
          <p></p>
        </Project>
        <Project>
          <h2>Calculadora</h2>
          <div className="imgProject imgProject2">
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </div>
          <p></p>
        </Project>
        <Project>
          <h2>Lista com cache</h2>
          <div className="imgProject imgProject3">
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </div>
          <p>
            É uma lista "inputável" que salva os items em no cache do navegador, podendo apagar o mesmo depois caso
            aperte no botão delete
          </p>
        </Project>
      </Projects>
    </ProjectsContainer>
  );
}

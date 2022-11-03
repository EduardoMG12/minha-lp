import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  gap: 60px;
  text-align: center;
  line-height: center;
  h2 {
    color: var(--project-color);
    font-size: 50px;
  }
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 80px;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--project-secundary);
  justify-content: space-around;
  align-items: center;
  border: 2px solid white;
  border-radius: 40px;
  height: 80vh;
  width: 25%;
  padding: 0 50px;

  p {
    color: var(--project-color);
    font-size: 25px;
  }
`;

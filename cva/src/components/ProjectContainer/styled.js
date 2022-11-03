import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 25px;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid white;
  border-radius: 25px;
  height: 80vh;
  width: 25%;
  p {
    font-size: 25px;
  }
`;

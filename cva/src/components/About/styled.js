import styled from "styled-components";
import imgMe from "../../images/smokingSemFundo.png";

export const ContainerAbout = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const AboutImg = styled.div`
  background-image: url(${imgMe});
  background-position: center;
  background-size: cover;
  min-width: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  width: 800px;
  height: 800px;
  flex-shrink: 0;
`;

export const AboutTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  line-height: 35px;
  max-height: 1000px;
  width: 800px;
  .aboutText {
    background-color: #00bbc9;
    border-radius: 30px;
    padding: 15px;
    color: black;
    font-size: 20px;
    transition: box-shadow 1s cubic-bezier(0.15, 0.16, 0, 1.65), transform 0.5s cubic-bezier(0.15, 0.16, 0, 1.65);
    &:hover {
      -webkit-box-shadow: 0px 0px 60px -10px rgba(0, 187, 201, 1);
      -moz-box-shadow: 0px 0px 60px -10px rgba(0, 187, 201, 1);
      box-shadow: 0px 0px 60px -10px rgba(0, 187, 201, 1);
      transform: scaleX(1.1);
    }
  }
`;

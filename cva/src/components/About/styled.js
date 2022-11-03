import styled from "styled-components";
import imgMe from "../../images/smokingSemFundo.png";

export const ContainerAbout = styled.div`
  background-color: var(--about-background);
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const AboutImg = styled.div`
  background-image: url(${imgMe});
  background-position: center, center;
  background-size: cover;
  min-width: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  width: 800px;
  height: 800px;
  flex-shrink: 0;
`;

export const CAboutTexts = styled.div``;

export const AboutTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  line-height: 35px;
  max-height: 1000px;
  width: 800px;
  .aboutText {
    background-color: var(--about-secudary);
    border-radius: 30px;
    padding: 15px;
    color: var(--about-color);
    font-size: 25px;
    font-weight: 600;
    transition: box-shadow 1s cubic-bezier(0.15, 0.16, 0, 1.65), transform 0.5s cubic-bezier(0.15, 0.16, 0, 1.65);
    -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    &:hover {
      -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.4);
      transform: scaleX(1.03);
    }
    .aboutText1 {
      position: absolute;
      transform: translateX(20px);
    }
  }
`;

import styled from "styled-components";
import imgMe from "../../images/smokingSemFundo.png";

export const ContainerAbout = styled.div`
  background: rgb(174, 228, 238);
  background: radial-gradient(circle, rgba(174, 228, 238, 1) 0%, rgba(71, 93, 128, 1) 100%);
  background-size: 300%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  padding-top: 4rem;
  &:hover {
    animation: animation 10s alternate-reverse infinite;
    @keyframes animation {
      0% {
        background-position: 100%;
      }
      50% {
        background-position: 50%;
      }
      100% {
        background-position: 0%;
      }
    }
  }
  @media (max-width: 1268px) {
    flex-direction: column;
    gap: 10rem;
  }
`;

export const AboutImg = styled.div`
  background-image: url(${imgMe});
  background-position: center;
  background-size: cover;
  min-height: 10rem;
  background-repeat: no-repeat;
  width: 80rem;
  height: 80rem;
  flex-shrink: 0;
  @media (max-width: 819px) {
    width: 60rem;
    height: 60rem;
  }
  @media (max-width: 450px) {
  }
`;

export const CAboutTexts = styled.div``;

export const AboutTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.5rem;
  line-height: 35px;
  max-height: 100rem;
  width: 70rem;
  margin-bottom: 10rem;
  .aboutText {
    background-color: var(--about-secudary);
    border-radius: 30px;
    padding: 1.5rem;
    color: var(--about-color);
    font-size: 2.5rem;
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
    @media (max-width: 1268px) {
      flex-direction: column;
      position: relative;
      width: 90vw;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

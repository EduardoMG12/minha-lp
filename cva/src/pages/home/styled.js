import styled from "styled-components";
import imgBack from "../../images/backgrounComputer.jpg";
import imgMe from "../../images/smokingSemFundo.png";

export const Container = styled.section`
  * {
    background-color: #363535;
  }
  .containerHome {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  .imgHome {
    width: 100vw;
    height: 800px;
    background-image: url(${imgBack});
    background-position-y: 30%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .containerAbout {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-color: rgb(54, 53, 53);
  }
  .aboutImg {
    background-image: url(${imgMe});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 800px;
    height: 800px;
    flex-shrink: 0;
  }
  .aboutTexts {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 15px;
    line-height: 35px;
    max-height: 1000px;
    width: 800px;
  }
  .aboutText {
    background-color: #00bbc9;
    border-radius: 30px;
    padding: 15px;
    color: black;
    font-size: 20px;
    transition: 1s background ease-in-out;
    transition: 0.5s color ease-in-out;
    &:hover {
      background-color: black;
      color: #00bbc9;
    }
  }
`;

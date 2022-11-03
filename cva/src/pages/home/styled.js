import styled from "styled-components";
import imgBack from "../../images/backgrounComputer.jpg";

export const Container = styled.section`
  .containerHome {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
`;

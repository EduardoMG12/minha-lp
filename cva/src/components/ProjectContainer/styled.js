import styled from "styled-components";

export const CCarousel = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  gap: 60px;
  @media (max-width: 768px) {
    width: 100%;
  }

  .carousel {
    width: 70vw;
    @media (max-width: 768px) {
      width: 100vw;
    }
  }
  .legend {
    padding: 20px;
    background-color: var(--header-background);
    color: var(--header-color);
    transition: padding 1s cubic-bezier(0.15, 0.16, 0, 1.65);
  }
`;

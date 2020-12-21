import styled from "styled-components";

export const Container = styled.div`
  display: block;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;

  @media (min-width: 769px) {
    & {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 70px;

  @media (min-width: 769px) {
    & {
      flex: 1 1 auto;
    }
  }
`;

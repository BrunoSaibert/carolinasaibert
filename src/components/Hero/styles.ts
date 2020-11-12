import styled from "styled-components";

import config from "../../lib/config";

export const Container = styled.section<{ urlImg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 auto;

  width: 100%;
  height: calc(100vh - 70px);

  /* margin-top: 50px; */

  background: #333;
  background: url(${(props) => props.urlImg}); /* fallback */
  background: linear-gradient(rgba(59, 151, 120, 0.1), rgba(59, 151, 120, 0.2)),
    url(${(props) => props.urlImg}) no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > div {
    max-width: 800px;
    padding: 1.5rem;

    & > * {
      text-align: center;
      text-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 769px) {
    margin-top: 70px;
  }

  /* h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 500;
    color: ${config.color.primary};
  }
  h2 {
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.25;
    color: #fff;
  }

  @media (max-width: 769px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  } */
`;

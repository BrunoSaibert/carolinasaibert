import styled, { css } from "styled-components";

import config from "../../lib/config";

export const Container = styled.footer`
  background-color: ${config.color.tertiary};
  padding: 1.25em 0;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 769px) {
    flex-direction: column;

    &,
    & p {
      text-align: center;
    }
  }

  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5em;
`;

export const Col = styled.div<{ separator?: boolean }>`
  ${(props) =>
    props.separator &&
    css`
      margin-left: 3rem;
      padding-left: 3rem;

      border-left: 1px solid ${config.color.light};

      @media (max-width: 769px) {
        margin-left: 0;
        padding-left: 0;

        border-left: 0;
      }
    `}
`;

export const Nav = styled.ul`
  list-style: none;
  margin: 0 1rem 1rem 1rem;
  font-size: 1.125rem;
  line-height: 2rem;

  @media (max-width: 769px) {
    margin: 0;
  }

  a {
    color: ${config.color.light};
  }
`;

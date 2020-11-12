import styled from "styled-components";

import { lighten } from "polished";

import config from "../../lib/config";

export const Container = styled.footer`
  background-color: ${lighten(0.5, config.color.primary)};
  padding: 1.25em 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25em;
`;

export const Col = styled.div`
  flex: 1;
`;

export const Nav = styled.ul`
  list-style: none;

  a {
    color: ${config.color.dark};
  }
`;

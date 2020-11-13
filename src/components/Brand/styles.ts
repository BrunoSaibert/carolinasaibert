import styled, { css } from "styled-components";

import config from "../../lib/config";

export const StyledLink = styled.a<{ color?: string; decorator?: boolean }>`
  color: ${(props) => (props.color ? config.color[props.color] : "#fff")};
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;

  ${(props) =>
    props.decorator &&
    css`
      &::after {
        content: "";
        width: 60px;
        height: 2px;
        background-color: ${props.color
          ? config.color[props.color]
          : config.color.primary};
        display: block;
        margin-top: 1rem;
        margin-bottom: 1rem;

        @media (max-width: 769px) {
          margin: 1rem auto;
        }
      }
    `};
`;

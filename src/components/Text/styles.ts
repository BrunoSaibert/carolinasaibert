import styled, { css } from "styled-components";

import config from "../../lib/config";

export const Container = styled.p<{
  color?: string;
  align?: "left" | "center" | "right" | "justify";
}>`
  color: ${(props) =>
    props.color ? config.color[props.color] : config.color.dark};

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};

      &.title {
        &::after {
          content: "";
          width: 60px;
          height: 2px;
          background-color: ${(props) => config.color.primary};
          display: block;
          ${props.align === "center" && `margin: 0 auto;`}
          margin-bottom: 1rem;
        }
      }
    `};
`;

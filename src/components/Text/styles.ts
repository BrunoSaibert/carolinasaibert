import styled, { css } from "styled-components";

import config from "../../lib/config";

export const Container = styled.p<{
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  weight?: string;
  decorator?: boolean;
}>`
  color: ${(props) =>
    props.color ? config.color[props.color] : config.color.dark};

  font-weight: ${(props) => (props.weight ? props.weight : 400)};

  text-align: ${(props) => (props.align ? props.align : "left")};

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
        ${props.align === "center" && `margin: 0 auto;`}
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
    `};
`;

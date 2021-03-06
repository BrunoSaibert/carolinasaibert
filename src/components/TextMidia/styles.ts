import styled, { css } from "styled-components";

import config from "../../lib/config";

export const Container = styled.section<{ bgColor?: string; full?: boolean }>`
  background-color: ${(props) => config.color[props.bgColor] || "#fff"};
  padding: 5rem 0;

  ${(props) =>
    props.full &&
    css`
      flex: 1 1 auto;
      min-height: calc(100vh - 70px);

      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const Content = styled.div<{ hasImage?: boolean }>`
  max-width: ${(props) => (props.hasImage ? 1200 : 900)}px;
  margin: 0 auto;
  padding: 0 1.5em;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    & {
      flex-direction: column;
    }
  }

  & > * {
    flex: 1;
  }
`;

export const ImageWarper = styled.div<{ imgAling?: string; imgGlow?: boolean }>`
  margin: 0 ${(props) => (props.imgAling === "right" ? 0 : "1rem")} 0
    ${(props) => (props.imgAling === "left" ? 0 : "1rem")};
  order: ${(props) => (props.imgAling === "right" ? 1 : 0)};

  @media (max-width: 769px) {
    & {
      margin: 1rem 0;
      order: 0;
    }
  }

  ${(props) =>
    props.imgGlow &&
    css`
      border-radius: 50%;
      overflow: hidden;
      background-color: ${config.color.primary};
      padding: 10px;

      img {
        border-radius: 50%;
      }
    `}
`;

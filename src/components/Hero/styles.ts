import styled, { css } from "styled-components";

import config from "../../lib/config";

const sizes = { sm: "20vh", md: "40vh", lg: "60vh" };

export const Container = styled.section<{
  bgColor?: string;
  urlImg?: string;
  size: "sm" | "md" | "lg";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  min-height: ${(props) => sizes[props.size]};
  height: auto;
  padding: 1.5rem;

  background: ${(props) =>
    props.bgColor ? config.color[props.bgColor] : config.color.primaryDark};
  ${(props) =>
    props.urlImg &&
    css`
      background: url(${props.urlImg}); /* fallback */
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${props.urlImg}) no-repeat;
    `};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > div {
    max-width: 800px;
  }

  @media (max-width: 769px) {
    margin-top: 70px;
    padding: 2.5rem 1.5rem;

    ${(props) =>
      props.size === "lg" &&
      css`
        min-height: calc(100vh - 70px);
      `}

    ${(props) =>
      props.urlImg &&
      css`
        background: url(${props.urlImg}); /* fallback */
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url(${props.urlImg.replace(".jpg", "-mob.jpg")}) no-repeat;
      `};

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

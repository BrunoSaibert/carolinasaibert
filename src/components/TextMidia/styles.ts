import styled from "styled-components";

import config from "../../lib/config";

export const Container = styled.section<{ bgColor?: string }>`
  background-color: ${(props) => config.color[props.bgColor] || "#fff"};
  padding: 5rem 0;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25em;

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

export const ImageWarper = styled.div<{ imgAling?: string }>`
  margin: 0 ${(props) => (props.imgAling === "right" ? 0 : "1rem")} 0
    ${(props) => (props.imgAling === "left" ? 0 : "1rem")};
  order: ${(props) => (props.imgAling === "right" ? 1 : 0)};

  @media (max-width: 769px) {
    & {
      margin: 1rem 0;
      order: 0;
    }
  }
`;

import styled from "styled-components";

const sizes = { sm: "20vh", md: "40vh", lg: "60vh" };

export const Container = styled.section<{
  urlImg: string;
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

  background: #333;
  background: url(${(props) => props.urlImg}); /* fallback */
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.urlImg}) no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > div {
    max-width: 800px;
    padding: 1.5rem;
  }

  @media (max-width: 769px) {
    margin-top: 70px;
    min-height: calc(100vh - 70px);
  }
`;

import styled from "styled-components";

import config from "../../lib/config";

export const Container = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 16.25rem;
  margin: 1rem auto 0;
  padding: 0.9375rem;

  border: 0;
  background: ${config.color.primary};
  background-image: linear-gradient(
    ${config.color.primaryDark},
    ${config.color.primary}
  );
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #ffffff;

  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: none;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  @media (max-width: 769px) {
    max-width: 100%;
  }
`;

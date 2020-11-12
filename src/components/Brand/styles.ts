import styled from "styled-components";

import config from "../../lib/config";

export const StyledLink = styled.a<{ color?: string }>`
  color: ${(props) => (props.color ? config.color[props.color] : "#fff")};
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
`;

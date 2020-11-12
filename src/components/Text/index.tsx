import React from "react";

import * as S from "./styles";

export interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  text?: any;
  color?: string;
  align?: "left" | "center" | "right" | "justify";
}

const Text: React.FC<TextProps> = ({
  children = null,
  text = null,
  as = "p",
  align = "left",
  color,
  ...props
}) => {
  return (
    <S.Container as={as} color={color} align={align} {...props}>
      {children || text}
    </S.Container>
  );
};

export default Text;

import React from "react";

import * as S from "./styles";

export interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  text?: any;
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  weight?: string;
  decorator?: boolean;
}

const Text: React.FC<TextProps> = ({
  children = null,
  text = null,
  as = "p",
  align = "left",
  color,
  weight,
  decorator = false,
  ...props
}) => {
  return (
    <S.Container
      as={as}
      color={color}
      align={align}
      weight={weight}
      decorator={decorator}
      {...props}
    >
      {children || text}
    </S.Container>
  );
};

export default Text;

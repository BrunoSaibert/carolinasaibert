import React from "react";
import Link from "next/link";

import * as S from "./styles";

export interface ButtonProps {
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  onClick?: any;
  text?: string;
  variant?: string;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  text,
  variant,
  outline,
  ...props
}) => {
  if (href) {
    return (
      <Link href={href}>
        <S.Container as="a" {...props}>
          {children || text}
        </S.Container>
      </Link>
    );
  }

  return (
    <S.Container as="button" onClick={onClick} {...props}>
      {children || text}
    </S.Container>
  );
};

export default Button;

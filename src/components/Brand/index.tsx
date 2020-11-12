import React from "react";
import Link from "next/link";

import * as S from "./styles";

interface Props {
  href?: string;
  color?: string;
}

const Brand: React.FC<Props> = ({ href = "/", color = "primary" }) => {
  return (
    <Link prefetch href={href} passHref>
      <S.StyledLink color={color}>Carolina Saibert</S.StyledLink>
    </Link>
  );
};

export default Brand;

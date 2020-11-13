import React from "react";
import Link from "next/link";

import * as S from "./styles";

interface Props {
  href?: string;
  color?: string;
  decorator?: boolean;
}

const Brand: React.FC<Props> = ({
  href = "/",
  color = "primary",
  decorator = false,
}) => {
  return (
    <Link prefetch href={href} passHref>
      <S.StyledLink color={color} decorator={decorator}>
        Carolina Saibert
      </S.StyledLink>
    </Link>
  );
};

export default Brand;

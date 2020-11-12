import React, { ReactElement } from "react";

import Text, { TextProps } from "../Text";
import Button, { ButtonProps } from "../Button";

import * as S from "./styles";

interface Props {
  urlImg: string;
  size: "sm" | "md" | "lg";
  title?: TextProps;
  description?: TextProps;
  cta?: ButtonProps;
}

const Hero: React.FC<Props> = ({ urlImg, size, title, description, cta }) => {
  return (
    <S.Container urlImg={urlImg} size={size}>
      <div>
        {title && (
          <Text
            as={title.as}
            color={title.color}
            align={title.align}
            decorator={title.decorator}
            weight="bold"
          >
            {title.text}
          </Text>
        )}

        {description && (
          <Text
            as={description.as}
            color={description.color}
            align={description.align}
          >
            {description.text}
          </Text>
        )}

        {cta && <Button href={cta.href}>{cta.text}</Button>}
      </div>
    </S.Container>
  );
};

export default Hero;

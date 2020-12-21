import React from "react";
import Image from "next/image";

import Text, { TextProps } from "../Text";
import Button, { ButtonProps } from "../Button";

import * as S from "./styles";

interface ImageProps {
  url: string;
  alt: string;
  align?: "left" | "right";
  props: any;
  glow?: boolean;
}

interface Props {
  bgColor?: any;
  title?: TextProps;
  description?: TextProps;
  img?: ImageProps;
  cta?: ButtonProps;
  full?: boolean;
}

const TextMidia: React.FC<Props> = ({
  bgColor = null,
  title,
  description,
  img,
  cta,
  full,
  ...props
}) => {
  return (
    <S.Container bgColor={bgColor} full={full} {...props}>
      <S.Content hasImage={!!img}>
        {img && (
          <S.ImageWarper imgAling={img.align} imgGlow={img.glow}>
            <Image src={img.url} alt={img.alt} {...img.props} />
          </S.ImageWarper>
        )}

        {(title || description) && (
          <div>
            {title && (
              <Text
                as={title.as}
                color={title.color}
                align={title.align}
                weight="bold"
                decorator={!!description}
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
        )}
      </S.Content>
    </S.Container>
  );
};

export default TextMidia;

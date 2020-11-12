import React from "react";
import Image from "next/image";

import Text, { TextProps } from "../Text";

import * as S from "./styles";

interface ImageProps {
  url: string;
  alt: string;
  align?: "left" | "right";
  props: any;
}

interface Props {
  bgColor?: any;
  title?: TextProps;
  description?: TextProps;
  img?: ImageProps;
}

const TextMidia: React.FC<Props> = ({
  bgColor = null,
  title,
  description,
  img,
}) => {
  return (
    <S.Container bgColor={bgColor}>
      <S.Content>
        {img && (
          <S.ImageWarper imgAling={img.align}>
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
                className="title"
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
          </div>
        )}
      </S.Content>
    </S.Container>
  );
};

export default TextMidia;

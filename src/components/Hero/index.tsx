import React, { ReactElement } from "react";

import Text from "../Text";

import config from "../../lib/config";

import * as S from "./styles";

interface Props {
  urlImg: string;
  title: string | ReactElement;
  subtitle: string | ReactElement;
}

const Hero: React.FC<Props> = ({ urlImg, title, subtitle }) => {
  return (
    <S.Container urlImg={urlImg}>
      <div>
        <Text as="h1" color="primary">
          {title}
        </Text>
        <Text as="h2" color="light">
          {subtitle}
        </Text>
      </div>
    </S.Container>
  );
};

export default Hero;

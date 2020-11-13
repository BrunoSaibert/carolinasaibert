import React from "react";
import Link from "next/link";

import Brand from "../Brand";
import Text from "../Text";
import SocialList from "../SocialList";

import config from "../../lib/config";

import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.Row>
          <S.Col>
            <Brand decorator />

            <Text color="light">
              <strong>Psicóloga</strong> graduada pela{" "}
              <strong>Universidade Positivo</strong>, com formação em{" "}
              <strong>Consultoria de Estilo</strong> pela{" "}
              <strong>Estilo Rio</strong>
            </Text>
          </S.Col>

          <S.Col separator>
            <SocialList />

            <S.Nav>
              {config.pages.map(({ title, url }) => (
                <li key={url}>
                  <Link href={url}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </S.Nav>
          </S.Col>
        </S.Row>
      </S.Container>

      <S.Container copy>
        <Text as="h5" color="dark" align="center">
          &copy; 2020 - {config.copy}
        </Text>
      </S.Container>
    </>
  );
};

export default Footer;

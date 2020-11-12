import React from "react";
import Link from "next/link";

// import Brand from "../Brand";
// import { SocialList } from "../SocialList";

import config from "../../lib/config";

import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Row>
        <S.Col>
          {/* <Brand /> */}

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptates laudantium sapiente placeat ut blanditiis, dolores nulla
            quas veritatis! Aut dolore suscipit totam necessitatibus at non
            quibusdam fugit ullam porro!
          </p>
        </S.Col>

        <S.Col>
          {/* <SocialList /> */}

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
  );
};

export default Footer;

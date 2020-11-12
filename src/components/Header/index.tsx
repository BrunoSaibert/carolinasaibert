import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Brand from "../Brand";
("");
import Burger from "../Burger";

import config from "../../lib/config";

import * as S from "./styles";

const Header: React.FC = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <S.Container className={active ? "active" : ""}>
      <div className={"navigation " + (active ? "active" : "")}>
        <Brand />
        <Burger active={active} onClick={() => setActive(!active)} />

        <ul>
          {config.pages.map(({ title, url }) => (
            <li key={url}>
              <Link href={url}>
                <a className={router.pathname === url ? "current" : null}>
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </S.Container>
  );
};

export default Header;

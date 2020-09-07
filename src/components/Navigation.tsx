import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import Brand from "./Brand";
import { useState } from "react";

import { lighten } from "polished";

import config from "../lib/config";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="nav">
        <div className={"navigation " + (active ? "active" : "")}>
          <Brand />
          <Burger active={active} onClick={() => setActive(!active)} />
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname === "/" ? "active" : null}>
                  Sobre
                </a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a
                  className={
                    router.pathname.startsWith("/posts") ? "active" : null
                  }
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .nav {
            display: block;
            background-color: ${lighten(0.4, config.color_primary)};
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
          }
          .navigation {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.25em;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          li {
            font-size: 1rem;
            padding: 0 0 0 1.5rem;
          }
          .active {
            color: #222;
          }

          @media (max-width: 769px) {
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              margin: 50px 0 0;
              padding: 0;
              position: fixed;
              top: 0;
              left: 0;
              background-color: #fff;
              flex-direction: column;
              text-align: right;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
          }
        `}
      </style>
    </>
  );
}

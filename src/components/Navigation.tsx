import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Burger from "./Burger";
import Brand from "./Brand";

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
            {config.pages.map(({ title, url }) => (
              <li key={url}>
                <Link href={url}>
                  <a className={router.pathname === url ? "active" : null}>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .nav {
            display: block;
            background-color: ${config.color.tertiary};
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
            height: 70px;
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
          a {
            font-weight: 500;
            color: ${config.color.light};
            text-decoration: none;
            transition: all 0.3s ease;
            text-transform: lowercase;
          }
          a:active,
          a:hover,
          .active {
            color: ${config.color.primary};
            border-bottom: 1px solid ${config.color.primary};
          }

          @media (max-width: 769px) {
            ul {
              opacity: 0;
              width: 100%;
              height: calc(100vh - 70px);
              margin: 70px 0 0;
              padding: 0;
              position: fixed;
              top: 0;
              left: 0;
              background-color: ${config.color.light};
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
              margin-bottom: 1rem;
              font-size: 1.25rem;
              padding: 0 1.5rem 0 0;
            }
            a {
              color: ${config.color.dark};
            }
          }
        `}
      </style>
    </>
  );
}

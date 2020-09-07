import Link from "next/link";

import { darken } from "polished";

import config from "../lib/config";

export default function Date() {
  return (
    <>
      <Link href="/">
        <a>Carolina Saibert</a>
      </Link>
      <style jsx>
        {`
          a {
            cursor: pointer;
            color: ${darken(0.3, config.color_primary)};
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}

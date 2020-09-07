import Link from "next/link";

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
            color: ${config.color_primary};
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}

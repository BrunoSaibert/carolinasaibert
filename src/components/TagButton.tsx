import Link from "next/link";
import { TagContent } from "../lib/tags";

import { lighten } from "polished";

import config from "../lib/config";

type Props = {
  tag: TagContent;
};
export default function TagButton({ tag }: Props) {
  return (
    <>
      <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
        <a>{tag.name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: ${lighten(0.4, config.color_primary)};
          color: ${config.color_primary};
          font-weight: 400;
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: ${lighten(0.3, config.color_primary)};
        }
      `}</style>
    </>
  );
}

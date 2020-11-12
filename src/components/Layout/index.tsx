import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";

import config from "../../lib/config";

import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <S.Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content={config.color.primary} />
      </Head>

      <Header />

      <S.Main>{children}</S.Main>

      <Footer />
    </S.Container>
  );
}

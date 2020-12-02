import Link from "next/link";

import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import Hero from "../components/Hero";
import TextMidia from "../components/TextMidia";

import QuemPodeContratar from "../containers/QuemPodeContratar";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/como-funciona"} />
      <OpenGraphMeta url={"/como-funciona"} />
      <TwitterCardMeta url={"/como-funciona"} />

      <Hero
        size="md"
        urlImg="/images/como_funciona.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Como funciona",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "conheça o nosso médoto",
        }}
      />

      <TextMidia
        img={{
          url: "/images/tour.svg",
          alt: "imagem de contato",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "Escolha o serviço",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              Visite a aba de{" "}
              <Link href="/servicos">
                <a>serviços</a>
              </Link>{" "}
              e encontre o que mais atende sua necessidade atual
            </>
          ),
        }}
        cta={{
          href: "/servicos",
          text: "Ver serviços",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/question.svg",
          alt: "imagem de contato",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "Ainda tem dúvidas?",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          color: "light",
          text: (
            <>
              Podemos agendar uma conversa inicial sem compromisso para
              avaliarmos juntos seu momento atual e qual a melhor forma de te
              ajudar.
              <br />
              <br />
              Esta conversa inicial <strong>NÃO TEM CUSTO</strong> e nela vamos
              tirar suas dúvidas e combinar os preços conforme o serviço
              escolhido.
            </>
          ),
        }}
        cta={{
          href: "/contato",
          text: "Entrar em contato",
        }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}

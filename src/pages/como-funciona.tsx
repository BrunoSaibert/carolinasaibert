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
      <BasicMeta title="Como funciona" url={"/como-funciona"} />
      <OpenGraphMeta url={"/como-funciona"} />
      <TwitterCardMeta url={"/como-funciona"} />

      <Hero
        size="sm"
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
          text: "entenda como posso te ajudar",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/tour.svg",
          alt:
            "Ilustração de três pessoas escolhendo um entre os diversos quadros de serviços overtados",
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
              Visite a aba de serviços e encontre o que mais atende sua
              necessidade atual.
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
          url: "/images/conversation2.svg",
          alt:
            "Ilustração de duas pessoas sentadas em um escritório conversando",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "O atendimento",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          color: "light",
          text: (
            <>
              Cada serviço é construido em conjunto com você, para atingir o
              melhor resultado.
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/key_points.svg",
          alt:
            "Ilustração de uma mulher mostrando resultados de um gráfico em um quadro",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "O objetivo",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              Vamos juntos desenvolver seu potencial, para que você seja sua
              melhor versão.
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/question.svg",
          alt:
            "Ilustação de mulher apontando com uma lanterna para um ícone de questionamento para clarear as dúvidas",
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

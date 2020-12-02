import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";

import Hero from "../../components/Hero";
import TextMidia from "../../components/TextMidia";

import QuemPodeContratar from "../../containers/QuemPodeContratar";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/servicos/psicoterapia-individual"} />
      <OpenGraphMeta url={"/servicos/psicoterapia-individual"} />
      <TwitterCardMeta url={"/servicos/psicoterapia-individual"} />

      <Hero
        size="md"
        urlImg="/images/sobre.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Psicoterapia individual",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "conheça todos os nossos serviços",
        }}
      />

      <TextMidia
        img={{
          url: "/images/personal.svg",
          alt: "",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        description={{
          align: "center",
          text:
            "Realizo psicoterapia individual com pessoas maiores de 18 anos através da Abordagem Centrada na Pessoa. Os atendimentos são para TODES, livres de qualquer tipo de preconceito ou julgamentos morais quanto à sexualidade, identidade de gênero ou qualquer outra característica do cliente. Além disso a prática psicológica prevê sigilo sobre todas as informações compartilhadas durante o atendimento. Os atendimentos tem duração de 50 minutos e podem ser presenciais ou online. Atendo demandas gerais e para saber se posso te ajudar com suas questões marcamos um primeiro atendimento (gratuito), nos conhecemos melhor, você me conta o que te fez me procurar, te explico como a psicoterapia funciona (horários, minha forma de trabalho e outras possíveis dúvidas que você tenha) e, no final, você decide se deseja dar continuidade ao acompanhamento.",
        }}
        // cta={{
        //   href: "/servicos/psicoterapia-individual",
        //   text: "Saiba mais",
        // }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}

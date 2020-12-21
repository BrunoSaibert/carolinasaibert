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
        size="sm"
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
          text: "conheça o acompanhamento psicológico",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/personal.svg",
          alt:
            "Ilustação de moça segurando uma placa no formato de balão de conversas",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          color: "primary",
          align: "center",
          text: "Atendimento psicológico",
        }}
        description={{
          align: "center",
          text:
            "Realizo psicoterapia individual com pessoas maiores de 18 anos através da Abordagem Centrada na Pessoa.",
        }}
        cta={{
          href: "/contato",
          text: "Contrate agora",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/security.svg",
          alt:
            "Ilustração de um segurança e um cadeado em frente de uma página da internet",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        description={{
          align: "center",
          color: "light",
          text:
            "Os atendimentos são para TODES, livres de qualquer tipo de preconceito ou julgamentos morais quanto à sexualidade, identidade de gênero ou qualquer outra característica pessoal. Além disso a prática psicológica prevê sigilo sobre todas as informações compartilhadas durante o atendimento.",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/time.svg",
          alt:
            "Ilustração de uma mulher sentada em um dos ponteiros de um grande relógio",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        description={{
          align: "center",
          text: (
            <>
              Os atendimentos tem duração de <strong>50 minutos</strong> e podem
              ser presenciais ou online. Atendo demandas gerais e para saber se
              posso te ajudar com suas questões marcamos um primeiro{" "}
              <strong>atendimento (gratuito)</strong>, nos conhecemos melhor,
              você me conta o que te fez me procurar, te explico como a
              psicoterapia funciona (horários, minha forma de trabalho e outras
              possíveis dúvidas que você tenha) e, no final, você decide se
              deseja dar continuidade ao acompanhamento.
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="primary"
        title={{
          text: "Se conecte à sua essência e seja livre para ser você mesmo.",
          as: "h2",
          color: "gray",
          align: "center",
        }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}

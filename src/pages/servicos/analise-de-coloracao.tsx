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
      <BasicMeta url={"/servicos/analise-de-coloracao"} />
      <OpenGraphMeta url={"/servicos/analise-de-coloracao"} />
      <TwitterCardMeta url={"/servicos/analise-de-coloracao"} />

      <Hero
        size="sm"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Análise de coloração",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "descubra as cores que mais harmonizam com você",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/palette.svg",
          alt: "Ilustração de mulher pensativa com vários circulos de cores",
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
          text: "Sabia que as cores podem ser usadas a seu favor?",
        }}
        description={{
          align: "center",
          text:
            "Com a análise de coloração pessoal você descobre as cores que mais harmonizam com a sua beleza natural, as cores que mais te valorizam.",
        }}
        cta={{
          href: "/contaro",
          text: "Contrate agora",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/art_thinking.svg",
          alt: "Ilustração de uma mulher desfilando",
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
            "Com esse conhecimento você poderá criar combinações que ao mesmo tempo atendam suas preferências e harmonizem com sua aparência e seu estilo!",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/color.svg",
          alt: "Ilustração de uma moça observando uma paleta de cores",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        description={{
          align: "center",
          text:
            "Para isso eu irei analisar suas características pessoais, como subtom de pele, intensidade, profundidade e contraste. ",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/specs.svg",
          alt:
            "Ilustração de várias paletas de cores acima de folhas de um caderno",
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
            "À partir da análise destas características, utilizando o método sazonal expandido, é possível dizer em qual das chamadas “estações” você se encontra e, consequentemente, qual a sua paleta de cores.",
        }}
      />

      <TextMidia
        bgColor="primary"
        title={{
          text: "Descubra suas cores e valorize sua beleza.",
          as: "h2",
          color: "gray",
          align: "center",
        }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}

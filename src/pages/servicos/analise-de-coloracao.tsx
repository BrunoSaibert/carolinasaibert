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
        size="md"
        urlImg="/images/sobre.jpg"
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
        img={{
          url: "/images/palette.svg",
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
            "Sabia que as cores podem ser usadas a seu favor? Com a análise de coloração pessoal você descobre as cores que mais harmonizam com a sua beleza natural, as cores que mais te valorizam. Com esse conhecimento você poderá criar combinações que ao mesmo tempo atendam suas preferências e harmonizem com sua aparência e seu estilo! Para isso eu irei analisar suas características pessoais, como subtom de pele, intensidade, profundidade e contraste. À partir da análise destas características, utilizando o método sazonal expandido, é possível dizer em qual das chamadas “estações” você se encontra e, consequentemente, qual a sua paleta de cores.",
        }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}

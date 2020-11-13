import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import Hero from "../components/Hero";
import TextMidia from "../components/TextMidia";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/sobre"} />
      <OpenGraphMeta url={"/sobre"} />
      <TwitterCardMeta url={"/sobre"} />

      <Hero
        size="md"
        urlImg="/images/sobre.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Sobre",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "conheça mais sobre a profissional",
        }}
      />

      <TextMidia
        img={{
          url: "/images/carol.jpg",
          alt: "imagem de contato",
          align: "left",
          props: {
            width: 800,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "Carol Saibert",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              <strong>Psicóloga</strong> graduada pela{" "}
              <strong>Universidade Positivo</strong>, com formação em{" "}
              <strong>Consultoria de Estilo</strong> pela{" "}
              <strong>Estilo Rio</strong> e estudante de Psicologia da Moda
              (Fashion Psychology), área ainda pouco desenvolvida no Brasil.
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/friend.svg",
          alt: "imagem de contato",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        description={{
          align: "center",
          color: "light",
          text: (
            <>
              Apaixonada por pessoas e pela forma como cada uma expressa seu
              jeito único de ser, sempre me interessei pela moda e seus aspectos
              sociais, culturais e pela maneira como as pessoas a usam para se
              expressar.
            </>
          ),
        }}
      />

      <TextMidia
        img={{
          url: "/images/knowledge.svg",
          alt: "imagem de contato",
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
              Integro meus conhecimentos em um método único, desenvolvido por
              mim, para trabalhar com cada cliente de forma a desenvolver seu
              autoconhecimento, autenticidade e autonomia. Acredito que ao se
              sentir segura e tendo o vestir como uma ferramenta a seu dispor (e
              não o contrário) é possível ter uma vida mais leve, com espaço
              para outras prioridades que não a perseguição de uma imagem
              “perfeita” e inalcançável.
            </>
          ),
        }}
      />
    </Layout>
  );
}

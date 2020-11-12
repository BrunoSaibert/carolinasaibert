import Layout from "../components/Layout";
import Container from "../components/Container";
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
        size="sm"
        urlImg="/images/inicio.jpg"
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
        description={{
          align: "center",
          text: (
            <>
              Sou a Carol Saibert, Psicóloga graduada pela Universidade
              Positivo, com formação em Consultoria de Estilo pela Estilo Rio e
              estudante de Psicologia da Moda (Fashion Psychology), área ainda
              pouco desenvolvida no Brasil.
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="gray"
        description={{
          align: "center",
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

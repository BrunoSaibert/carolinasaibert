import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";

import Hero from "../../components/Hero";
import TextMidia from "../../components/TextMidia";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/servicos/consultoria-completa-em-psicologia-da-moda"} />
      <OpenGraphMeta
        url={"/servicos/consultoria-completa-em-psicologia-da-moda"}
      />
      <TwitterCardMeta
        url={"/servicos/consultoria-completa-em-psicologia-da-moda"}
      />

      <Hero
        size="md"
        urlImg="/images/sobre.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Consultoria Completa em Psicologia da Moda",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "Não é terapia. Também não é só uma consultoria de estilo",
        }}
      />

      <TextMidia
        img={{
          url: "/images/clothes.svg",
          alt: "",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{ text: "Se você:", as: "h2", color: "primary" }}
        description={{
          as: "ul",
          text: (
            <>
              <li>Nunca tem o que vestir (mesmo tendo várias roupas)</li>
              <li>Tem dificuldade em montar looks</li>
              <li>Não se sente bem com seus acessórios</li>
              <li>Acha que não tem estilo</li>
              <li>Sente que suas roupas não te representam</li>
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="tertiary"
        title={{
          text: "Eu posso te ajudar",
          as: "h2",
          color: "primary",
          align: "center",
        }}
        description={{
          color: "light",
          align: "center",
          text:
            "Com a Consultoria Completa em Psicologia da Moda você tem a oportunidade de se conhecer melhor, se reconectar com a sua essência e assim promover a mudança de imagem pessoal que deseja, acompanhando o desenvolvimento interno adquirido.",
        }}
      />

      <TextMidia
        title={{
          text:
            "Conheça as etapas da Consultoria Completa em Psicologia da Moda:",
          as: "h2",
          color: "primary",
          align: "center",
        }}
      />

      <TextMidia
        img={{
          url: "/images/key_points2.svg",
          alt: "",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Etapa 1 - Autoconhecimento",
          as: "h3",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text:
            "5 encontros de autoconhecimento e acolhimento da história de vida: Aqui vamos te conhecer melhor!",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/shopping2.svg",
          alt: "",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Etapa 2 - Prática",
          as: "h3",
          align: "center",
          color: "primary",
        }}
        description={{
          color: "light",
          align: "center",
          text:
            "6 encontros de análises, guarda roupas e personal shopper: Aqui vamos para a prática!",
        }}
      />

      <TextMidia
        bgColor="primary"
        title={{
          text: "Se encontre no seu guarda-roupas e simplifique a sua rotina.",
          as: "h2",
          color: "tertiary",
          align: "center",
        }}
      />

      <TextMidia
        img={{
          url: "/images/makeup.svg",
          alt: "",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Etapa 3 - Transformação",
          as: "h3",
          align: "center",
          color: "primary",
        }}
        description={{
          align: "center",
          text:
            "2 encontros para transformação no salão e aula de automaquiagem: Etapa contratadas à parte",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/jewelry.svg",
          alt: "",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Etapa 4 - Encerramento",
          as: "h3",
          align: "center",
          color: "primary",
        }}
        description={{
          color: "light",
          align: "center",
          text:
            "2 encontros para encerramento, entrega de lookbook e retorno após 30 dias: Aqui vamos avaliar os resultados!",
        }}
      />

      <TextMidia
        img={{
          url: "/images/people.svg",
          alt: "imagem de contato",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "Quem pode contratar?",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              Os serviços são oferecidos a qualquer pessoa que sinta que poderá
              se beneficiar deles.
              <br />
              <br />
              <strong>TODES SÃO BEM VINDES!</strong>
            </>
          ),
        }}
        cta={{
          href: "/contato",
          text: "Entrar em contato",
        }}
      />
    </Layout>
  );
}

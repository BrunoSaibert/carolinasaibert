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
      <BasicMeta
        title="Serviço - TranspareSer"
        url={"/servicos/transpare-ser"}
      />
      <OpenGraphMeta url={"/servicos/transpare-ser"} />
      <TwitterCardMeta url={"/servicos/transpare-ser"} />

      <Hero
        size="sm"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "TranspareSer",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "não é só uma consultoria de estilo",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/clothes.svg",
          alt:
            "Ilustração de moça observando uma vitrine para escolher um dos três vestidos",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text:
            "Se você quer se conhecer, olhar pra você de um jeito que nunca fez antes e com isso:",
          as: "h2",
          color: "primary",
        }}
        description={{
          as: "ul",
          text: (
            <>
              <li>Resgatar sua autoestima</li>
              <li>Desenvolver autoconfiança</li>
              <li>Entender seu estilo</li>
              <li>Descobrir suas melhores cores</li>
              <li>Aproveitar ao máximo o que já tem</li>
              <li>Fazer compras inteligentes</li>
              <li>Ser mais autêntica</li>
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
            "Com a TranspareSer você tem a oportunidade de se conhecer melhor, se reconectar com a sua essência e assim promover a mudança de imagem pessoal que deseja, acompanhando o desenvolvimento interno adquirido.",
        }}
      />

      <TextMidia
        bgColor="gray"
        title={{
          text: "Conheça as etapas da TranspareSer:",
          as: "h2",
          color: "primary",
          align: "center",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/key_points2.svg",
          alt:
            "Ilustração de uma mulher ao lado de um fluxograma de informações",
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
            "Vamos te conhecer melhor em 5 encontros de autoconhecimento e acolhimento da história de vida.",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/shopping2.svg",
          alt:
            "Ilustração de uma mulher comemorando feliz segurando sacolas de compras",
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
            "Os 6 encontros seguintes são para análises de tipo físico, coloração pessoal, guarda roupas e personal shopper.",
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/makeup.svg",
          alt: "Ilustração de um maqueador maqueando uma mulher",
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
          text: (
            <>
              Como complemento, há a opção de realizar 2 encontros para
              transformação no salão e aula de automaquiagem.
              <br />
              <small>* Etapas contratadas à parte</small>
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/jewelry.svg",
          alt: "Ilustração de uma moça bem vestida",
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
          text: (
            <>
              O encerramento acontece em 2 encontros:
              <br />o primeiro para a entrega de material digital com o
              resultado da consultoria e retorno após 30 dias para avaliar os
              resultados!
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="primary"
        title={{
          text: "Se encontre no seu guarda-roupas e simplifique a sua rotina.",
          as: "h2",
          color: "gray",
          align: "center",
        }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}

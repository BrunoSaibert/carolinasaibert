import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import Hero from "../components/Hero";
import TextMidia from "../components/TextMidia";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/servicos"} />
      <OpenGraphMeta url={"/servicos"} />
      <TwitterCardMeta url={"/servicos"} />

      <Hero
        size="md"
        urlImg="/images/sobre.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Serviços",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text:
            "a consultoria em psicologia da moda acontece da seguinte forma",
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
          as: "h2",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          // text: (
          //   <>
          //     <p>Vamos te conhecer melhor</p>
          //     <br />
          //     <strong>TODES SÃO BEM VINDES!</strong>
          //   </>
          // ),
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
          as: "h2",
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
          as: "h2",
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
          as: "h2",
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

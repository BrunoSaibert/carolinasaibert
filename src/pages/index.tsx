import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import Hero from "../components/Hero";
import TextMidia from "../components/TextMidia";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />

      <Hero
        size="lg"
        urlImg="/images/intro.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Psicologia, moda e autoestima",
        }}
        description={{
          as: "blockquote",
          color: "light",
          align: "center",
          text: (
            <>
              <p>
                “quando me aceito como sou
                <br />
                estou me modificando”
              </p>
              <cite>Carl Rogers</cite>
            </>
          ),
        }}
        cta={{
          href: "/servicos",
          text: "Saiba mais",
        }}
      />

      <TextMidia
        img={{
          url: "/images/clothes.svg",
          alt: "imagem de um guarda roupas",
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
          text: <>Eu posso te ajudar!</>,
          as: "h2",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          color: "light",
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
          href: "/servicos",
          text: "Conheça os serviços",
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
          url: "/images/services.svg",
          alt: "imagem de uma caneca de café indicando o início da jornada",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "Como funciona",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              AQUI VAMOS DESCREVER MELHOR COMO FUNCIONA E COMO O SERVIÇO É
              REALIZADO
            </>
          ),
        }}
        cta={{
          href: "/como-funciona",
          text: "Saiba mais",
        }}
      />
    </Layout>
  );
}

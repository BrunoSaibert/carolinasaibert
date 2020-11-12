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
        bgColor="gray"
        img={{
          url: "/images/guardaroupas.jpg",
          alt: "imagem de um guarda roupas",
          align: "right",
          props: {
            width: 1297,
            height: 729,
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
              <li>Quer saber as cores que mais te valorizam</li>
              <li>Quer experienciar uma outra forma de se mostrar ao mundo</li>
              <li>
                Quer se ver de uma forma diferente, tendo sua essência e valores
                respeitados
              </li>
            </>
          ),
        }}
      />

      <TextMidia
        title={{
          text: <>Eu posso te ajudar!</>,
          as: "h2",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              Os serviços são oferecidos a qualquer pessoa que sinta que poderá
              se beneficiar deles, TODES SÃO BEM VINDES!
              <br />
              Se encontre no seu guarda-roupas e simplifique a sua rotina
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="gray"
        img={{
          url: "/images/inicio.jpg",
          alt: "imagem de uma caneca de café indicando o início da jornada",
          align: "left",
          props: {
            // layout: "fill",
            width: 1298,
            height: 863,
          },
        }}
        title={{
          text: "Como funciona",
          as: "h2",
          color: "primary",
        }}
        description={{
          text: (
            <>
              Visite a aba de serviços e encontre o que mais atende sua
              necessidade atual
              <br />
              Caso fique em dúvida entre em contato comigo clicando aqui.
              Podemos agendar uma conversa inicial sem compromisso para
              avaliarmos juntos seu momento atual e qual a melhor forma de te
              ajudar. Esta conversa inicial NÃO TEM CUSTO e nela vamos tirar
              suas dúvidas e combinar os preços conforme o serviço escolhido.
              <br />
              Os serviços são oferecidos a qualquer pessoa que sinta que poderá
              se beneficiar deles, TODES SÃO BEM VINDES!
            </>
          ),
        }}
      />
    </Layout>
  );
}

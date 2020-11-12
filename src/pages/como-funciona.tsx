import Link from "next/link";

import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import Hero from "../components/Hero";
import TextMidia from "../components/TextMidia";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/como-funciona"} />
      <OpenGraphMeta url={"/como-funciona"} />
      <TwitterCardMeta url={"/como-funciona"} />

      <Hero
        size="md"
        urlImg="/images/inicio.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Como funciona",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "Conheça o nosso médoto",
        }}
      />

      <TextMidia
        description={{
          text: (
            <>
              Visite a aba de{" "}
              <Link href="/servicos">
                <a>serviços</a>
              </Link>{" "}
              e encontre o que mais atende sua necessidade atual
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="gray"
        description={{
          text: (
            <>
              Caso fique em dúvida entre em contato comigo{" "}
              <Link href="/contato">
                <a>clicando aqui</a>
              </Link>
              . Podemos agendar uma conversa inicial sem compromisso para
              avaliarmos juntos seu momento atual e qual a melhor forma de te
              ajudar. Esta conversa inicial NÃO TEM CUSTO e nela vamos tirar
              suas dúvidas e combinar os preços conforme o serviço escolhido
            </>
          ),
        }}
      />

      <TextMidia
        description={{
          text: (
            <>
              Os serviços são oferecidos a qualquer pessoa que sinta que poderá
              se beneficiar deles, TODES SÃO BEM VINDES!
            </>
          ),
        }}
      />
    </Layout>
  );
}

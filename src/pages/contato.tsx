import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import TextMidia from "../components/TextMidia";
import SocialList from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/contato"} />
      <OpenGraphMeta url={"/contato"} />
      <TwitterCardMeta url={"/contato"} />

      <TextMidia
        full
        img={{
          url: "/images/contact.svg",
          alt: "Imagem de contato",
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
          text: "Contato",
          decorator: true,
        }}
        description={{
          align: "center",
          text: (
            <>
              Se você tem alguma dúvida ou gostaria de mais detalhes sobre algo,
              entre em contato através dos links:
              <SocialList />
            </>
          ),
        }}
      />
    </Layout>
  );
}

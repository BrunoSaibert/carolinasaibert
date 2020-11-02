import Layout from "../components/Layout";
import Container from "../components/Container";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/contato"} />
      <OpenGraphMeta url={"/contato"} />
      <TwitterCardMeta url={"/contato"} />

      <Container>
        <div>Contato</div>
      </Container>
    </Layout>
  );
}

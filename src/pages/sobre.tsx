import Layout from "../components/Layout";
import Container from "../components/Container";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/sobre"} />
      <OpenGraphMeta url={"/sobre"} />
      <TwitterCardMeta url={"/sobre"} />

      <Container>
        <div>Sobre</div>
      </Container>
    </Layout>
  );
}

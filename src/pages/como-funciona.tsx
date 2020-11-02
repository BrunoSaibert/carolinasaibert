import Layout from "../components/Layout";
import Container from "../components/Container";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/como-funciona"} />
      <OpenGraphMeta url={"/como-funciona"} />
      <TwitterCardMeta url={"/como-funciona"} />

      <Container>
        <div>Como Funciona</div>
      </Container>
    </Layout>
  );
}

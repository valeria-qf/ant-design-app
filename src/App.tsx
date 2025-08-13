import { Layout, Typography } from "antd";
import Home from "./pages/Home";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", fontSize: "1.5rem" }}>
        Projeto Ant Design - Exemplo
      </Header>
      <Content style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          <Typography.Title level={2}>Bem-vindo ao Ant Design</Typography.Title>
          <Home />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Feito com Ant Design
      </Footer>
    </Layout>
  );
}

export default App;

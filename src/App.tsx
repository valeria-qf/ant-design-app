import { useState } from "react";
import { ConfigProvider, Layout, theme, Typography, Switch, Space } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import Home from "./pages/Home";

const { Header, Content, Footer } = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ConfigProvider theme={{ algorithm: darkMode ? darkAlgorithm : defaultAlgorithm }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          Biblioteca UI - Ant Design
          <Space>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </Space>
        </Header>

        <Content style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <Typography.Title level={2} style={{ color: darkMode ? "#fff" : "#000" }}>
              Bem-vindo
            </Typography.Title>
            <Home />
          </div>
        </Content>

        <Footer style={{ textAlign: "center", color: darkMode ? "#fff" : "#000" }}>
          Feito com Ant Design
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

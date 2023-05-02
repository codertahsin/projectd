import Hero from "../components/hero";
import React, { useState } from "react";
import {
  LockOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  StarOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "DashBoard",
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: "Account",
              },
              {
                key: "3",
                icon: <WechatOutlined />,
                label: "Chat",
              },
              {
                key: "4",
                icon: <StarOutlined />,
                label: "Favorite",
              },
              {
                key: "5",
                icon: <SettingOutlined />,
                label: "Setting",
              },
              {
                key: "6",
                icon: <LockOutlined />,
                label: "Privacy",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 5,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 660,
              background: colorBgContainer,
            }}
          >
            <Hero />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;

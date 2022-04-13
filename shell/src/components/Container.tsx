import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './Container.scss';

import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

const Container: React.VFC = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Modules">
                <Menu.Item key="1">
                  <span>App1</span>
                  <Link to="/app1" />
                </Menu.Item>
                <Menu.Item key="2">
                  <span>App2</span>
                  <Link to="/app2" />
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Routes>
              <Route
                path="/app1"
                element={
                  <React.Suspense fallback={<span>...loading</span>}>
                    <App1 />
                  </React.Suspense>
                }
              />
              <Route
                path="/app2"
                element={
                  <React.Suspense fallback={<span>...loading</span>}>
                    <App2 />
                  </React.Suspense>
                }
              />
            </Routes>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Container;

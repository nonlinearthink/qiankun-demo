import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';

const BasicLayout: React.FC = (props) => {
  return (
    <Layout style={{ height: '100%', minHeight: '100vh' }}>
      <Layout.Header></Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu theme="dark">
            <Menu.Item key="react">
              <Link to="/react">React</Link>
            </Menu.Item>
            <Menu.Item key="vue">
              <Link to="/vue">Vue</Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Content>{props.children}</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;

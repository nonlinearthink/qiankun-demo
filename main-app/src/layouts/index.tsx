import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';

const BasicLayout: React.FC = (props) => {
  return (
    <Layout style={{ height: '100%', minHeight: '100vh' }}>
      <Layout.Header></Layout.Header>
      <Layout>
        <Layout.Sider>
          <Menu multiple={false} theme="dark">
            <Link to="/react">
              <Menu.Item key="react">React</Menu.Item>
            </Link>
            <Link to="/vue">
              <Menu.Item key="vue">Vue</Menu.Item>
            </Link>
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

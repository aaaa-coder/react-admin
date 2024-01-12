import React, { useState } from 'react';
import { Breadcrumb, Layout,  theme } from 'antd';
import SiderMenu from "../SiderMain"
const { Header, Content, Footer, Sider } = Layout;
import { Outlet } from 'react-router-dom';


const breadcrumbItems: object[] = [
  {
    title:"Home"
  },
  {
    title:"Test"
  }
]
const MyLayoutComp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();




  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="sider_logo" />
        <SiderMenu />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems}>
          </Breadcrumb>
                  <div
            className='layout_content'
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', padding:0, lineHeight:'48px' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayoutComp;
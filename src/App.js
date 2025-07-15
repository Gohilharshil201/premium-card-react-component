import React from 'react';
import { Layout } from 'antd';
import PremiumCard from './components/premiumCard';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', padding:"0 10px"}}>
      <Header style={{ backgroundColor: '#001529', color: '#fff', fontSize: 20 }}>
        Premium Membership
      </Header>
      <Content style={{ padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap:"20px"}}>
        <PremiumCard />
        <PremiumCard /><PremiumCard />
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2025 Premium Card Demo With Ant-Design</Footer>
    </Layout>
    
  );
}

export default App;

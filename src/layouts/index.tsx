import * as React from 'react';
import { Layout } from 'antd';
// @ ./src
import NavLeft from '@/component/navLeft';
import NavHeader from '@/component/NavHeader';
const { Sider,Header,Content,Footer } = Layout;
interface I_layoutProps {
}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
  return <Layout className="_layout">
    <Sider 
      style={{height:'100vh'}} 
      width='200px'
      collapsedWidth='0'
      breakpoint='lg'
    >
      <NavLeft />
    </Sider>
    <Content>
        <NavHeader />
        <Content style={{minHeight: '60vh',border:"1px solid #000",margin:"12px"}}>
        {/* 根据路由加载的页面 /home/ui */}
            {props.children}
        </Content>
        <Footer style={{textAlign:"center",color:"#ccc"}}>页脚</Footer>
    </Content>
        </Layout>;
};

export default _layout;


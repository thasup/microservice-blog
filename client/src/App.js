import React from "react";
import { Layout } from "antd";

import "./App.css";

import Menubar from "./screen/Menubar";
import PostScreen from "./screen/PostScreen";
import Footerbar from "./screen/Footerbar";
import Headerbar from "./screen/Headerbar";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider theme="light">
                    <Menubar />
                </Sider>
                <Layout className="site-layout">
                    <Header theme="light" style={{ padding: 0 }}>
                        <Headerbar />
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <PostScreen />
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        <Footerbar />
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default App;

import React from "react";
import { Typography, Layout, Menu } from "antd";
import {
    StarOutlined,
    ScheduleOutlined,
    DeleteOutlined,
    BankOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

import "./App.css";
import Search from "antd/lib/input/Search";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
    const onSearch = (value) => console.log(value);

    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider theme="light">
                    <div className="logo">Todo Today</div>
                    <Search
                        className="search-btn"
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                    />
                    <Menu
                        theme="light"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <Menu.Item key="1" icon={<StarOutlined />}>
                            Important
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ScheduleOutlined />}>
                            Planned
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<BankOutlined />} title="Job">
                            <Menu.Item key="3">Estimate Cost</Menu.Item>
                            <Menu.Item key="4">Design Webpage</Menu.Item>
                            <Menu.Item key="5">Make App</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            icon={<HomeOutlined />}
                            title="Hobbies"
                        >
                            <Menu.Item key="6">Edit Video</Menu.Item>
                            <Menu.Item key="8">Mutual Fund</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<DeleteOutlined />}>
                            Recycle Bill
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header theme="light" style={{ padding: 0 }}></Header>
                    <Content style={{ margin: "0 16px" }}>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <Title level={2}>Create Post</Title>
                            <PostCreate />
                            <hr />
                            <Title level={2}>Posts</Title>
                            <PostList />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by THASUP
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default App;

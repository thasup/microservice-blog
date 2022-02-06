import React from "react";
import { Col, Layout, Row } from "antd";

import "./App.css";

import Menubar from "./screen/Menubar";
import PostScreen from "./screen/PostScreen";
import Footerbar from "./screen/Footerbar";

const { Footer } = Layout;

const App = () => {
    return (
        <>
            <Row theme="light">
                <Col span={5} className="layout-menu">
                    <Menubar />
                </Col>
                <Col flex="auto" className="layout-content">
                    <PostScreen />
                    <Footer style={{ textAlign: "center" }}>
                        <Footerbar />
                    </Footer>
                </Col>
            </Row>
        </>
    );
};

export default App;

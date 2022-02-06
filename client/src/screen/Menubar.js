import React from "react";
import { Affix, Menu } from "antd";
import {
    StarOutlined,
    ScheduleOutlined,
    DeleteOutlined,
    BankOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import Search from "antd/lib/input/Search";

const Menubar = () => {
    const { SubMenu } = Menu;
    const onSearch = (value) => console.log(value);

    return (
        <>
            <Affix>
                <div>
                    <div className="logo">Todo Today</div>
                    <Search
                        className="search-btn"
                        placeholder="search post"
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
                </div>
            </Affix>
        </>
    );
};

export default Menubar;

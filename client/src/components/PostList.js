import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Space, Menu, Dropdown, Tag } from "antd";
import {
    SettingOutlined,
    MessageOutlined,
    LikeOutlined,
} from "@ant-design/icons";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const { Meta } = Card;

const PostList = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4002/posts");

        setPosts(res.data);
    };

    useEffect(() => {
        setLoading(true);
        fetchPosts();
        setLoading(false);
    }, []);

    const menu = (
        <Menu>
            <Menu.Item key={1}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item key={2}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item key={3}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    const renderPosts = Object.values(posts).map((post) => {
        return (
            <Space direction="horizontal">
                <Card
                    key={post.id}
                    hoverable
                    style={{ width: 300, marginTop: 16, marginRight: 16 }}
                    cover={
                        <img
                            alt="example"
                            src="https://placekitten.com/g/600/400"
                        />
                    }
                    actions={[
                        <LikeOutlined key="like" />,
                        <MessageOutlined key="comment" />,
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <SettingOutlined key="setting" />
                        </Dropdown>,
                    ]}
                    loading={loading}
                >
                    <Tag color="blue">{post.topic}</Tag>
                    <Meta title={post.title} description={post.content} />
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </Card>
            </Space>
        );
    });
    return <div>{renderPosts}</div>;
};

export default PostList;

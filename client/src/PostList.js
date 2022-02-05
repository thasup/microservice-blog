import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Space } from "antd";
import { LinkOutlined, MessageOutlined, LikeOutlined } from "@ant-design/icons";

const { Meta } = Card;

const PostList = () => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4000/posts");

        setPosts(res.data);
    };

    useEffect(() => {
        setLoading(true);
        fetchPosts();
        setLoading(false);
    }, []);

    console.log(posts);

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
                        <LinkOutlined key="file" />,
                        <MessageOutlined key="comment" />,
                        <LikeOutlined key="like" />,
                    ]}
                    loading={loading}
                >
                    <Meta
                        title={post.title}
                        description="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </Card>
            </Space>
        );
    });
    return <div>{renderPosts}</div>;
};

export default PostList;

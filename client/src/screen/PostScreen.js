import React from "react";
import { Typography } from "antd";

import PostCreate from "../components/PostCreate";
import PostList from "../components/PostList";

const PostScreen = () => {
    const { Title } = Typography;
    return (
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
    );
};

export default PostScreen;

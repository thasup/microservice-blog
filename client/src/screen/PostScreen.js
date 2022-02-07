import React, { useState } from "react";
import { Typography } from "antd";

import PostCreate from "../components/PostCreate";
import PostList from "../components/PostList";

const PostScreen = () => {
    const { Title } = Typography;
    const [reload, setReload] = useState(false);

    return (
        <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
        >
            <Title level={2}>Add a task</Title>
            <PostCreate setReload={setReload} />
            <hr />
            <Title level={2}>Tasks</Title>
            <PostList reload={reload} setReload={setReload} />
        </div>
    );
};

export default PostScreen;

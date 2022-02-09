import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Space, Tag } from "antd";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const { Meta } = Card;

const PostList = ({ reload, setReload }) => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);
    const [commentReload, setCommentReload] = useState(false);

    const fetchPosts = async () => {
        const res = await axios.get("http://posts.com/posts");

        setPosts(res.data);
    };

    useEffect(() => {
        setLoading(true);
        fetchPosts();
        setLoading(false);
        setReload(false);
        setCommentReload(false);

        console.log(posts);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload, commentReload]);

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
                    loading={loading}
                >
                    {post.topic ? <Tag color="blue">{post.topic}</Tag> : null}

                    <Meta title={post.title} description={post.content} />
                    <CommentList comments={post.comments} />
                    <CommentCreate
                        postId={post.id}
                        setCommentReload={setCommentReload}
                    />
                </Card>
            </Space>
        );
    });
    return <div>{renderPosts}</div>;
};

export default PostList;

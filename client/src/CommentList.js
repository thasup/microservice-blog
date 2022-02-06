import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Space, List, Avatar, Dropdown, Tag } from "antd";

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchComments = async () => {
        const res = await axios.get(
            `http://localhost:4001/posts/${postId}/comments`
        );

        setComments(res.data);
    };

    useEffect(() => {
        setLoading(true);
        fetchComments();
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(comments);

    return (
        <>
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(comment) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                            }
                            title={`Title : ${comment.id}`}
                            description={comment.content}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default CommentList;

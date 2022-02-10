import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const CommentCreate = ({ postId, setCommentReload }) => {
    const [content, setContent] = useState("");

    const onComment = async () => {
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content,
        });

        setContent("");
        setCommentReload(true);
    };

    return (
        <>
            <Form onFinish={onComment}>
                <Input.Group compact>
                    <Input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="say something.."
                        style={{ width: "calc(100% - 80px)" }}
                    />
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Input.Group>
            </Form>
        </>
    );
};

export default CommentCreate;

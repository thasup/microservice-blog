import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState("");

    const onComment = async (e) => {
        // e.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        });
        console.log(content);

        setContent("");
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

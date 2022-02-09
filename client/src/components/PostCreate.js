import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";

const PostCreate = ({ setReload }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [topic, setTopic] = useState("");

    const onSubmit = async (e) => {
        // e.preventDefault();

        await axios.post("http://posts.com/posts", {
            title,
            content,
            topic,
        });
        console.log({ title, content, topic });

        setTitle("");
        setContent("");
        setTopic("");
        setReload(true);
    };

    return (
        <>
            <Form
                onFinish={onSubmit}
                labelCol={{
                    span: 2,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item name="title" label="Title">
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your title"
                        style={{ width: "300px" }}
                    />
                </Form.Item>
                <Form.Item name="content" label="Content">
                    <Input.TextArea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter your content"
                        style={{ width: "300px" }}
                    />
                </Form.Item>
                <Form.Item name="topic" label="Topic">
                    <Input
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Enter your topic"
                        style={{ width: "300px" }}
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 2,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default PostCreate;

import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onSubmit = async (e) => {
        // e.preventDefault();

        await axios.post("http://localhost:4000/posts", {
            title,
        });
        console.log(title);

        setTitle("");
    };

    return (
        <div>
            <Form onFinish={onSubmit}>
                <Form.Item name="note" label="Title">
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Post Title"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default PostCreate;

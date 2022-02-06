import React from "react";
import { List, Avatar } from "antd";

const CommentList = ({ comments }) => {
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(comment) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    src={`https://joeschmoe.io/api/v1/${comment.id}`}
                                />
                            }
                            title={`ID : ${comment.id}`}
                            description={comment.content}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default CommentList;

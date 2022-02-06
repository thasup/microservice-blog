import React, { createElement, useState } from "react";
import { List, Avatar, Comment, Tooltip, Tag } from "antd";
import {
    DislikeOutlined,
    LikeOutlined,
    DislikeFilled,
    LikeFilled,
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    MinusCircleOutlined,
} from "@ant-design/icons";
import moment from "moment";

const CommentList = ({ comments }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction("liked");
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction("disliked");
    };

    return (
        <>
            <List
                className="comment-list"
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(comment) => (
                    <li>
                        <Comment
                            actions={[
                                <Tooltip key="comment-basic-like" title="Like">
                                    <span onClick={like}>
                                        {createElement(
                                            action === "liked"
                                                ? LikeFilled
                                                : LikeOutlined
                                        )}
                                        <span className="comment-action">
                                            {likes}
                                        </span>
                                    </span>
                                </Tooltip>,
                                <Tooltip
                                    key="comment-basic-dislike"
                                    title="Dislike"
                                >
                                    <span onClick={dislike}>
                                        {React.createElement(
                                            action === "disliked"
                                                ? DislikeFilled
                                                : DislikeOutlined
                                        )}
                                        <span className="comment-action">
                                            {dislikes}
                                        </span>
                                    </span>
                                </Tooltip>,
                                <Tooltip key="status-approved" title="Status">
                                    {comment.status === "approved" && (
                                        <Tag
                                            icon={<CheckCircleOutlined />}
                                            color="success"
                                        >
                                            approved
                                        </Tag>
                                    )}
                                </Tooltip>,
                                <Tooltip key="status-pending" title="Status">
                                    {comment.status === "pending" && (
                                        <Tag
                                            icon={<SyncOutlined />}
                                            color="processing"
                                        >
                                            pending
                                        </Tag>
                                    )}
                                </Tooltip>,
                                <Tooltip key="status-rejected" title="Status">
                                    {comment.status === "rejected" && (
                                        <Tag
                                            icon={<CloseCircleOutlined />}
                                            color="error"
                                        >
                                            rejected
                                        </Tag>
                                    )}
                                </Tooltip>,
                            ]}
                            author={comment.id}
                            avatar={
                                <Avatar
                                    src={`https://joeschmoe.io/api/v1/${comment.id}`}
                                />
                            }
                            content={comment.content}
                            datetime={
                                <Tooltip
                                    title={moment().format(
                                        "YYYY-MM-DD HH:mm:ss"
                                    )}
                                >
                                    <span>{moment().fromNow()}</span>
                                </Tooltip>
                            }
                        />
                        <Tag icon={<MinusCircleOutlined />} color="default">
                            {comment.status}
                        </Tag>
                    </li>
                )}
            />
        </>
    );
};

export default CommentList;

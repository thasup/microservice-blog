const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
    if (type === "PostCreated") {
        const { id, title, content, topic } = data;

        posts[id] = { id, title, content, topic, comments: [] };
    }

    if (type === "CommentCreated") {
        const { id, postId, content, status } = data;

        const post = posts[postId];

        post?.comments.push({ id, content, status });
    }

    if (type === "CommentUpdated") {
        const { id, postId, content, status } = data;

        const post = posts[postId];

        const comment = post.comments.find((comment) => {
            return comment.id === id;
        });

        comment.status = status;
        comment.content = content;
    }
};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/events", (req, res) => {
    const { type, data } = req.body;

    handleEvent(type, data);

    res.send({});
});

const port = 4002;
app.listen(port, async () => {
    console.log(`Listening on port : ${port}`);

    try {
        const res = await axios.get("http://localhost:4005/events");

        for (let event of res.data) {
            console.log("Processing event:", event.type);

            handleEvent(event.type, event.data);
        }
    } catch (error) {
        console.log(error.message);
    }
});

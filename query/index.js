const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/events", (req, res) => {
    const { type, data } = req.body;

    if (type === "PostCreated") {
        const { id, title, content, topic } = data;

        posts[id] = { id, title, content, topic, comments: [] };
    }

    if (type === "CommentCreated") {
        const { id, postId, content, status } = data;

        const post = posts[postId];

        post.comments.push({ id, content, status });
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

    res.send({});
});

const port = 4002;
app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

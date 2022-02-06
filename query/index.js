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
        const { id, postId, content } = data;

        console.log({ id, postId, content });
        const post = posts[postId];

        console.log(postId, post.comments);
        post.comments.push({ id, content });
    }

    console.log(posts);

    res.send({});
});

const port = 4002;
app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/posts/create", async (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title, content, topic } = req.body;

    posts[id] = {
        id,
        title,
        content,
        topic,
    };

    await axios
        .post("http://event-bus-srv:4005/events", {
            type: "PostCreated",
            data: {
                id,
                title,
                content,
                topic,
            },
        })
        .catch((err) => {
            console.log(err.message);
        });

    res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
    console.log("Recieved Event:", req.body.type);

    res.send({});
});

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

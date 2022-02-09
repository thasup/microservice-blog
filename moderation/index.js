const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
    const { type, data } = req.body;

    if (type === "CommentCreated") {
        const status = data.content.includes("fuck") ? "rejected" : "approved";

        setTimeout(async () => {
            await axios
                .post("http://event-bus-srv:4005/events", {
                    type: "CommentModerated",
                    data: {
                        id: data.id,
                        postId: data.postId,
                        status,
                        content: data.content,
                    },
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, 10000);
    }

    res.send({});
});

const port = 4003;
app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

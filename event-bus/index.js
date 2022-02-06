const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", async (req, res) => {
    const event = req.body;

    await axios.post("http://localhost:4000/events", event).catch((err) => {
        console.log(err.message);
    });
    await axios.post("http://localhost:4001/events", event).catch((err) => {
        console.log(err.message);
    });
    await axios.post("http://localhost:4002/events", event).catch((err) => {
        console.log(err.message);
    });
    await axios.post("http://localhost:4003/events", event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: "OK" });
});

const port = 4005;
app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

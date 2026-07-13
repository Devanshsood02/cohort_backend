const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const notes = [];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is running");
});

app.post("/notes", (req, res) => {
    const { title, description } = req.body;

    console.log(req.body);

    notes.push({ title, description });

    res.status(201).json({
        message: "notes created",
        notes,
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`server is running on http://127.0.0.1:${PORT}`);
});

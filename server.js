const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Job Application Tracker Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
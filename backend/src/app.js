const path = require("path");
const express = require('express');
const planetsRouter = require('./routes/planets/planets.router');
const LaunchesRouter = require("./routes/launches/launches.router")
const app = express();

app.use(express.json());
app.use(planetsRouter);
app.use(LaunchesRouter);
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "frontend", "build", "index.html"));
});

module.exports = app;
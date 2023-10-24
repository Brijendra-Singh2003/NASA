const express = require("express");
const LaunchesRouter = express.Router();

let launches = [
    {
        upcoming: true,
        flightNumber: 1,
        launchDate: new Date(Date.now()),
        mission: "Mission Mangal",
        rocket: "pslv 6.9",
        target: "martians",
    },
];

LaunchesRouter.get("/launches", (req, res) => {
    return res.status(200).json(launches);
})

LaunchesRouter.post("/launches", (req, res) => {

    const data = {...req.body, upcoming: req.body.launchDate, flightNumber: (launches.at(-1)?.flightNumber || 0) + 1};
    launches.push(data);

    return res.status(200).send("launch successful!");
})

LaunchesRouter.delete("/launches", (req, res) => {

    const id = req.query.id;
    launches = launches.filter(launch => (launch.flightNumber !== Number.parseInt(id)));
    // console.log(id);

    return res.status(200).send("launch successful!");
})

module.exports = LaunchesRouter;
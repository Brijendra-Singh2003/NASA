const express = require('express');
const getAllPlanets = require("./palnets.controller");

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;
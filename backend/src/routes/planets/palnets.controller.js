const planets = require('../../models/planets.model');
const { Response, Request } = require('express');

/**
 * @param { Request } req
 * @param { Response } res
 * @returns { [] } array of planets
 */

function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}

module.exports = getAllPlanets;
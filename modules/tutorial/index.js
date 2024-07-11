const express = require('express');

const moduleRoutes = express.Router();

moduleRoutes.use('/tutorialcreate',require('./tutorialRoutes'));

module.exports = moduleRoutes;
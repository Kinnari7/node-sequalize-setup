const express = require('express');

const moduleRoutes = express.Router();

moduleRoutes.use('/tutorial',require('./tutorial'));

module.exports = moduleRoutes;
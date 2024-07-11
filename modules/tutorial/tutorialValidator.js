const express = require('express');
const { check, body, params } = require('express-validator/check');
const routes = express.Router();

const userValidator = {};

userValidator.validateUser = () => {
    return [
        body('title').exists().isString(),
        body('description').exists().isString()
    ];
};

module.exports = userValidator;
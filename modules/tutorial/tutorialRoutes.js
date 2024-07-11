const express = require('express');
const { validationResult } = require('express-validator/check');
const tutorialController = require('./tutorialController');
const routes = express.Router();
const validator = require('./tutorialValidator');

const tutorialMiddleware = [
    validator.validateUser(),
    (req, res, next)=>{
        const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array()[0]
                });
            };
            return next()
    },
    tutorialController.userController
];

routes.post('/create/', tutorialMiddleware);

module.exports = routes;
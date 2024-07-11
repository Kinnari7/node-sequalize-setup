const db = require('../../app/models');
const tutoaialModal = db.tutorials;
const tutorialService = {};

tutorialService.createUser = (where) => {
    return tutoaialModal.create(where);
};

module.exports = tutorialService;
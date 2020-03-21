const express = require('express');

const router = express.Router();

const controller = require('../../Controllers/LionDesk.controller');

//GET
router.get('/', controller.GetAll);
router.get('/search/:name', controller.Search);

//POST
router.post('/', controller.AddUser);

module.exports = router;
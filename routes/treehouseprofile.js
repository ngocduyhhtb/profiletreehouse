const express = require('express');
const treehouse_router = express.Router();
const treehouse_controller = require('../controllers/treehouse')
treehouse_router.get('/', treehouse_controller.index);
treehouse_router.get('/search', treehouse_controller.get_search);
treehouse_router.post('/search', treehouse_controller.post_search);
treehouse_router.get('/show', treehouse_controller.show);
module.exports = treehouse_router;
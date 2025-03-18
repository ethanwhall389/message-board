const {Router} = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = Router();


indexRouter.get('/', indexController.getAllMessages);
indexRouter.post('/new', indexController.addNewMessage);

module.exports = indexRouter;
var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController')

router.get('/', productController.home);
router.get('/create', productController.create);

router.post('/create', productController.store);

module.exports = router;
